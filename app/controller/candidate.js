const { validationResult } = require("express-validator/check");
const People = require("../models/people");

const candidateInsert = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const { nome, nivel, profissao, localizacao } = req.body;
    const responsePeopleCollectionInsert = await People.create({
      name: nome,
      level: nivel,
      career: profissao,
      location: localizacao,
      created_at: new Date()
    });

    res.status(201).send({
      message: "Candidato inserido com sucesso! ",
      data: responsePeopleCollectionInsert
    });
  } catch (error) {
    console.log("ERROR - candidateInsert() - ", error);
    res.status(500).send("<h1> INTERNAL SERVER ERROR </h1> ");
  }
};

module.exports = candidateInsert;
