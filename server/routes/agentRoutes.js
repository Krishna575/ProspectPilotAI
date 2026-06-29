const express = require("express");
const router = express.Router();

const {
  marketResearch,
  competitorAnalysis,
  startupEvaluation,
  investmentIntelligence,
  getReports,
} = require("../controllers/agentController");

const { protect } = require("../middleware/authMiddleware");

// ======================================================
// MARKET RESEARCH
// ======================================================
router.post(
  "/market-research",
  protect,
  marketResearch
);

// ======================================================
// COMPETITOR ANALYSIS
// ======================================================
router.post(
  "/competitor-analysis",
  protect,
  competitorAnalysis
);

// ======================================================
// STARTUP EVALUATION
// ======================================================
router.post(
  "/startup-evaluation",
  protect,
  startupEvaluation
);

// ======================================================
// INVESTMENT INTELLIGENCE
// ======================================================
router.post(
  "/investment-intelligence",
  protect,
  investmentIntelligence
);

// ======================================================
// GET SAVED REPORTS
// ======================================================
router.get(
  "/reports",
  protect,
  getReports
);

module.exports = router;