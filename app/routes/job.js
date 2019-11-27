const insertJobController = require("../controller/job");
const { validate } = require("../utils/validationRoutes");
const insertJob = (app, path) =>
  app.post(`${path}/vagas`, validate("jobInsert"), insertJobController);

module.exports = insertJob;
