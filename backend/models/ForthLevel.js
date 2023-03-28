const mongoose = require("mongoose");

const ForthLevelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("ForthLevel", ForthLevelSchema);
