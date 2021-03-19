const swapNodes = (head, k) => {
  let A = head;
  let B = head;
  let K;

  // Traverse list until kth node
  // K points to A so we can use it later in the swap
  for (let i = 1; i < k; i += 1) {
    A = A.next;
    K = A;
    A = A.next;
  }

  // Traverse list from kth node until end, B will end up being length - k
  // Since B starts at the head and A starts at kth node
  while (A) {
    A = A.next;
    B = B.next;
  }

  // Don't need to swap nodes, just the values
  let temp = 0;
  temp = K.val;
  K.val = B.val;
  B.val = temp;

  return head;
};
