import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Zap, Menu, X, ChevronRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "AI Agents", href: "#agents" },
  { label: "Why Us", href: "#why" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleAnchor = (e, href) => {
    if (href.startsWith("#") && isLanding) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isLanding
          ? "bg-[#080B14]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C63FF] to-[#3B82F6] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#6C63FF]/30 transition-all">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              Prospect<span className="text-[#6C63FF]">Pilot</span>
              <span className="text-xs ml-1 text-[#6C63FF]/70 font-medium">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          {isLanding && (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#6C63FF] hover:bg-[#5B52EE] text-white text-sm font-medium transition-all"
              >
                Dashboard <ChevronRight size={14} />
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-lg bg-[#6C63FF] hover:bg-[#5B52EE] text-white text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#6C63FF]/25"
                >
                  Get Started Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0D1120] px-4 py-4 space-y-3">
          {isLanding &&
            navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchor(e, link.href)}
                className="block text-sm text-gray-400 hover:text-white py-2"
              >
                {link.label}
              </a>
            ))}
          <div className="pt-2 flex flex-col gap-2">
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="block text-center px-4 py-2.5 rounded-lg bg-[#6C63FF] text-white text-sm font-medium"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-center px-4 py-2.5 rounded-lg border border-white/10 text-gray-300 text-sm"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block text-center px-4 py-2.5 rounded-lg bg-[#6C63FF] text-white text-sm font-medium"
                >
                  Get Started Free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}