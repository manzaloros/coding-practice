class Node {
  constructor(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

let copyRandomList = function (head) {
  const seen = new Map(); /* original: copy */
  const sentinel = new Node();

  let copy = sentinel;
  let node = head;

  while (node) {
    if (seen.has(node)) {
      copy.next = seen.get(node);
    } else {
      copy.next = new Node(node.val);
      seen.set(node, copy.next);
    }

    if (seen.has(node.random)) {
      copy.next.random = seen.get(node.random);
    } else {
      copy.next.random = node.random ? new Node(node.random.val) : null;
      seen.set(node.random, copy.next.random);
    }

    copy = copy.next;
    node = node.next;
  }

  return sentinel.next;
};
