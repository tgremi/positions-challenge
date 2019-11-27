const rankingController = require("../controller/ranking");
const { validate } = require("../utils/validationRoutes");

const getRanking = (app, path) =>
  app.get(`${path}/vagas/:id_vaga/candidaturas/ranking`, rankingController);

module.exports = getRanking;
