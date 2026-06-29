export default function Card({
  children,
  className = "",
  hover = false,
  glow = false,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white/[0.03] border border-white/[0.07] rounded-xl p-5
        ${hover ? "hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-200 cursor-pointer" : ""}
        ${glow ? "hover:shadow-lg hover:shadow-[#6C63FF]/10" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}