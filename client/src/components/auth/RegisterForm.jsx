import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, User, Zap, AlertCircle, CheckCircle2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Input from "../common/Input";
import Button from "../common/Button";

const passwordRules = [
  { label: "At least 8 characters", test: (p) => p.length >= 8 },
  { label: "One uppercase letter", test: (p) => /[A-Z]/.test(p) },
  { label: "One number", test: (p) => /[0-9]/.test(p) },
];

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { register, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 8) e.password = "Password must be at least 8 characters";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
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
    const result = await register(form.name, form.email, form.password);
    if (result.success) navigate("/dashboard", { replace: true });
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
          <h1 className="text-2xl font-bold text-white mb-1">Create your account</h1>
          <p className="text-sm text-gray-500">Start your AI-powered intelligence journey</p>
        </div>

        {error && (
          <div className="mb-5 flex items-start gap-2.5 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
            <AlertCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full name"
            name="name"
            placeholder="Alex Johnson"
            icon={User}
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
          />
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
          <div>
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
              autoComplete="new-password"
            />
            {/* Password strength hints */}
            {form.password && (
              <div className="mt-2 space-y-1">
                {passwordRules.map((rule) => (
                  <div key={rule.label} className="flex items-center gap-1.5">
                    <CheckCircle2
                      size={12}
                      className={rule.test(form.password) ? "text-green-400" : "text-gray-700"}
                    />
                    <span
                      className={`text-xs ${rule.test(form.password) ? "text-green-400" : "text-gray-600"}`}
                    >
                      {rule.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Input
            label="Confirm password"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            icon={Lock}
            value={form.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            autoComplete="new-password"
          />

          <Button type="submit" fullWidth isLoading={isLoading} size="lg" className="mt-2">
            Create Account — It's Free
          </Button>
        </form>

        <p className="text-center text-xs text-gray-600 mt-4">
          By signing up, you agree to our{" "}
          <a href="#" className="text-[#6C63FF] hover:underline">Terms</a> and{" "}
          <a href="#" className="text-[#6C63FF] hover:underline">Privacy Policy</a>.
        </p>

        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-[#6C63FF] hover:text-[#8B84FF] transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}