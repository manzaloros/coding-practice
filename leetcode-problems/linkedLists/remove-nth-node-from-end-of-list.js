/* Given the head of a linked list, remove the nth node from the end of the list
and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2 Output: [1,2,3,5] Example 2:

Input: head = [1], n = 1 Output: [] Example 3:

Input: head = [1,2], n = 1 Output: [1]

Constraints:

The number of nodes in the list is sz.  1 <= sz <= 30 0 <= Node.val <= 100 1 <=
n <= sz

Follow up: Could you do this in one pass? */

// Make sure to return dummy.next at the end!
const removeNthFromEnd = (head, n) => {
  const dummy = new ListNode();

  dummy.next = head;
  let ptr1 = dummy;
  let ptr2 = dummy;

  // Advance first pointer n + 1 times so that when you advance pointer 2 later
  // pointer 2 will be referencing the node BEFORE the node we need to remove
  let i = 0;
  while (i < n + 1) {
    i += 1;

    ptr1 = ptr1.next;
  }

  // Get pointer 2 to right before the node we want to remove
  while (ptr1) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  const removed = ptr2.next;

  ptr2.next = ptr2.next.next;
  // Just unlinking the removed node's next prop
  removed.next = null;

  // dummy.next references the head position and takes into account if the head
  // was removed
  return dummy.next;
};
