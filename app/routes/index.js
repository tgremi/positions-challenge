module.exports = {
  healthCheck: (app, path) =>
    app.get(`${path}/healthCheck`, (req, res) =>
      res.send({ status: "Server OK" })
    ),
  jobInsert: require("./job"),
  candidateInsert: require("./candidate"),
  applications: require("./applications"), 
  ranking: require("./ranking")
};
