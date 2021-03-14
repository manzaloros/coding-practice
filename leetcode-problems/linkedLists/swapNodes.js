const swapNodes = (head, k) => {
  let A = head;
  let B = head;
  let K;
  let temp = 0;

  // Traverse list until kth node
  for (let i = 1; i < k; i += 1) {
    A = A.next;
    K = A;
    A = A.next;
  }

  // Traverse list from kth node until end, B will end up being length - k
  while (A) {
    A = A.next;
    B = B.next;
  }

  // Don't need to swap nodes, just the values
  temp = K.val;
  K.val = B.val;
  B.val = temp;
  return head;
};
