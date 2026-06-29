// middleware/authMiddleware.js

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  // Check Authorization Header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      console.log("Token Received:", token);

      // Verify Token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
      );

      console.log("Decoded Token:", decoded);

      // Get User Details
      req.user = await User.findById(decoded.id).select(
        "-password"
      );

      console.log("Authenticated User:", req.user);

      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "Not authorized, user not found",
        });
      }

      next();
    } catch (error) {
      console.error("Auth Middleware Error:", error);

      return res.status(401).json({
        success: false,
        message: "Not authorized, token failed",
      });
    }
  }

  // No Token Found
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, no token provided",
    });
  }
};

module.exports = { protect };