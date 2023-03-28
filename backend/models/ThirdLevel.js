const mongoose = require("mongoose");

const ThirdLevelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("ThirdLevel", ThirdLevelSchema);
