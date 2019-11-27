const Graph = require("./Graph");

class CandidateScore {
  constructor(candidate, job) {
    this.map = new Graph();
    this.map.addNode("A");
    this.map.addNode("B");
    this.map.addNode("C");
    this.map.addNode("D");
    this.map.addNode("E");
    this.map.addNode("F");
    this.map.addEdge("A", "B", 5);
    this.map.addEdge("B", "C", 7);
    this.map.addEdge("B", "D", 3);
    this.map.addEdge("C", "B", 7);
    this.map.addEdge("C", "E", 4);
    this.map.addEdge("D", "B", 3);
    this.map.addEdge("D", "E", 10);
    this.map.addEdge("D", "F", 8);
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
    console.log("exp: ", expScore);
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
