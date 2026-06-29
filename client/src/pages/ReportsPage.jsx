import { useEffect, useState } from "react";
import {
  FileText,
  Search,
  TrendingUp,
  Swords,
  DollarSign,
  Rocket,
} from "lucide-react";

import Badge from "../components/common/Badge";
import api from "../services/api";

const iconMap = {
  "Market Research": { icon: TrendingUp, variant: "purple" },
  "Competitor Analysis": { icon: Swords, variant: "blue" },
  "Investment Intelligence": { icon: DollarSign, variant: "green" },
  "Startup Evaluation": { icon: Rocket, variant: "cyan" },
};

export default function ReportsPage() {
  const [reports, setReports] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const response = await api.get("/agents/reports");

      setReports(response.data.reports);
    } catch (error) {
      console.error("Fetch Reports Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredReports = reports.filter(
    (report) =>
      report.startupIdea
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      report.agentType
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Reports
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          All your AI-generated reports in one place.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search reports..."
          className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/50"
        />
      </div>

      {/* Reports */}
      {loading ? (
        <div className="text-center py-10 text-gray-400">
          Loading reports...
        </div>
      ) : filteredReports.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-white/10 rounded-2xl">
          <FileText
            size={32}
            className="mx-auto text-gray-700 mb-3"
          />

          <p className="text-gray-500">
            No reports found
          </p>

          <p className="text-sm text-gray-600 mt-1">
            Generate reports using agents.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredReports.map((report) => {
            const meta = iconMap[report.agentType];
            const Icon = meta?.icon || FileText;

            return (
              <div
                key={report._id}
                className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    <Icon
                      size={18}
                      className="text-gray-400"
                    />
                  </div>

                  <div>
                    <h3 className="text-white font-medium">
                      {report.startupIdea}
                    </h3>

                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant={
                          meta?.variant || "gray"
                        }
                      >
                        {report.agentType}
                      </Badge>

                      <span className="text-xs text-gray-500">
                        {new Date(
                          report.createdAt
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-black/20 rounded-lg p-4 max-h-72 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-gray-300">
                    {report.report}
                  </pre>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}