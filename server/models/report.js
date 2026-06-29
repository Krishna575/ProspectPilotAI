const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    agentType: {
      type: String,
      required: true,
    },

    startupIdea: {
      type: String,
      required: true,
    },

    report: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Report || mongoose.model("Report", reportSchema);