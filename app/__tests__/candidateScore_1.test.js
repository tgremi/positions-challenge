const CandidateScore = require("../services/CandidateScore");
const job_mock = require("../mock/job_mock");
const candidate_mock = require("../mock/candidate_mock");
const score = new CandidateScore(candidate_mock._1, job_mock._1);

test("Teste para determinar a pontuação do candidato ", () => {
  const results = score.score();
  expect(results).toBe(100);
});
