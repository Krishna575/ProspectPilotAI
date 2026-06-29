import { FileText, Download, ExternalLink, Clock, TrendingUp, Swords, DollarSign, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Badge from "../common/Badge";

const iconMap = {
  "Market Research": { icon: TrendingUp, color: "text-[#6C63FF]", bg: "bg-[#6C63FF]/10" },
  "Competitor Analysis": { icon: Swords, color: "text-blue-400", bg: "bg-blue-500/10" },
  "Investment Intel": { icon: DollarSign, color: "text-green-400", bg: "bg-green-500/10" },
  "Startup Evaluation": { icon: Rocket, color: "text-cyan-400", bg: "bg-cyan-500/10" },
};

const SAMPLE_REPORTS = [
  {
    id: 1,
    title: "Indian EdTech Market Overview Q2 2025",
    type: "Market Research",
    date: "2 hours ago",
    status: "complete",
  },
  {
    id: 2,
    title: "Byju's vs Unacademy Competitive Landscape",
    type: "Competitor Analysis",
    date: "Yesterday",
    status: "complete",
  },
  {
    id: 3,
    title: "Series A Funding Trends — SaaS India",
    type: "Investment Intel",
    date: "3 days ago",
    status: "complete",
  },
  {
    id: 4,
    title: "Startup Health Check — FinTech Vertical",
    type: "Startup Evaluation",
    date: "1 week ago",
    status: "complete",
  },
];

export default function RecentReports({ reports = SAMPLE_REPORTS }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FileText size={16} className="text-gray-500" />
          <h2 className="text-base font-semibold text-white">Recent Reports</h2>
        </div>
        <button
          onClick={() => navigate("/dashboard/reports")}
          className="text-xs text-[#6C63FF] hover:text-[#8B84FF] transition-colors flex items-center gap-1"
        >
          View all <ExternalLink size={11} />
        </button>
      </div>

      <div className="space-y-2">
        {reports.length === 0 ? (
          <EmptyState />
        ) : (
          reports.map((report) => <ReportRow key={report.id} report={report} />)
        )}
      </div>
    </div>
  );
}

function ReportRow({ report }) {
  const meta = iconMap[report.type] || iconMap["Market Research"];
  const Icon = meta.icon;

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-all group cursor-pointer">
      <div className={`w-9 h-9 rounded-lg ${meta.bg} flex items-center justify-center flex-shrink-0`}>
        <Icon size={15} className={meta.color} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">{report.title}</p>
        <div className="flex items-center gap-2 mt-0.5">
          <Badge variant={getBadgeVariant(report.type)} className="text-[10px] py-0">
            {report.type}
          </Badge>
          <span className="text-xs text-gray-600 flex items-center gap-1">
            <Clock size={10} /> {report.date}
          </span>
        </div>
      </div>
      <button className="opacity-0 group-hover:opacity-100 transition-all p-1.5 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white">
        <Download size={14} />
      </button>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="text-center py-10 border border-dashed border-white/10 rounded-xl">
      <FileText size={28} className="mx-auto text-gray-700 mb-2" />
      <p className="text-sm text-gray-600">No reports yet</p>
      <p className="text-xs text-gray-700 mt-1">Run an agent to generate your first report</p>
    </div>
  );
}

function getBadgeVariant(type) {
  const map = {
    "Market Research": "purple",
    "Competitor Analysis": "blue",
    "Investment Intel": "green",
    "Startup Evaluation": "cyan",
  };
  return map[type] || "gray";
}