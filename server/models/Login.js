const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const loginSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  loginType: {
    type:String,
    required:true,
    enum: {
        values: ["Customer", "Provider"],
        message:
          'allowable values are ["Customer", "Provider"]',
      },
}
});

// hash user password
loginSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
loginSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Login = model('Login', loginSchema);

module.exports = Login;