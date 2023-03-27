const { Schema, model } = require("mongoose");

const providerSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true,
  },
  userName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  providerName: {
    type: String,
  },
  clearanceLevel: {
    type: String,
  },
});
