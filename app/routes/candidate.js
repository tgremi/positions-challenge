const insertPeopleController = require("../controller/candidate");
const { validate } = require("../utils/validationRoutes");

const insertCandidate = (app, path) =>
  app.post(`${path}/pessoas`, validate("personInsert"), insertPeopleController);

module.exports = insertCandidate;
