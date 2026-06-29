import { useState } from "react";
import {
  Users,
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
  "AI-powered travel planner for students",
  "Online grocery delivery startup",
  "AI healthcare assistant",
  "EdTech platform for coding interviews",
];

export default function CompetitorAnalysisPage() {
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

      const response = await api.post(
        "/agents/competitor-analysis",
        {
          startupIdea: input,
        }
      );

      setResult({
        summary: response.data.report,
        sections: [
          "Top Competitors",
          "Competitor Strengths",
          "Competitor Weaknesses",
          "Market Positioning",
          "Competitive Advantages",
          "Threat Analysis",
          "Final Recommendation",
        ],
      });
    } catch (error) {
      console.error("Competitor Analysis Error:", error);

      setResult({
        summary:
          error.response?.data?.message ||
          "Failed to generate competitor analysis.",
        sections: [],
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <AgentPageShell
      icon={Users}
      title="Competitor Analysis"
      description="Analyze competitors, benchmark strengths and weaknesses, and uncover competitive advantages."
      color="purple"
      stats={[
        { icon: Globe, label: "Top Competitors" },
        { icon: BarChart3, label: "Market Positioning" },
        { icon: Target, label: "Competitive Edge" },
      ]}
    >
      {/* Input Section */}
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5 space-y-4">
        <label className="text-sm font-medium text-gray-300">
          Describe your startup idea for competitor analysis
        </label>

        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runAgent()}
            placeholder="e.g. AI-powered travel planner for students"
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
            Agent is analyzing competitors...
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