/*
Remove Duplicates from Sorted List II
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.



Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]


Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/
const deleteDuplicates = function (head) {
  if (!head) return head;

  const duplicatesTracker = {};
  // conventional to name this 'dummy'
  let headCopy = head;
  while (head) {
    if (duplicatesTracker.hasOwnProperty(head.val)) {
      duplicatesTracker[head.val] = true;
    } else {
      duplicatesTracker[head.val] = false;
    }
    head = head.next;
  }

  let newNext = headCopy.next;
  head = headCopy;
  while (newNext) {

    while (duplicatesTracker[headCopy.val]) {
      head = head.next;
      if (!head) return head;
      headCopy = headCopy.next;
      newNext = headCopy.next;
    }

    if (!newNext) return head;

    while (duplicatesTracker[newNext.val]) {
      newNext = newNext.next;
      headCopy.next = newNext;
      if (!newNext) return head;
    }
    headCopy.next = newNext;
    headCopy = headCopy.next;
    newNext = headCopy.next;
  }
  return head;
}

// Tom gower solution:
var deleteDuplicates = function (head) {
  const dummy = new ListNode();
  dummy.next = head;
  let curr = dummy;
  let next = curr.next;
  while (next) {
    const val = next.val;
    if (next.next && next.next.val === val) {
      while (next.next && next.next.val === val) {
        next.next = next.next.next;
      }
      curr.next = next.next;
    } else {
      curr = curr.next;
    }
    next = curr.next;
  }
  return dummy.next;
};