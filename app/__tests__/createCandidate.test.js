const frisby = require("frisby");
const Joi = frisby.Joi;

const body = {
  nome: "Joao Silva",
  profissao: "Engenheiro de Software",
  localizacao: "B",
  nivel: 3
};

it("POST Cria o candidato", function() {
  return frisby
    .post("http://localhost:9000/v1/pessoas", body)
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
});
