const swapPairs = function (head) {
  if (!head || !head.next) return head;

  const temp = head.next;
  head.next = swapPairs(head.next.next);
  temp.next = head;

  return temp;
};
