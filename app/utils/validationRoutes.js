const { body, param } = require("express-validator/check");

exports.validate = method => {
  switch (method) {
    case "jobInsert": {
      return [
        body("empresa", "Nome da empresa esta vazio").exists(),
        body("titulo", "Titulo da vaga é necessario").exists(),
        body("descricao", "Descricao da vaga esta vazio").exists(),
        body("localizacao", "Informe a localizacao").exists(),
        body(
          "nivel",
          "Necessario informar o nivel esperado para esta vaga (numero do tipo INT)"
        )
          .exists()
          .isInt()
      ];
    }
    case "personInsert": {
      return [
        body("nome", "Nome do candidato esta vazio").exists(),
        body("profissao", "Profissao da vaga esta vazio").exists(),
        body("localizacao", "Informe a localizacao").exists(),
        body(
          "nivel",
          "Necessario informar o nivel de experiencia do candidato (numero do tipo INT)"
        )
          .exists()
          .isInt()
      ];
    }
    case "applications": {
      return [
        body("id_vaga", "Informe o ID da vaga").exists(),
        body("id_pessoa", "Informe o ID do candidato").exists()
      ];
    }
  }
};
