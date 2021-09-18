/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function (l1, l2) {
  const sentinel = new ListNode();
  let curr = sentinel;
  let [p1, p2] = [l1, l2];

  while (p1 && p2) {
    if (p1.val < p2.val) {
      curr.next = p1;
      p1 = p1.next;
    } else {
      curr.next = p2;
      p2 = p2.next;
    }

    curr = curr.next;
  }

  curr.next = p1 || p2;

  return sentinel.next;
};
