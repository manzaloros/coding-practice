/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const endOfFirstHalf = (head) => {
  let [fast, slow] = [head, head];

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

const reverseList = (head) => {
  let [prev, curr] = [null, head];

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

let isPalindrome = function (head) {
  if (!head) return true;

  let firstHalfEnd = endOfFirstHalf(head);
  let secondHalfStart = reverseList(firstHalfEnd.next);

  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;

  while (result && p2) {
    if (p1.val !== p2.val) result = false;
    p1 = p1.next;
    p2 = p2.next;
  }

  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
};
