import { useState } from "react";
import {
  TrendingUp,
  Send,
  Sparkles,
  Globe,
  BarChart3,
  Target,
} from "lucide-react";

import AgentPageShell from "./shared/AgentPageShell";
import Button from "../components/common/Button";
import api from "../services/api";

const PROMPTS = [
  "Analyze the Indian SaaS market opportunity for 2025",
  "What's the TAM for B2B HR tech in Southeast Asia?",
  "Market trends in fintech lending for emerging markets",
  "Growth outlook for generative AI tooling in enterprises",
];

export default function MarketResearchPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const runAgent = async (q) => {
    const input = q || query;

    if (!input.trim()) {
      alert("Please enter a startup idea.");
      return;
    }

    try {
      setIsRunning(true);
      setResult(null);

      const response = await api.post("/agents/market-research", {
        startupIdea: input,
      });

      setResult({
        summary: response.data.report,
        sections: [
          "Market Overview",
          "Target Customers",
          "Competitor Analysis",
          "SWOT Analysis",
          "Revenue Opportunities",
          "Risks & Challenges",
          "Final Recommendation",
        ],
      });
    } catch (error) {
      console.error("Market Research Error:", error);

      setResult({
        summary:
          error.response?.data?.message ||
          "Failed to generate market research report.",
        sections: [],
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <AgentPageShell
      icon={TrendingUp}
      title="Market Research"
      description="AI-powered deep-dive into any market vertical. Get TAM sizing, trend signals, regulatory maps, and growth drivers."
      color="purple"
      stats={[
        { icon: Globe, label: "50+ Verticals" },
        { icon: BarChart3, label: "Real-Time Data" },
        { icon: Target, label: "TAM / SAM / SOM" },
      ]}
    >
      {/* Input Section */}
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 space-y-4">
        <label className="text-sm font-medium text-gray-300">
          Describe the market you want to research
        </label>

        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runAgent()}
            placeholder="e.g. Electric vehicle charging infrastructure in India"
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/50 focus:border-[#6C63FF]/50"
          />

          <Button
            onClick={() => runAgent()}
            isLoading={isRunning}
            className="flex-shrink-0"
          >
            <Send size={15} />
            <span className="ml-2">Run Agent</span>
          </Button>
        </div>

        {/* Quick Prompts */}
        <div>
          <p className="text-xs text-gray-600 mb-2">Quick start:</p>

          <div className="flex flex-wrap gap-2">
            {PROMPTS.map((p) => (
              <button
                key={p}
                onClick={() => {
                  setQuery(p);
                  runAgent(p);
                }}
                className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Loading */}
      {isRunning && (
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-8 text-center">
          <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/10 flex items-center justify-center mx-auto mb-3">
            <Sparkles
              size={18}
              className="text-[#6C63FF] animate-pulse"
            />
          </div>

          <p className="text-sm text-gray-400">
            Agent is researching your market...
          </p>

          <p className="text-xs text-gray-600 mt-1">
            Gemini AI is generating insights...
          </p>
        </div>
      )}

      {/* Results */}
      {result && !isRunning && (
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-[#6C63FF]" />
            <span className="text-sm font-medium text-white">
              Analysis Complete
            </span>
          </div>

          <div className="bg-black/20 rounded-lg p-4">
            <pre className="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed">
              {result.summary}
            </pre>
          </div>

          {result.sections.length > 0 && (
            <div className="pt-3 border-t border-white/5">
              <p className="text-xs text-gray-600 mb-2">
                Report sections generated:
              </p>

              <div className="flex flex-wrap gap-2">
                {result.sections.map((section) => (
                  <span
                    key={section}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/20 text-[#8B84FF]"
                  >
                    {section}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </AgentPageShell>
  );
}