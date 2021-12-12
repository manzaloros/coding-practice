const sample = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

const largerSample = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`;

const puzzleInput = `TR-start
xx-JT
xx-TR
hc-dd
ab-JT
hc-end
dd-JT
ab-dd
TR-ab
vh-xx
hc-JT
TR-vh
xx-start
hc-ME
vh-dd
JT-bm
end-ab
dd-xx
end-TR
hc-TR
start-vh`;

const findAllPathsPart2 = (input, part2) => {
  const graph = input.split(/\n/).reduce((map, line) => {
    const [node1, node2] = line.split('-');
    if (!map.has(node1)) map.set(node1, new Set());
    map.get(node1).add(node2);

    if (!map.has(node2)) map.set(node2, new Set());
    map.get(node2).add(node1);

    return map;
  }, new Map());

  const paths = [];
  const isLowerCase = (node) => node.toLowerCase() === node;

  const dfs = (node, visited, path, twiceVisited) => {
    if (node === 'end') {
      path.push(node);
      paths.push(path);
    } else if (!visited.has(node) || (part2 && !twiceVisited)) {
      if (isLowerCase(node) && visited.has(node)) twiceVisited = node;

      if (isLowerCase(node)) visited.add(node);
      path.push(node);

      graph.get(node).forEach((neighbor) => {
        if (neighbor !== 'start') dfs(neighbor, new Set(visited), [...path], twiceVisited);
      });
    }
  };

  dfs('start', new Set(), [], null);

  return paths.length;
};

findAllPathsPart2(puzzleInput, true);
