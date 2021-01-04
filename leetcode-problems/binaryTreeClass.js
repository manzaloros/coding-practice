const BinaryTree = function (val) {
  this.val = val;
  this.left = this.right = null;
}

BinaryTree.prototype.addChild = function (val) {
  const child = new BinaryTree(val);
  if (!this.left && !this.right) {
    this.left = child;
    return child;
  }
  if (this.right) {
    this.left = child;
    return child;
  }
  if (this.left) {
    this.right = child;
    return child;
  }
}

constructTreeFromArray = function (arr) {
  const root = new BinaryTree(arr[0]);
  let previousNode = root;
  for (let i = 1; i < arr.length; i += 1) {
    const currentNodeVal = arr[i];
    if (currentNodeVal === null) {
      previousNode.addChild(currentNodeVal);
      continue;
    }
    const currentNode = previousNode.addChild(currentNodeVal);

    previousNode = currentNode;
  }
  return root;
}


const testTree = constructTreeFromArray([7, 4, 3, null, null, 6, 19]);
console.log(testTree);
module.exports = constructTreeFromArray;