// server.js

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Database Connection
const connectDB = require("./config/db");

// Connect MongoDB
connectDB();

// Route Imports
const authRoutes = require("./routes/authRoutes");
const agentRoutes = require("./routes/agentRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Root Route
app.get("/", (req, res) => {
  res.send("ProspectPilot AI Backend Running 🚀");
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api/reports", reportRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Endpoint Not Found",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, "127.0.0.1", () => {
  console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
});