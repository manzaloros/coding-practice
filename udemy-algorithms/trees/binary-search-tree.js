/*
  The DOM
  Your computer's file structure

  log n is base 2
  .insert() O(log n)
  .find() O(log n)
*/

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, insertedNode = new Node(val), currentNode = this.root) {
    if (!this.root) {
      this.root = insertedNode;
      return this;
    }

    if (val !== currentNode.val) {
      if (insertedNode.val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = insertedNode;
        } else this.insert(val, insertedNode, currentNode.left);
      } else if (!currentNode.right) {
        currentNode.right = insertedNode;
      } else this.insert(val, insertedNode, currentNode.right);
    }

    return this;
  }

  insertIterative(val) {
    const insertedNode = new Node(val);
    if (!this.root) {
      this.root = insertedNode;
      return this;
    }
    let currentNode = this.root;

    // do this forever:
    for (;;) {
      if (currentNode.val === insertedNode.val) return undefined;

      if (insertedNode.val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = insertedNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = insertedNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(val, currentNode = this.root) {
    if (!currentNode) return false;

    if (val === currentNode.val) return true;

    if (val < currentNode.val) {
      return this.find(val, currentNode.left);
    }

    return this.find(val, currentNode.right);
  }

  findIterative(val) {
    if (!this.root) return false;

    let current = this.root;
    while (current) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  bfs() {
    const [q, visited] = [[this.root], []];

    while (q.length) {
      const { length } = q;

      for (let i = 0; i < length; i += 1) {
        const { left, right, val } = q.pop();
        visited.push(val);

        if (left) q.unshift(left);
        if (right) q.unshift(right);
      }
    }

    return visited;
  }

  dfsPreOrder(visited = [], { val, left, right } = this.root) {
    visited.push(val);

    if (left) this.dfsPreOrder(visited, left);
    if (right) this.dfsPreOrder(visited, right);

    return visited;
  }

  // Explore all children before 'visiting' a node
  dfsPostOrder(visited = []) {
    const traverse = ({ left, right, val }) => {
      if (left) traverse(left);
      if (right) traverse(right);

      visited.push(val);
    };

    traverse(this.root);

    return visited;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(4);
bst.insert(11);
bst.insert(2);
bst.insert(1);
console.log(bst.find(5));
console.log(bst.find(5));
console.log(bst.bfs());
console.log(bst.dfsPreOrder()); // [10,4,2, 1,11]
console.log(bst.dfsPostOrder()); // [1, 2, 4, 11, 10]
