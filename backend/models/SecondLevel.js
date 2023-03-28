const mongoose = require("mongoose");

const SecondLevelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("SecondLevel", SecondLevelSchema);
