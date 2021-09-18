/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
const ListNode = require('../LinkedList');

// O total number of of nodes * log k
let mergeKLists = function (lists) {
  const minPQ = new MinPriorityQueue();

  // Add all lists to pq if not null
  lists.forEach((node) => {
    if (node) minPQ.enqueue(node, node.val);
  });

  let sentinel = new ListNode();
  // pointer tracks current node of list we're building
  let pointer = sentinel;

  while (minPQ.size() > 0) {
    // every value you dequeue will be in ascending order
    let { priority: val, element: node } = minPQ.dequeue();
    pointer.next = new ListNode(val);
    // pointer.next = element;
    // track the sorted list you are building
    pointer = pointer.next;
    // iterate through dequeued list
    node = node.next;
    if (node) minPQ.enqueue(node, node.val);
  }

  return sentinel.next;
};
