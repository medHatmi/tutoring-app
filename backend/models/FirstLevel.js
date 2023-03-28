const mongoose = require("mongoose");

const FirstLevelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("FirstLevel", FirstLevelSchema);
