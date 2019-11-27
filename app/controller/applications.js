const { validationResult } = require("express-validator/check");
const Job = require("../models/job");
const People = require("../models/people");
const Applications = require("../models/applications");
const CandidateScore = require("../services/CandidateScore");

const applicationsInsert = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    const { id_vaga, id_pessoa } = req.body;

    const jobDocument = await Job.findOne({ _id: id_vaga });
    const personDocument = await People.findOne({ _id: id_pessoa });

    const score = new CandidateScore(jobDocument, personDocument);

    const responseFromCollection = await Applications.create({
      job_id: id_vaga,
      person_id: id_pessoa,
      person_score: score.score(),
      created_at: new Date()
    });

    res
      .status(201)
      .send({
        message: "Candidatura realizada com sucesso",
        data: responseFromCollection
      });
  } catch (error) {
    console.log("ERROR - applicationsInsert() - ", error);
    res.status(500).send("<h1> INTERNAL SERVER ERROR </h1> ");
  }
};

module.exports = applicationsInsert;
