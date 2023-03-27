const { Schema, model } = require("mongoose");

const userSchema = new User({
  id: {
    type: String,
    require: true,
    unique: true,
  },
  userName: {
    type: String,
    require: true,
  },
  birthDay: {
    type: Date,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: false,
  },
  gender: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  bloodType: {
    type: String,
    require: false,
  },
  dnr: {
    type: Boolean,
    require: false,
  },
  drugallergies: {
    type: String,
    require: false,
  },
  foodallergies: {
    type: String,
    require: false,
  },
  contactName: {
    type: String,
    require: true,
  },
  relationship: {
    type: String,
    require: true,
  },
  contactPhoneNumber: {
    type: String,
    require: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
