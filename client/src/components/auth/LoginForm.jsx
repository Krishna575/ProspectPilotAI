import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Zap, AlertCircle } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Input from "../common/Input";
import Button from "../common/Button";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { login, isLoading, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from?.pathname || "/dashboard";

  const validate = () => {
    const e = {};
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Password must be at least 6 characters";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const result = await login(form.email, form.password);
    if (result.success) navigate(redirectTo, { replace: true });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 justify-center mb-8">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-[#6C63FF]/30">
          <Zap size={18} className="text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight">
          Prospect<span className="text-[#6C63FF]">Pilot</span>
          <span className="text-xs ml-1 text-[#6C63FF]/70">AI</span>
        </span>
      </div>

      <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
          <p className="text-sm text-gray-500">Sign in to continue your intelligence work</p>
        </div>

        {/* API Error Banner */}
        {error && (
          <div className="mb-5 flex items-start gap-2.5 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
            <AlertCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email address"
            name="email"
            type="email"
            placeholder="you@startup.com"
            icon={Mail}
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
          />
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            icon={Lock}
            trailingIcon={showPassword ? EyeOff : Eye}
            onTrailingClick={() => setShowPassword((p) => !p)}
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            autoComplete="current-password"
          />

          <div className="flex justify-end">
            <a href="#" className="text-xs text-[#6C63FF] hover:text-[#8B84FF] transition-colors">
              Forgot password?
            </a>
          </div>

          <Button type="submit" fullWidth isLoading={isLoading} size="lg" className="mt-2">
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0D1120] px-3 text-xs text-gray-600">or continue with</span>
          </div>
        </div>

        {/* Demo Login */}
        <button
          type="button"
          onClick={() => {
            setForm({ email: "demo@prospectpilot.ai", password: "demo1234" });
          }}
          className="w-full py-2.5 rounded-lg border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all"
        >
          Use demo credentials
        </button>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#6C63FF] hover:text-[#8B84FF] transition-colors">
            Create one free
          </Link>
        </p>
      </div>
    </div>
  );
}