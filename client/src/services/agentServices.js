import api from "./api";

const buildPayload = (value) => {
  if (typeof value === "string") {
    return { startupIdea: value };
  }

  return {
    startupIdea: value?.startupIdea || value?.query || "",
  };
};

export const agentService = {
  runMarketResearch: async (query) => {
    const response = await api.post("/agents/market-research", buildPayload(query));
    return response.data;
  },

  runCompetitorAnalysis: async (query) => {
    const response = await api.post("/agents/competitor-analysis", buildPayload(query));
    return response.data;
  },

  runInvestmentIntelligence: async (query) => {
    const response = await api.post("/agents/investment-intelligence", buildPayload(query));
    return response.data;
  },

  runStartupEvaluation: async (query) => {
    const response = await api.post("/agents/startup-evaluation", buildPayload(query));
    return response.data;
  },
};