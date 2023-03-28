const mongoose = require("mongoose");

const FifthLevelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("FifthLevel", FifthLevelSchema);
