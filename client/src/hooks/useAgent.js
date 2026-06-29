import { useState, useCallback } from "react";
import { agentService } from "../services/agentServices";

export function useAgent(agentType) {
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const run = useCallback(
    async (query) => {
      if (!query?.trim()) return;

      setIsRunning(true);
      setResult(null);
      setError(null);

      try {
        const serviceMap = {
          "market-research": agentService.runMarketResearch,
          "competitor-analysis": agentService.runCompetitorAnalysis,
          "investment-intelligence": agentService.runInvestmentIntelligence,
          "startup-evaluation": agentService.runStartupEvaluation,
        };

        const fn = serviceMap[agentType];
        if (!fn) throw new Error(`Unknown agent type: ${agentType}`);

        const data = await fn(query);
        setResult(data);
        return data;
      } catch (err) {
        const message = err.response?.data?.message || err.message || "Agent failed. Try again.";
        console.error(`[useAgent] ${agentType} failed`, {
          message,
          status: err.response?.status,
        });
        setError(message);
        return null;
      } finally {
        setIsRunning(false);
      }
    },
    [agentType]
  );

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return { run, isRunning, result, error, reset };
}