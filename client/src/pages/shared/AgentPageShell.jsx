const colorMap = {
  purple: { icon: "from-[#6C63FF] to-[#8B84FF]", glow: "shadow-[#6C63FF]/20", text: "text-[#8B84FF]" },
  blue:   { icon: "from-blue-600 to-blue-400",     glow: "shadow-blue-500/20",  text: "text-blue-400" },
  green:  { icon: "from-green-600 to-emerald-400", glow: "shadow-green-500/20", text: "text-green-400" },
  cyan:   { icon: "from-cyan-600 to-sky-400",      glow: "shadow-cyan-500/20",  text: "text-cyan-400" },
};

export default function AgentPageShell({ icon: Icon, title, description, color = "purple", stats, children }) {
  const c = colorMap[color];
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.icon} flex items-center justify-center shadow-lg ${c.glow} flex-shrink-0`}>
          <Icon size={22} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">{title} Agent</h1>
          <p className="text-sm text-gray-500 mt-0.5">{description}</p>
        </div>
      </div>

      {/* Stats chips */}
      {stats && (
        <div className="flex flex-wrap gap-3">
          {stats.map(({ icon: StatIcon, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-xs text-gray-500 bg-white/[0.03] border border-white/[0.07] rounded-lg px-3 py-1.5">
              <StatIcon size={12} className={c.text} />
              {label}
            </div>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="space-y-5">{children}</div>
    </div>
  );
}