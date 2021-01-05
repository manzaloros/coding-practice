/*
Merge Two Sorted Lists
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

Example 1:


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]


Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.

*/
const mergeTwoLists = (l1, l2) => {
  // sorted is a ListNode wrapper that will hold sorted list
  // current will track and point to the actual lists
  let sorted = new ListNode();
  let current = sorted;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      // set correct order
      // traverse down one level in list
      current.next = l1;
      l1 = l1.next
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    // traverse down one level in sorted list pointer
    current = current.next;
  }
  // add remaining list to sorted list as it is already sorted
  // return wrapper.next as it is the sorted list
  current.next = l1 ? l1 : l2;
  return sorted.next;
}