const { Schema, model } = require("mongoose");

const userSchema = new Schema({
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
  dni: {
    type: Boolean,
    require: false,
  },
  drugAllergies: {
    type: String,
    require: false,
    trim: true,
  },
  foodAllergies: {
    type: String,
    require: false,
    trim: true,
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
