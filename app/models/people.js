const mongoose = require("mongoose");
const { Schema } = mongoose;

const PeopleSchema = new Schema({
 
  name: { type: String, required: true },
  career: { type: String, required: true },
  level: { type: String, required: true },
  location: { type: String, required: true },
  created_at: Date
});

const People = mongoose.model("people", PeopleSchema);

module.exports = People;
