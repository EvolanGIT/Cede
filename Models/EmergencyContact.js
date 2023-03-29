const { Schema, model } = require("mongoose");

const emergencyContactSchema = new Schema({
  lastName: {
    type: String,
    require: true,
  },
  relationship: {
    type: String,
    require: false,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
});

const EmergencyContact = model("EmergencyContact", emergencyContactSchema);

module.exports = EmergencyContact;
