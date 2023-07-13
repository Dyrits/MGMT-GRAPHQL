const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ["Not started", "In progress", "Completed"]
  }
});

module.exports = mongoose.model("Project", ProjectSchema);