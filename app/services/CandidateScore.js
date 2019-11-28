const Graph = require("./Graph");
const nodes = require("./Nodes");

class CandidateScore {
  constructor(candidate, job) {
    this.map = new Graph();
    nodes.nodesName.forEach(element => {
      this.map.addNode(element);
    });

    nodes.graphNodes.forEach((elem, i) => {
      this.map.addEdge(elem[0], elem[1], elem[2]);
    });

    this.candidate = candidate;
    this.job = job;
  }

  experienceScore(candidateExp, jobExpReq) {
    return 100 - 25 * (Math.abs(jobExpReq) - Math.abs(candidateExp));
  }

  scoreRulePerDistance(distance) {
    if (distance <= 5) {
      return 100;
    }
    if (distance > 5 && distance <= 10) {
      return 75;
    }
    if (distance > 10 && distance <= 15) {
      return 50;
    }
    if (distance > 15 && distance <= 20) {
      return 25;
    }
    return 0;
  }

  score() {
    const expScore = this.experienceScore(this.candidate.level, this.job.level);
    const lowestDistance = this.map.findPathWithDijkstra(
      this.job.location,
      this.candidate.location
    ).cost;
    const distanceScore = this.scoreRulePerDistance(lowestDistance);
    const totalScoreByCandidate = (expScore + distanceScore) / 2;
    return totalScoreByCandidate;
  }
}

module.exports = CandidateScore;
