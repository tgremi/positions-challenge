const CandidateScore = require("../services/CandidateScore");
const job_mock = require("../mock/job_mock");
const candidate_mock = require("../mock/candidate_mock");
const score = new CandidateScore(candidate_mock._2, job_mock._2);

test("Teste para validar pontuacao baseado em distancia", () => {
  const dijkstra = score.findPathWithDijkstra(
    candidate_mock._2.location,
    job_mock._2.location
  );
  const results = score.scoreRulePerDistance(dijkstra.cost);
  expect(results).toBe(50);
});
