import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      error,
      hint,
      icon: Icon,
      trailingIcon: TrailingIcon,
      onTrailingClick,
      className = "",
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && (
          <label className="text-sm font-medium text-gray-300">{label}</label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              <Icon size={16} />
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={`
              w-full bg-white/5 border rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600
              focus:outline-none focus:ring-2 focus:ring-[#6C63FF]/50 focus:border-[#6C63FF]/50
              transition-all duration-200
              ${error ? "border-red-500/50 focus:ring-red-500/30" : "border-white/10 hover:border-white/20"}
              ${Icon ? "pl-9" : ""}
              ${TrailingIcon ? "pr-10" : ""}
            `}
            {...props}
          />
          {TrailingIcon && (
            <button
              type="button"
              onClick={onTrailingClick}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
            >
              <TrailingIcon size={16} />
            </button>
          )}
        </div>
        {error && <p className="text-xs text-red-400">{error}</p>}
        {hint && !error && <p className="text-xs text-gray-600">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;