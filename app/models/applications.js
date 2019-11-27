const mongoose = require("mongoose");
const { Schema } = mongoose;

const ApplicationsSchema = new Schema({
  job_id: { type: String, required: true },
  person_id: { type: String, required: true },
  person_score: { type: Number, required: true },
  created_at: Date
});

const Applications = mongoose.model("applications", ApplicationsSchema);

module.exports = Applications;
