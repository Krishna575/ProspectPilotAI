const express = require("express");
const router = express.Router();

const {
  getReports,
  deleteReport,
} = require("../controllers/reportController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getReports);

router.delete("/:id", protect, deleteReport);

module.exports = router;