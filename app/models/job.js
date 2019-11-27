const mongoose = require("mongoose");
const { Schema } = mongoose;

const JobSchema = new Schema({
  organization: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  level: { type: String, required: true },
  location: { type: String, required: true },
  created_at: Date
});

const Jobs = mongoose.model("jobs", JobSchema);

module.exports = Jobs;
