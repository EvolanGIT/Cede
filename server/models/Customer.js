const { Schema, model } = require("mongoose");
const Login = require("./Login");
const EmergencyContact = require("./EmergencyContact");
const Allergy = require("./Allergy");
const bcrypt = require("bcrypt");

const customerSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  login: [
    {
      type: Schema.Types.ObjectId,
      ref: "Login",
    },
  ],
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthdate: {
    type: Date,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  gender: {
    type: String,
    enum: ["Female", "Male"],
    required: true,
  },
  phoneNumber: {
    type: String,
    //This Regex phone number regex works for the formats (123) 456-7890 or 123-456-7890.
    match: [
      /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
      "Must enter a valid format for phone number",
    ],
  },
  bloodType: {
    type: String,
    required: true,
    enum: {
      values: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      message:
        'allowable values are ["A+","A-","B+","B-","O+","O-","AB+","AB-"]',
    },
  },
  DNR: {
    type: Boolean,
  },
  DNI: {
    type: Boolean,
  },
  EmergencyContact: [
    {
      type: Schema.Types.ObjectId,
      ref: "EmergencyContact",
    },
  ],
  Allergy: [
    {
      type: Schema.Types.ObjectId,
      ref: "Allergy",
    },
  ],
});

const Customer = model("Customer", customerSchema);

module.exports = Customer;
