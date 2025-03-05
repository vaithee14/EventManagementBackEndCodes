// category payment registration modals
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: Number, required: true },
});

const RegistrationModel = mongoose.model("UserRegistration", userSchema);

module.exports = RegistrationModel;
