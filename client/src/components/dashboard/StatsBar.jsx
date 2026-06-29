import { TrendingUp, FileText, Zap, Clock } from "lucide-react";

const stats = [
  { label: "Analyses Run", value: "24", change: "+12%", icon: Zap, color: "text-[#6C63FF]", bg: "bg-[#6C63FF]/10" },
  { label: "Reports Generated", value: "8", change: "+3 this week", icon: FileText, color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "Markets Tracked", value: "5", change: "Active", icon: TrendingUp, color: "text-green-400", bg: "bg-green-500/10" },
  { label: "Avg. Analysis Time", value: "1.4m", change: "↓ 0.3m faster", icon: Clock, color: "text-cyan-400", bg: "bg-cyan-500/10" },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ label, value, change, icon: Icon, color, bg }) => (
        <div
          key={label}
          className="bg-white/[0.03] border border-white/[0.07] rounded-xl p-4 flex items-center gap-3"
        >
          <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
            <Icon size={18} className={color} />
          </div>
          <div>
            <p className="text-xl font-bold text-white leading-tight">{value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{label}</p>
            <p className="text-xs text-gray-700 mt-0.5">{change}</p>
          </div>
        </div>
      ))}
    </div>
  );
}