const frisby = require("frisby");
const Joi = frisby.Joi;
const HOSTNAME = process.env.HOSTNAME || "localhost";
const bodyVaga = {
  empresa: "Xpto enterprise",
  titulo: "Vaga teste",
  descricao: "Criar os mais diferentes tipos de teste",
  localizacao: "A",
  nivel: 3
};

const bodyPerson = {
  nome: "Joao Silva",
  profissao: "Engenheiro de Software",
  localizacao: "B",
  nivel: 3
};
let job,
  person = {};

describe("Teste de integracao entre endpoints", function() {
  it("POST Cria a vaga", async function() {
    job = await frisby
      .post(`http://${HOSTNAME}:9000/v1/vagas`, bodyVaga)
      .expect("status", 201)
      .expect(
        "jsonTypes",
        Joi.object({
          _id: Joi.string(),
          description: Joi.string(),
          organization: Joi.string(),
          level: Joi.string(),
          title: Joi.string(),
          location: Joi.string(),
          created_at: Joi.date(),
          __v: 0
        }).options({ convert: true })
      );
    return job;
  });
  it("POST Cria a pessoa", async function() {
    person = await frisby
      .post(`http://${HOSTNAME}:9000/v1/pessoas`, bodyPerson)
      .expect("status", 201)
      .expect(
        "jsonTypes",
        Joi.object({
          _id: Joi.string(),
          name: Joi.string(),
          level: Joi.string(),
          career: Joi.string(),
          location: Joi.string(),
          created_at: Joi.date(),
          __v: 0
        }).options({ convert: true })
      );
    return person;
  });
  it("POST Cria a candidatura", async function() {
    job = job._json.data;
    person = person._json.data;
    return await frisby
      .post(`http://${HOSTNAME}:9000/v1/candidaturas`, {
        id_vaga: job._id,
        id_pessoa: person._id
      })
      .expect("status", 201)
      .expect(
        "jsonTypes",
        Joi.object({
          _id: Joi.string(),
          job_id: Joi.string(),
          person_id: Joi.string(),
          person_score: Joi.number(),
          created_at: Joi.date(),
          __v: 0
        }).options({ convert: true })
      );
  });
});

// "_id": "5dded5a6982cead7578698b9",
//         "job_id": "5dded576982cea71278698b5",
//         "person_id": "5dded578982cea47088698b6",
//         "person_score": 100,
//         "created_at": "2019-11-27T19:59:34.541Z",
//         "__v": 0

// {
//     "_id": "5dded576982cea71278698b5",
//     "organization": "Teste",
//     "description": "Criar os mais diferentes tipos de teste",
//     "title": "Vaga teste",
//     "level": "3",
//     "location": "A",
//     "created_at": "2019-11-27T19:58:46.318Z",
//     "__v": 0
// }
