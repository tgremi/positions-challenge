const PriorityQueue = require("./PriorityQueue");

class Graph extends PriorityQueue {
  constructor() {
    super();
    this.nodes = [];
    this.adjacencyList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.adjacencyList[node1].push({ node: node2, weight: weight });
    this.adjacencyList[node2].push({ node: node1, weight: weight });
  }

  findPathWithDijkstra(startNode, endNode) {
    let times = {};
    let backtrace = {};

    times[startNode] = 0;

    this.nodes.forEach(node => {
      if (node !== startNode) {
        times[node] = Infinity;
      }
    });

    this.enqueue([startNode, 0]);

    while (!this.isEmpty()) {
      let shortestStep = this.dequeue();
      let currentNode = shortestStep[0];
      this.adjacencyList[currentNode].forEach(neighbor => {
        let time = times[currentNode] + neighbor.weight;

        if (time < times[neighbor.node]) {
          times[neighbor.node] = time;
          backtrace[neighbor.node] = currentNode;
          this.enqueue([neighbor.node, time]);
        }
      });
    }

    let path = [endNode];
    let lastStep = endNode;
    while (lastStep !== startNode) {
      path.unshift(backtrace[lastStep]);
      lastStep = backtrace[lastStep];
    }
    return { path, cost: times[endNode] };
  }
}
module.exports = Graph;
