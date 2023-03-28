const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    id: {
        type: String,
        required:true
     },
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      //   max: 50,
        unique: true,
      },
    
    photo: {
      type: String,
      default: "",
    },
    isTutor: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      // max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    hourPrice: {
      type: String,
      max: 50,
    },
    phone: {
      type: String,
      max: 50,
    },
    experience: {
      type: String,
    },
    profession: {
      type: String,
    },
    level: {
      type: String,
    },


  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
