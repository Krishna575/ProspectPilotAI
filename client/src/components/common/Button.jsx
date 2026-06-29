import LoadingSpinner from "./LoadingSpinner";

const variants = {
  primary:
    "bg-[#6C63FF] hover:bg-[#5B52EE] text-white shadow-lg shadow-[#6C63FF]/20 hover:shadow-[#6C63FF]/30",
  secondary:
    "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20",
  ghost: "text-gray-400 hover:text-white hover:bg-white/5",
  danger: "bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        inline-flex items-center justify-center gap-2 font-medium rounded-lg
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/50
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {isLoading ? <LoadingSpinner size="sm" color="currentColor" /> : children}
    </button>
  );
}