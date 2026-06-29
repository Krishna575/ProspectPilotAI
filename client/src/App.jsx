import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/common/ProtectedRoute";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import MarketResearchPage from "./pages/MarketResearchPage";
import CompetitorAnalysisPage from "./pages/CompetitorAnalysisPage";
import InvestmentIntelligencePage from "./pages/InvestmentIntelligencePage";
import StartupEvaluationPage from "./pages/StartupEvaluationPage";
import ReportsPage from "./pages/ReportsPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="market-research" element={<MarketResearchPage />} />
            <Route path="competitor-analysis" element={<CompetitorAnalysisPage />} />
            <Route path="investment-intelligence" element={<InvestmentIntelligencePage />} />
            <Route path="startup-evaluation" element={<StartupEvaluationPage />} />
            <Route path="reports" element={<ReportsPage />} />
          </Route>

          {/* Redirects & Fallback */}
          <Route path="/app" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}