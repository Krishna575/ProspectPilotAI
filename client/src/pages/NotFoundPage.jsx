import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#080B14] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] bg-clip-text text-transparent mb-4">404</p>
        <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => window.history.back()} className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-white text-sm transition-all">
            <ArrowLeft size={15} /> Go back
          </button>
          <Link to="/" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#6C63FF] hover:bg-[#5B52EE] text-white text-sm transition-all">
            <Home size={15} /> Home
          </Link>
        </div>
      </div>
    </div>
  );
}