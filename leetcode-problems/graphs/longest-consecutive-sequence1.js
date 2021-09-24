/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  const graph = new Map();
  nums = new Set(nums);

  // make adj list
  nums.forEach((num) => {
    if (!graph.has(num)) graph.set(num, []);
    if (graph.has(num + 1)) {
      graph.get(num).push(num + 1);
      graph.get(num + 1).push(num);
    }
    if (graph.has(num - 1)) {
      graph.get(num).push(num - 1);
      graph.get(num - 1).push(num);
    }
  });

  const seen = new Set();

  const bfs = (node) => {
    const queue = [node];
    const component = [];

    while (queue.length > 0) {
      const curr = queue.shift();
      seen.add(curr);
      component.push(curr);

      graph.get(curr).forEach((neighbor) => {
        if (!seen.has(neighbor)) {
          queue.push(neighbor);
        }
      });
    }

    return component;
  };

  const components = [];
  graph.forEach((neighbors, node) => {
    if (!seen.has(node)) components.push(bfs(node));
  });

  return components.reduce((largest, curr) => (largest > curr.length ? largest : curr.length), 0);
};

const longestConsecutiveSet = (nums) => {
  nums = new Set(nums);
  let best = 0;

  nums.forEach((num) => {
    if (!nums.has(num - 1)) {
      let next = num + 1;
      while (nums.has(next)) next += 1;

      best = Math.max(best, next - num);
    }
  });

  return best;
};

// longestConsecutive([100, 4, 200, 1, 3, 2]);
// longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
// longestConsecutive([]);
longestConsecutive([1, 2, 0, 1]);
