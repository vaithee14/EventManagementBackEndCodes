// last email registration
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const emailSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  email: {
    type: String,
    required: true,
  },
});

const EmailModel = mongoose.model("SubscribEmail", emailSchema);

module.exports = EmailModel;
