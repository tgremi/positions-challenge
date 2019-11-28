const Graph = require("../services/Graph");
const nodes = require("../services/Nodes");
const map = new Graph();
nodes.nodesName.forEach(element => {
  map.addNode(element);
});
nodes.graphNodes.forEach((elem, i) => {
  //   console.log("No pai: ", elem[0], "No destino: ", elem[1], "Valor: ", elem[2]);
  map.addEdge(elem[0], elem[1], elem[2]);
});

test("Teste para encontrar o caminho com menor custo entre ponto A e ponto F ", () => {
  const results = map.findPathWithDijkstra("A", "F");

  expect(JSON.parse(JSON.stringify(results))).toEqual({
    path: ["A", "B", "D", "F"],
    cost: 16
  });
});
