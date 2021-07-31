/* Given the head of a linked list, we repeatedly delete consecutive sequences
of nodes that sum to 0 until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any
such answer.

(Note that in the examples below, all sequences are serializations of ListNode
objects.)

Example 1:

Input: head = [1,2,-3,3,1] Output: [3,1] Note: The answer [1,2,1] would also be
accepted.  Example 2:

Input: head = [1,2,3,-3,4] Output: [1,2,4] Example 3:

Input: head = [1,2,3,-3,-2] Output: [1]

Constraints:

The given linked list will contain between 1 and 1000 nodes.  Each node in the
linked list has -1000 <= node.val <= 1000.
 */

const ListNode = require('../LinkedList.js');

const removeZeroSumSublists = (head) => {
  // create 2 pointers to head
  // iterate and accumulate values
  // if a sum has been seen before, remove intermediate nodes

  let root = new ListNode(0);
  root.next = head;
  const map = new Map();
  map.set(0, root);
  let sumSoFar = 0;

  while (head !== null) {
    sumSoFar += head.val;

    if (map.has(sumSoFar)) {
      let prev = map.get(sumSoFar);
      // start keeps track of node before splice
      let start = prev;
      // track the sums so we can delete their keys in the map
      let auxSum = sumSoFar;

      while (prev !== head) {
        prev = prev.next;
        // Keep track of sums from the sum so far so that we can delete the
        // right keys in the map
        auxSum += prev.val;
        // head.next is node after splice
        if (prev !== head) map.delete(auxSum);
      }

      start.next = head.next;
    } else {
      // Will never set sumSoFar for a node we're going to delete
      map.set(sumSoFar, head);
    }

    head = head.next;
  }

  return root.next;
};
