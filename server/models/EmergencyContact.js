const { Schema, model } = require("mongoose");

const emergencyContactSchema = new Schema({
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
        //This Regex phone number regex works for the formats (123) 456-7890 or 123-456-7890.
        match: [
          /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
          "Must enter a valid format for phone number",
        ],
    },
      relationship: {
        type: String,
        required: true,
      }
})

const EmergencyContact = model('EmergencyContact', emergencyContactSchema);

module.exports = EmergencyContact;