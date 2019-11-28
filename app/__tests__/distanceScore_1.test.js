const CandidateScore = require("../services/CandidateScore");
const Graph = require("../services/Graph");
const job_mock = require("../mock/job_mock");
const candidate_mock = require("../mock/candidate_mock");
const nodes = require("../services/Nodes");

const score = new CandidateScore(candidate_mock._1, job_mock._1);
const map = new Graph();
nodes.nodesName.forEach(element => {
    map.addNode(element);
  });
  nodes.graphNodes.forEach((elem, i) => {
    map.addEdge(elem[0], elem[1], elem[2]);
  });

test("Teste para validar pontuacao baseado em distancia", () => {
  const dijkstra = map.findPathWithDijkstra(
    candidate_mock._1.location,
    job_mock._1.location
  );
  const results = score.scoreRulePerDistance(dijkstra.cost);
  expect(results).toBe(100);
});
