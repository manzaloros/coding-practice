/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}

 s -> h
 1 2 3 4 5
                  p
                  c
  1 2 6 6 3 4 5 6

  while

 */
let removeElements = function (head, val) {
  const sentinel = new ListNode();
  sentinel.next = head;

  let [prev, curr] = [sentinel, head];

  while (curr) {
    if (curr.val === val) {
      while (curr?.val === val) curr = curr.next;

      prev.next = curr;
    }

    prev = curr;
    curr = curr?.next;
  }

  return sentinel.next;
};

let removeElementsRecursion = function (head, val, prev = null) {
  if (!head) return null;

  if (head.val === val) return removeElements(head.next, val, prev);

  head.next = removeElements(head.next, val, head);

  return head;
};
