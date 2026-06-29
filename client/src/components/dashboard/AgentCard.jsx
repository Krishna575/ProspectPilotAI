import { useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Badge from "../common/Badge";

export default function AgentCard({ agent }) {
  const navigate = useNavigate();
  const { icon: Icon, title, description, badge, badgeVariant, stats, color, to } = agent;

  const colorMap = {
    purple: {
      glow: "hover:shadow-[#6C63FF]/20",
      iconBg: "from-[#6C63FF] to-[#8B84FF]",
      ring: "group-hover:ring-[#6C63FF]/30",
      arrow: "group-hover:text-[#6C63FF]",
    },
    blue: {
      glow: "hover:shadow-blue-500/20",
      iconBg: "from-blue-500 to-blue-400",
      ring: "group-hover:ring-blue-500/30",
      arrow: "group-hover:text-blue-400",
    },
    green: {
      glow: "hover:shadow-green-500/20",
      iconBg: "from-green-500 to-emerald-400",
      ring: "group-hover:ring-green-500/30",
      arrow: "group-hover:text-green-400",
    },
    cyan: {
      glow: "hover:shadow-cyan-500/20",
      iconBg: "from-cyan-500 to-sky-400",
      ring: "group-hover:ring-cyan-500/30",
      arrow: "group-hover:text-cyan-400",
    },
  };

  const c = colorMap[color] || colorMap.purple;

  return (
    <div
      onClick={() => navigate(to)}
      className={`relative group bg-white/[0.03] border border-white/[0.07] rounded-xl p-5
        hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-200 cursor-pointer
        hover:shadow-lg ${c.glow}`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${c.iconBg} flex items-center justify-center
            shadow-lg ring-2 ring-transparent ${c.ring} transition-all duration-200`}
        >
          <Icon size={20} className="text-white" />
        </div>
        <Badge variant={badgeVariant}>{badge}</Badge>
      </div>

      {/* Content */}
      <h3 className="font-semibold text-white mb-1.5 text-base">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>

      {/* Stats row */}
      {stats && (
        <div className="flex items-center gap-4 mb-4 pt-3 border-t border-white/5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-xs font-semibold text-white">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Launch row */}
      <div className={`flex items-center gap-1 text-sm text-gray-600 ${c.arrow} transition-colors`}>
        <Sparkles size={13} />
        <span className="text-xs font-medium">Launch Agent</span>
        <ArrowRight size={13} className="ml-auto translate-x-0 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}