const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const EventregiserSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
  },
  select: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
});
const EnquiryModel = mongoose.model("EnquiryRegistration", EventregiserSchema);
module.exports = EnquiryModel;
