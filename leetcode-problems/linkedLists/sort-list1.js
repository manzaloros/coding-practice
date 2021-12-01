const merge = (l1, l2) => {
  const merged = new ListNode();
  let curr = merged;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      curr.next = l2;
      const temp = l2.next;
      l2.next = l1;

      l1 = l1.next;
      l2 = temp;
    } else {
      curr.next = l1;
      const temp = l1.next;
      l1.next = l2;

      l2 = l2.next;
      l1 = temp;
    }

    curr = curr.next.next;
  }

  if (l1) {
    curr.next = l1
  } else if (l2) {
    curr.next = l2
  }

  return merged.next;
}

const splitList = (list) => {
  const firstHalf = list;
  let l1 = firstHalf;
  let l2 = firstHalf;

  while (l2.next) {
    l1 = l1.next;
    l2 = l2.next.next;
  }

  const secondHalf = l1.next;
  l1.next = null;

  return [firstHalf, secondHalf]
}

var sortList = function(head) {
  if (!head || !head.next) return head;

  const [firstHalf, secondHalf] = splitList(head);

  return merge(firstHalf, secondHalf);
};