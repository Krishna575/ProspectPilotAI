import { NavLink, useNavigate } from "react-router-dom";
import {
  Zap, LayoutDashboard, TrendingUp, Swords, DollarSign,
  Rocket, FileText, ChevronLeft, ChevronRight, LogOut, User, Settings,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
  { label: "Market Research", icon: TrendingUp, to: "/dashboard/market-research" },
  { label: "Competitor Analysis", icon: Swords, to: "/dashboard/competitor-analysis" },
  { label: "Investment Intel", icon: DollarSign, to: "/dashboard/investment-intelligence" },
  { label: "Startup Evaluation", icon: Rocket, to: "/dashboard/startup-evaluation" },
  { label: "Reports", icon: FileText, to: "/dashboard/reports" },
];

export default function Sidebar({ collapsed, mobileOpen, onMobileClose, onToggleCollapse }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const sidebarBase = `fixed top-0 left-0 h-full z-30 flex flex-col transition-all duration-300
    bg-[#0A0D1A] border-r border-white/5`;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`${sidebarBase} hidden lg:flex ${collapsed ? "w-16" : "w-64"}`}
      >
        <SidebarContent
          collapsed={collapsed}
          user={user}
          onToggle={onToggleCollapse}
          onLogout={handleLogout}
        />
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`${sidebarBase} flex lg:hidden w-64 transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <SidebarContent
          collapsed={false}
          user={user}
          onToggle={onMobileClose}
          onLogout={handleLogout}
          isMobile
        />
      </aside>
    </>
  );
}

function SidebarContent({ collapsed, user, onToggle, onLogout, isMobile }) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className={`flex items-center h-16 px-4 border-b border-white/5 ${collapsed ? "justify-center" : "justify-between"}`}>
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#3B82F6] flex items-center justify-center flex-shrink-0">
              <Zap size={13} className="text-white" />
            </div>
            <span className="font-bold text-sm tracking-tight whitespace-nowrap">
              Prospect<span className="text-[#6C63FF]">Pilot</span>
            </span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all"
        >
          {isMobile ? (
            <ChevronLeft size={14} />
          ) : collapsed ? (
            <ChevronRight size={14} />
          ) : (
            <ChevronLeft size={14} />
          )}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group
              ${isActive
                ? "bg-[#6C63FF]/15 text-[#8B84FF] border border-[#6C63FF]/20"
                : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              }
              ${collapsed ? "justify-center" : ""}`
            }
            title={collapsed ? label : undefined}
          >
            {({ isActive }) => (
              <>
                <Icon size={17} className={isActive ? "text-[#8B84FF]" : ""} />
                {!collapsed && (
                  <span className="text-sm font-medium whitespace-nowrap">{label}</span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className={`border-t border-white/5 p-3 ${collapsed ? "" : ""}`}>
        {!collapsed ? (
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 transition-all cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#3B82F6] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">{user?.name || "User"}</p>
              <p className="text-xs text-gray-600 truncate">{user?.email || ""}</p>
            </div>
            <button
              onClick={onLogout}
              className="p-1 rounded text-gray-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
              title="Sign out"
            >
              <LogOut size={14} />
            </button>
          </div>
        ) : (
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center py-2 text-gray-600 hover:text-red-400 transition-colors"
            title="Sign out"
          >
            <LogOut size={16} />
          </button>
        )}
      </div>
    </div>
  );
}