import { Link } from "react-router-dom";
import {
  Zap, TrendingUp, Swords, DollarSign, Rocket, ArrowRight,
  CheckCircle2, Star, ChevronRight, Globe, Shield, Clock, BarChart3,
  BrainCircuit, FileText, Users,
} from "lucide-react";

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid + glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(108,99,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C63FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[#6C63FF]/10 border border-[#6C63FF]/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
          <span className="text-xs font-medium text-[#8B84FF]">Powered by Gemini AI — Built for Founders & Investors</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          Intelligence that{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#8B84FF] to-[#3B82F6] bg-clip-text text-transparent">
              moves markets
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#6C63FF]/0 via-[#6C63FF]/60 to-[#6C63FF]/0" />
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
          ProspectPilot AI deploys autonomous research agents that analyze markets,
          profile competitors, evaluate startups, and surface investment signals — in minutes, not months.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/register"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#6C63FF] hover:bg-[#5B52EE] text-white font-semibold transition-all shadow-lg shadow-[#6C63FF]/25 hover:shadow-[#6C63FF]/40 hover:-translate-y-0.5"
          >
            Start for free <ArrowRight size={16} />
          </Link>
          <Link
            to="/login"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/20 font-medium transition-all"
          >
            View live demo <ChevronRight size={16} />
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span>4.9/5 from early users</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <span>No credit card required</span>
          <span className="hidden sm:block w-px h-4 bg-white/10" />
          <span>Setup in under 2 minutes</span>
        </div>

        {/* Dashboard mockup hint */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-4 shadow-2xl shadow-[#6C63FF]/5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              <div className="ml-2 flex-1 h-6 bg-white/5 rounded-md" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {["Market Research", "Competitor Analysis", "Investment Intel", "Startup Eval"].map((label) => (
                <div key={label} className="bg-white/[0.03] border border-white/[0.07] rounded-lg p-3">
                  <div className="w-6 h-6 rounded-lg bg-[#6C63FF]/20 mb-2" />
                  <div className="h-2 bg-white/10 rounded w-3/4 mb-1.5" />
                  <div className="h-1.5 bg-white/5 rounded w-1/2" />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const features = [
  { icon: BrainCircuit, title: "Agentic AI Research", description: "Autonomous agents that plan, search, and synthesize — no prompt engineering needed.", color: "text-[#6C63FF]", bg: "bg-[#6C63FF]/10" },
  { icon: Clock, title: "Real-time Intelligence", description: "Live data feeds integrated with AI analysis deliver insights as markets shift.", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: FileText, title: "Structured Reports", description: "Export investor-grade reports in PDF or Markdown, ready for board decks.", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Globe, title: "Global Market Coverage", description: "Covers 50+ verticals across 20+ geographies with localized data sources.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: Shield, title: "Enterprise Security", description: "SOC 2 compliant. Your proprietary data never trains our models.", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: BarChart3, title: "Competitor Tracking", description: "Automated monitoring of competitor moves, funding rounds, and product releases.", color: "text-purple-400", bg: "bg-purple-500/10" },
];

function Features() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-[#6C63FF] uppercase tracking-widest">Platform Features</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">Everything you need to win your market</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Comprehensive tooling for startup intelligence, built for the speed of modern business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="bg-white/[0.02] border border-white/[0.07] rounded-xl p-6 hover:border-white/[0.14] hover:bg-white/[0.04] transition-all group">
              <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                <Icon size={19} className={color} />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── AI Agents ────────────────────────────────────────────────────────────────
const agents = [
  {
    icon: TrendingUp,
    label: "Market Research Agent",
    color: "from-[#6C63FF] to-[#8B84FF]",
    description: "Deep-dives into market size, trends, growth vectors, and addressable opportunity for any vertical.",
    capabilities: ["TAM / SAM / SOM sizing", "Trend signal detection", "Regulatory landscape mapping"],
  },
  {
    icon: Swords,
    label: "Competitor Analysis Agent",
    color: "from-blue-600 to-blue-400",
    description: "Profiles direct and indirect competitors — positioning, funding, team strength, and product gaps.",
    capabilities: ["Competitive moat scoring", "Funding round tracking", "Feature gap analysis"],
  },
  {
    icon: DollarSign,
    label: "Investment Intelligence Agent",
    color: "from-green-600 to-emerald-400",
    description: "Identifies deal flow, valuations, investor appetite, and sector momentum across stages.",
    capabilities: ["Comparable deal analysis", "Investor appetite signals", "Exit multiple benchmarks"],
  },
  {
    icon: Rocket,
    label: "Startup Evaluation Agent",
    color: "from-cyan-600 to-sky-400",
    description: "Scores startups across 40+ metrics — team, traction, market fit, and fundraise readiness.",
    capabilities: ["Founder signal scoring", "PMF indicators", "Fundraise readiness report"],
  },
];

function AIAgents() {
  return (
    <section id="agents" className="py-24 px-4 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-[#6C63FF] uppercase tracking-widest">AI Agents</span>
          <h2 className="text-4xl font-bold mt-3 mb-4">Four autonomous agents. One platform.</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Each agent is purpose-built for a distinct intelligence domain — deploy one or all four.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {agents.map(({ icon: Icon, label, color, description, capabilities }) => (
            <div key={label} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-white/[0.14] transition-all group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg`}>
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
              <ul className="space-y-2">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle2 size={13} className="text-[#6C63FF] flex-shrink-0" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why ProspectPilot ─────────────────────────────────────────────────────────
const reasons = [
  { stat: "10×", label: "faster than manual research" },
  { stat: "40+", label: "startup evaluation metrics" },
  { stat: "50+", label: "market verticals covered" },
  { stat: "< 2m", label: "average report generation" },
];

const bullets = [
  "No AI prompt expertise required — just describe what you need",
  "Agents cite every source so you can verify and dig deeper",
  "Works for pre-seed founders and Series C investors alike",
  "Outputs are structured for board decks, not just reading",
];

function WhySection() {
  return (
    <section id="why" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold text-[#6C63FF] uppercase tracking-widest">Why ProspectPilot</span>
            <h2 className="text-4xl font-bold mt-3 mb-5 leading-tight">
              Research used to take weeks.<br />
              <span className="text-[#6C63FF]">Now it takes minutes.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Traditional market research is slow, expensive, and surface-level. ProspectPilot agents
              go deep — pulling from structured databases, news feeds, SEC filings, and web data
              simultaneously — to give you insight that's actually actionable.
            </p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-gray-400">
                  <CheckCircle2 size={16} className="text-[#6C63FF] mt-0.5 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {reasons.map(({ stat, label }) => (
              <div key={label} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#3B82F6] bg-clip-text text-transparent mb-2">
                  {stat}
                </p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-br from-[#6C63FF]/10 to-blue-500/5 border border-[#6C63FF]/20 rounded-3xl p-12">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#3B82F6] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#6C63FF]/30">
            <Zap size={26} className="text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Ready to move faster than your competition?</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Join founders and investors already using ProspectPilot to make smarter decisions, faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6C63FF] hover:bg-[#5B52EE] text-white font-semibold transition-all shadow-lg shadow-[#6C63FF]/30 hover:-translate-y-0.5"
            >
              Get started free <ArrowRight size={16} />
            </Link>
            <Link
              to="/login"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Already have an account? Sign in →
            </Link>
          </div>
          <p className="text-xs text-gray-700 mt-5">No credit card · Free tier available · Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}

// ─── Page Assembly ─────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <AIAgents />
      <WhySection />
      <CTA />
    </>
  );
}