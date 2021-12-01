const ListNode = require('../LinkedList');

const merge = (l1, l2) => {
  const merged = new ListNode();
  let tail = merged;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      tail.next = l2;
      l2 = l2.next;
    } else {
      tail.next = l1;
      l1 = l1.next;
    }

    tail = tail.next;
  }

  tail.next = l1 || l2;

  return merged.next;
};

// get mid
const splitList = (list) => {
  const firstHalf = list;
  let l1 = firstHalf;
  let l2 = firstHalf;

  while (l2.next && l2.next.next) {
    l1 = l1.next;
    l2 = l2.next.next;
  }

  const secondHalf = l1.next;
  l1.next = null;

  return [firstHalf, secondHalf];
};

let sortList = function (head) {
  if (!head || !head.next) return head;

  const [firstHalf, secondHalf] = splitList(head);

  return merge(sortList(firstHalf), sortList(secondHalf));
};

const list = ListNode.arrayToList([3, 2, 4]);
sortList(list);
