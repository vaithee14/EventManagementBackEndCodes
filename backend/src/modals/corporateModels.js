const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const corporateEventSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const conporateModel = mongoose.model("CorporateEvents", corporateEventSchema);
module.exports = conporateModel;
