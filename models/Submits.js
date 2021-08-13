const mongoose = require("mongoose");

const SubmitsSchema = new mongoose.Schema({
  formId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("submits", SubmitsSchema);
