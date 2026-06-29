const variants = {
  purple: "bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF]/20",
  blue: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  green: "bg-green-500/10 text-green-400 border border-green-500/20",
  yellow: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  red: "bg-red-500/10 text-red-400 border border-red-500/20",
  gray: "bg-white/5 text-gray-400 border border-white/10",
  cyan: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
};

export default function Badge({ children, variant = "purple", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}