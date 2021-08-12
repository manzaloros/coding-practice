/* Square interview info:

Pair programming
Ask lots of questions
Run, debug, console log
Documentation lookup

Will keep giving problems

Focus on writing slow, maintainable code. Clean up and test as you go along.

Code needs to run at the end.

50 minutes.

TEST more incrementally

Communicate a lot!!!
NO ONE LINERS

Make more DRY functions for classes

How can I break things down as much as possible? Make it as modular as possible

—————
Mid level might not have passed.

Get t shirt for A if you get the job
 */
// Imagine we are building a package manager downloading tool.
// I've built the downloading logic already. I need you to take
// a list of dependencies and create a data structure for me to
// use. This data structure should also include a "get package"
// method to return a package's downstream dependencies in
// the form of a substructure.

// - Dependency List

// react → lodash
// react → react-dom
// lodash → underscore
// lodash → left-pad
// react-dom → left-pad
// underscore → jquery
// express → body-parser

// Requirements
//   1. Create a data structure from a list to represent the dependencies a. The
//       data structure should use O(n) space where n represents the number of
//       unique packages in the input dependency list b. There are no time
//       constraints on building this data structure
//   2. Write a "get package" method that returns a substructure of all
//      dependencies

// Get Package Example:
//   - input : "lodash"
//   - output: a substructure that includes "lodash", "underscore", "jquery",
//     "left-pad".
//   - note: the output should NOT be a flat list, but rather a substructure of
//     the data structure you have created. For example, if we have two
//     linked-lists below, the second list can be considered a substructure of
//     the first list a → b → c → d → e c → d → e

const input = [
  ['react', 'lodash'],
  ['react', 'react-dom'],
  ['lodash', 'underscore'],
  ['lodash', 'left-pad'],
  ['react-dom', 'left-pad'],
  ['underscore', 'jquery'],
  ['express', 'body-parser'],
];
/*
                react
          lodash.     react dom
    underscore leftpad

    DAG
    react: [lodash, react dom]
    lodash: [underscore, leftpad]
    reactdom: [left pad]
    underscore: [jquery]
    express: [bodyparser]

*/

// make the graph as a class
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Graph {
  constructor(inputArr) {
    this.nodes = new Map();

    inputArr.forEach(([value, dep]) => {
      if (!this.nodes.has(value)) this.nodes.set(value, new Node(value));
      if (!this.nodes.has(dep)) this.nodes.set(dep, new Node(dep));

      // Get dependencies of package
      const packageDeps = this.nodes.get(value).children;

      const dependency = this.nodes.get(dep);
      packageDeps.push(dependency);
    });
  }

  // getNode(name) {
  //   return this.nodes.get(name) || this.createNode(name);
  // }

  // createNode(name) {
  //   const node = new Node(name);
  //   this.nodes.set(name, node);
  //   return node;
  // }

  getPackage(name) {
    return this.nodes.get(name) || null;

    // const pa = this.nodes.get(name);

    // if (pa) return pa;
    // return null;
  }
}

let g = new Graph(input);

// console.log(g.nodes);
// console.log(g.nodes.get('react').children)
function print(input) {
  console.log(JSON.stringify(input, null, 2));
}
print(g.getPackage('angular'));

/*
iterate over input tuples
  make a node from tuple[0]
  if graph doesn't have the value: add node to g.children;
  add dependency (tuple[1]) to node (get node from graph children, push to children)
*/

// getPackage => search the graph

// We've finished building our package manager tool! Our next task is
// to pass our substructure to a visualization library. Imagine that we
// now have a circular dependency loop (jquery now depends on react).
// Let's add a "last node" property to the last packages that are found for
// the first time when "get package" is called. This is so our
// visualization library knows where to stop.

// Get Package Example:

// react → lodash
// react → react-dom
// lodash → underscore
// lodash → left-pad
// react-dom → left-pad
// underscore → jquery
// express → body-parser
// jquery → react

// Input: "lodash"
// Cycle: lodash → underscore → jquery → *react → lodash
// In the above example, react is the last package in the cycle before we
// encounter a repeat. We should add an "is cyclic" property to react.
