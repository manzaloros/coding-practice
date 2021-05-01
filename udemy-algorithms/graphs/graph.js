class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(key) {
    if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
  }

  addEdge(v1, v2, { adjacencyList: list } = this) {
    list[v1].push(v2);
    list[v2].push(v1);
  }

  removeEdge(v1, v2, { adjacencyList: list } = this) {
    list[v1] = list[v1].filter((v) => v !== v2);
    list[v2] = list[v2].filter((v) => v !== v1);
  }

  removeVertex(v, { adjacencyList: list } = this) {
    Object.keys(list).forEach((n) => this.removeEdge(v, list[v]));
    delete list[v];
  }

  dfsRecursive(v, visited = new Set(), results = []) {
    if (!v) return null;

    results.push(v);
    visited.add(v);

    this.adjacencyList[v].forEach((c) => {
      if (!visited.has(c)) results.concat(this.dfsRecursive(c, visited, results));
    });

    return results;
  }

  dfsIterative(v, stack = [v], visited = new Set(), results = []) {
    visited.add(v);
    while (stack.length) {
      const vertex = stack.pop();
      results.push(vertex);

      this.adjacencyList[vertex].forEach((c) => {
        if (!visited.has(c)) {
          visited.add(c);
          stack.push(c);
        }
      });
    }
    return results;
  }

  bfs(v, queue = [v], visited = new Set(), results = []) {
    visited.add(v);

    while (queue.length) {
      const vertex = queue.shift();
      results.push(vertex);

      this.adjacencyList[vertex].forEach((c) => {
        if (!visited.has(c)) {
          visited.add(c);
          queue.push(c);
        }
      });
    }

    return results;
  }
}

// const g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('Dallas');
// g.addVertex('Aspen');
// g.addEdge('Tokyo', 'Dallas');
// g.addEdge('Tokyo', 'Aspen');
// g.addEdge('Aspen', 'Dallas');
// console.log(g.dfsRecursive('Tokyo'));

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g.dfsRecursive('A'));
console.log(g.dfsIterative('A'));
console.log(g.bfs('A'));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
