const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('images', imageSchema);