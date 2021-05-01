// Simple priority queue
class NaivePQ {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() { return this.values.shift(); }

  sort() { this.values.sort(({ priority: a }, { priority: b }) => a - b); }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  dijkstrasShortestPath(start, end, { adjacencyList: list } = this) {
    const distances = new Map();
    Object.keys(list).forEach((k) => distances.set(k, Infinity));
    distances.set(start, 0);

    const priorityQueue = new NaivePQ();
    Object.keys(list).forEach((k) => {
      if (k !== start) {
        priorityQueue.enqueue(k, Infinity);
      } else {
        priorityQueue.enqueue(k, 0);
      }
    });

    const previous = new Map();
    Object.keys(list).forEach((k) => previous.set(k, null));

    while (priorityQueue.values.length) {
      const vertex = priorityQueue.dequeue();
      if (vertex.val === end) return distances.get(vertex.val);

      list[vertex.val].forEach((v) => {
        const distance = v.weight;

        if (distance < distances.get(v.node)) {
          const totalDistance = distance + distances.get(vertex.val);
          distances.set(v.node, totalDistance);
          previous.set(v.node, vertex.val);
          priorityQueue.enqueue(v.node, totalDistance);
        }
      });
    }
  }
}

const g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 9);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'D', 3);
g.addEdge('C', 'E', 5);
g.addEdge('D', 'E', 6);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 2);

console.log(g.dijkstrasShortestPath('A', 'F'));
