/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

const reverse = (node) => {
  let curr = node;
  let prev = null;

  while (curr) {
    let { next } = curr;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
};

let reorderList = function (head) {
  if (!head.next) return head;

  const sentinel = new ListNode();
  sentinel.next = head;

  let curr = head;

  // O(n^2) because you need to reverse the list for every iteration
  while (curr.next.next) {
    let { next } = curr;

    let reversed = reverse(next);

    curr.next = reversed;
    curr = curr.next;
  }

  return sentinel.next;
};

const findMid = (head) => {
  let [fast, slow] = [head, head];
  // let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    // prev = slow;
    slow = slow.next;
  }
  // prev.next = null;

  return slow;
};

const merge = (l1, l2) => {
  let sentinel = l1;

  while (l2.next) {
    let { next: temp } = l1;
    l1.next = l2;
    l1 = temp;

    temp = l2.next;
    l2.next = l1;
    l2 = temp;
  }

  return sentinel;
};

const reorderListOptimal = (head) => {
  let mid = findMid(head);

  let reversed = reverse(mid);

  return merge(head, reversed);
};

const list = {
  val: 1,
  next:
  {
    val: 2,
    next:
    {
      val: 3,
      next:
      {
        val: 4,
        next:
        // { val: 5, next: null },
        null,
      },
    },
  },
};
reorderListOptimal(list);
