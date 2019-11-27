const Applications = require("../models/applications");

const ranking = async (req, res) => {
  try {
    const { id_vaga } = req.params;

    const responseFromCollection = await Applications.find({
      job_id: id_vaga
    }).sort({
      person_score: "desc", 
    });

    res.status(200).send({ data: responseFromCollection });
  } catch (error) {
    console.log("ERROR - ranking() - ", error);
    res.status(500).send("<h1> INTERNAL SERVER ERROR </h1> ");
  }
};

module.exports = ranking;
