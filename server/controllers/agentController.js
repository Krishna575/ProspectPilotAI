const Report = require("../models/Report");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const MODEL_NAME = "gemini-2.5-flash";
const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY_MS = 1000;
const REQUEST_TIMEOUT_MS = 90000;

console.log("Gemini Key Loaded:", process.env.GEMINI_API_KEY ? "YES" : "NO");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const isRetryableError = (error) => {
  const status = error?.status || error?.response?.status;
  const message = (error?.message || "").toLowerCase();

  return (
    status === 429 ||
    status === 500 ||
    status === 502 ||
    status === 503 ||
    status === 504 ||
    /429|too many requests|quota|rate limit|temporarily unavailable|service unavailable|timeout|network|socket hang up|econn|fetch failed/i.test(message)
  );
};

const getErrorMessage = (agentType, error) => {
  const status = error?.status || error?.response?.status;
  const message = error?.message || "";

  if (status === 429) {
    return `${agentType} is temporarily rate-limited. Please try again in a moment.`;
  }

  if (status === 503 || /service unavailable|temporarily unavailable/i.test(message)) {
    return `${agentType} is temporarily unavailable. Please try again shortly.`;
  }

  if (/quota|resource exhausted|quota exceeded/i.test(message)) {
    return `${agentType} could not be generated because the Gemini API quota has been exhausted.`;
  }

  if (/timeout|network|econn|socket hang up|fetch failed/i.test(message)) {
    return `${agentType} could not be completed due to a network issue. Please retry.`;
  }

  return `${agentType} could not be generated right now. Please try again.`;
};

const generateReportWithRetries = async ({ agentType, prompt, startupIdea }) => {
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  let lastError = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      console.info(`[${agentType}] attempt ${attempt}/${MAX_RETRIES} started`, {
        startupIdea: startupIdea.slice(0, 120),
      });

      const result = await Promise.race([
        model.generateContent(prompt),
        new Promise((_, reject) => {
          setTimeout(() => reject(new Error("Gemini request timed out")), REQUEST_TIMEOUT_MS);
        }),
      ]);

      const report = result?.response?.text?.();

      if (!report || !report.trim()) {
        throw new Error("Gemini returned an empty response");
      }

      console.info(`[${agentType}] attempt ${attempt}/${MAX_RETRIES} succeeded`);
      return report;
    } catch (error) {
      lastError = error;
      const status = error?.status || error?.response?.status;
      const message = error?.message || "Unknown Gemini error";

      console.error(`[${agentType}] attempt ${attempt}/${MAX_RETRIES} failed`, {
        status,
        message,
        stack: error?.stack,
      });

      if (attempt < MAX_RETRIES && isRetryableError(error)) {
        const retryDelay = INITIAL_RETRY_DELAY_MS * attempt;
        console.warn(`[${agentType}] retrying in ${retryDelay}ms`);
        await delay(retryDelay);
        continue;
      }

      break;
    }
  }

  throw lastError;
};

const createAgentHandler = (agentType, promptBuilder) => async (req, res) => {
  try {
    const { startupIdea } = req.body || {};

    if (!startupIdea || !startupIdea.trim()) {
      return res.status(400).json({
        success: false,
        message: "Startup idea is required",
      });
    }

    console.info(`[${agentType}] request received`, {
      userId: req.user?._id,
      startupIdea: startupIdea.slice(0, 120),
    });

    const prompt = promptBuilder(startupIdea);
    const report = await generateReportWithRetries({ agentType, prompt, startupIdea });

    try {
      await Report.create({
        user: req.user._id,
        agentType,
        startupIdea,
        report,
      });
    } catch (dbError) {
      console.error(`[${agentType}] failed to save report`, {
        message: dbError?.message,
        stack: dbError?.stack,
      });

      return res.status(500).json({
        success: false,
        message: "Report was generated but could not be saved. Please try again.",
      });
    }

    return res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    const status = error?.status || error?.response?.status;
    const message = getErrorMessage(agentType, error);

    console.error(`[${agentType}] final failure`, {
      status,
      message,
      stack: error?.stack,
    });

    return res.status(status === 429 ? 429 : 503).json({
      success: false,
      message,
      retryable: isRetryableError(error),
    });
  }
};

// ======================================================
// MARKET RESEARCH AGENT
// ======================================================

exports.marketResearch = createAgentHandler(
  "Market Research",
  (startupIdea) => `
You are a world-class startup consultant.

Analyze this startup idea:

"${startupIdea}"

Generate a detailed report with:

1. Market Overview
2. Target Customers
3. Competitor Analysis
4. SWOT Analysis
5. Revenue Opportunities
6. Risks & Challenges
7. Final Recommendation

Format professionally using markdown.
`
);

// ======================================================
// COMPETITOR ANALYSIS AGENT
// ======================================================

exports.competitorAnalysis = createAgentHandler(
  "Competitor Analysis",
  (startupIdea) => `
You are an expert startup strategist.

Analyze competitors for:

"${startupIdea}"

Generate:

1. Top Competitors
2. Competitor Strengths
3. Competitor Weaknesses
4. Market Positioning
5. Competitive Advantages
6. Threat Analysis
7. Final Recommendation

Format professionally using markdown.
`
);

// ======================================================
// STARTUP EVALUATION AGENT
// ======================================================

exports.startupEvaluation = createAgentHandler(
  "Startup Evaluation",
  (startupIdea) => `
You are an expert startup evaluator.

Evaluate:

"${startupIdea}"

Generate:

1. Innovation Score (/10)
2. Market Potential (/10)
3. Feasibility Score (/10)
4. Strengths
5. Weaknesses
6. Risks & Challenges
7. Investment Readiness
8. Final Verdict

Format professionally using markdown.
`
);

// ======================================================
// INVESTMENT INTELLIGENCE AGENT
// ======================================================

exports.investmentIntelligence = createAgentHandler(
  "Investment Intelligence",
  (startupIdea) => `
You are an experienced venture capitalist.

Analyze investment opportunities for:

"${startupIdea}"

Generate:

1. Funding Trends
2. VC Interest Level
3. Potential Investors
4. Market Outlook
5. Investment Risks
6. Revenue Potential
7. Fundraising Recommendation

Format professionally using markdown.
`
);

// ======================================================
// GET ALL REPORTS
// ======================================================

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      reports,
    });
  } catch (error) {
    console.error("Get Reports Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch reports",
    });
  }
};