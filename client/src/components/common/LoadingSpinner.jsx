export default function LoadingSpinner({ size = "md", color = "#6C63FF" }) {
  const sizes = { sm: "w-4 h-4", md: "w-8 h-8", lg: "w-12 h-12" };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizes[size]} rounded-full border-2 border-white/10 animate-spin`}
        style={{ borderTopColor: color }}
      />
    </div>
  );
}