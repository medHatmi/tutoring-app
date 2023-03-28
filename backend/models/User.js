const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    type: {
      type: Boolean,
      default: false,
      required: true,
    },
    email: {
      type: String,
      required: true,
    //   max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isPremium: {
      type: Boolean,
      default: false,
    },
    isOn: {
      type: Boolean,
      default: false
    }



  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
