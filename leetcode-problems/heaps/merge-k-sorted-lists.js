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
import { MinPriorityQueue } from '@datastructures-js/priority-queue';
import ListNode from '../LinkedList.js';

// O total number of of nodes * log k
export const mergeKLists = (lists) => {
  const minPQ = new MinPriorityQueue(node => node.val);

  // Add all lists to pq if not null
  // note, it only adds the first node from each list.
  // We'll iterate through each list in the later loop.
  for (const node of lists) {
    if (node) {
      minPQ.enqueue(node);
    }
  }

  // sentinel node is a dummy node that goes at the front of the list
  const sentinel = new ListNode();
  // pointer tracks current node of list we're building
  let pointer = sentinel;

  while (minPQ.size() > 0) {
    // every value you dequeue will be in ascending order
    const node = minPQ.dequeue();
    pointer.next = node

    // track the sorted list you are building (move the pointer forward)
    pointer = pointer.next;

    if (node.next) {
      minPQ.enqueue(node.next);
    }
  }

  return sentinel.next;
};

