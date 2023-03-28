const { Schema, model } = require("mongoose");
const Login = require("./Login");

const providerSchema = new Schema({
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
