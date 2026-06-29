import { TrendingUp, Swords, DollarSign, Rocket } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import AgentCard from "../components/dashboard/AgentCard";
import RecentReports from "../components/dashboard/RecentReports";
import StatsBar from "../components/dashboard/StatsBar";

const agents = [
  {
    icon: TrendingUp,
    title: "Market Research",
    description:
      "Analyze market size, trends, growth vectors, and competitive landscape for any vertical.",
    badge: "Ready",
    badgeVariant: "purple",
    color: "purple",
    to: "/dashboard/market-research",
    stats: [
      { value: "50+", label: "Verticals" },
      { value: "1.2m", label: "Avg. time" },
    ],
  },
  {
    icon: Swords,
    title: "Competitor Analysis",
    description:
      "Profile competitors — funding, team, product differentiators, weaknesses, and positioning.",
    badge: "Ready",
    badgeVariant: "blue",
    color: "blue",
    to: "/dashboard/competitor-analysis",
    stats: [
      { value: "40+", label: "Data points" },
      { value: "Real-time", label: "Updates" },
    ],
  },
  {
    icon: DollarSign,
    title: "Investment Intelligence",
    description:
      "Surface deal flow, sector valuations, investor appetite, and comparable exit multiples.",
    badge: "Ready",
    badgeVariant: "green",
    color: "green",
    to: "/dashboard/investment-intelligence",
    stats: [
      { value: "$2T+", label: "Deals tracked" },
      { value: "3K+", label: "Investors" },
    ],
  },
  {
    icon: Rocket,
    title: "Startup Evaluation",
    description:
      "Score any startup across 40+ metrics — traction, team, PMF fit, and fundraise readiness.",
    badge: "Ready",
    badgeVariant: "cyan",
    color: "cyan",
    to: "/dashboard/startup-evaluation",
    stats: [
      { value: "40+", label: "Metrics" },
      { value: "A–F", label: "Grade scale" },
    ],
  },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Welcome header */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          {greeting}, {user?.name?.split(" ")[0] || "there"} 👋
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Your intelligence platform is ready. Select an agent to begin.
        </p>
      </div>

      {/* Stats */}
      <StatsBar />

      {/* Agent Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-white">AI Agents</h2>
          <span className="text-xs text-gray-600">4 agents available</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {agents.map((agent) => (
            <AgentCard key={agent.title} agent={agent} />
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <RecentReports />
    </div>
  );
}