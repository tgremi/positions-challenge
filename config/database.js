const mongoose = require("mongoose");

const getConnection = () => {
  const URI = process.env.URI_MONGO || "localhost";
  console.log("createConnection on DB", `mongodb://${URI}:27017/jobTest`);
  mongoose.connect(`mongodb://${URI}:27017/jobTest`, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
};
module.exports = getConnection();
