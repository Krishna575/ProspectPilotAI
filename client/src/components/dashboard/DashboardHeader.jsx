import { Menu, Bell, Search } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function DashboardHeader({ onMenuClick }) {
  const { user } = useAuth();

  return (
    <header className="h-16 border-b border-white/5 bg-[#080B14]/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-6 sticky top-0 z-10">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-all"
        >
          <Menu size={18} />
        </button>

        {/* Search */}
        <div className="hidden sm:flex items-center gap-2 w-64 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-600 hover:border-white/20 transition-all cursor-pointer group">
          <Search size={14} className="group-hover:text-gray-400 transition-colors" />
          <span className="group-hover:text-gray-500 transition-colors">Search agents...</span>
          <span className="ml-auto text-xs bg-white/5 rounded px-1 py-0.5">⌘K</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Notification Bell */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-all">
          <Bell size={16} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#6C63FF]" />
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-2 pl-2 border-l border-white/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#3B82F6] flex items-center justify-center text-xs font-bold text-white">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium text-white leading-none">{user?.name || "User"}</p>
            <p className="text-xs text-gray-600 mt-0.5">Pro Plan</p>
          </div>
        </div>
      </div>
    </header>
  );
}