const { Schema, model } = require("mongoose");
const Login = require("./Login");

const providerSchema = new Schema({
  _id: {
    type: String,
  },
  providerName: {
    type: String,
    required: true,
  },
  login: [
    {
      type: Schema.Types.ObjectId,
      ref: "Login",
    },
  ],
});

const Provider = model("Provider", providerSchema);

module.exports = Provider;
