const { validationResult } = require("express-validator/check");
const Job = require("../models/job");

const jobInsert = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const { empresa, descricao, titulo, nivel, localizacao } = req.body;

    const responseFromJobCollection = await Job.create({
      organization: empresa,
      description: descricao,
      title: titulo,
      level: nivel,
      location: localizacao,
      created_at: new Date()
    });
    res
      .status(201)
      .send({
        message: "vaga adicionada com sucesso!",
        data: responseFromJobCollection
      });
  } catch (error) {
    console.log("Server error - ", error);
    res.status(500).send("INTERNAL SERVER ERRROR");
  }
};

module.exports = jobInsert;
