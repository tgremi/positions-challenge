const frisby = require("frisby");
const Joi = frisby.Joi;

const body = {
  empresa: "Xpto enterprise",
  titulo: "Vaga teste",
  descricao: "Criar os mais diferentes tipos de teste",
  localizacao: "A",
  nivel: 3
};

it("POST Cria a vaga", function() {
  return frisby
    .post("http://localhost:9000/v1/vagas", body)
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
});

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
