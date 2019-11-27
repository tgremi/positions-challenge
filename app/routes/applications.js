const applicationsController = require("../controller/applications");
const { validate } = require("../utils/validationRoutes");
const insertApplications = (app, path) =>
  app.post(
    `${path}/candidaturas`,
    validate("applications"),
    applicationsController
  );

module.exports = insertApplications;
