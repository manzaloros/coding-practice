let copyRandomList = function (head) {
  if (!head) return null;

  let curr = head;

  while (curr) {
    const clone = new Node(curr.val);

    // connect clone with everything after curr node
    clone.next = curr.next;
    // place clone right after curr node
    curr.next = clone;
    // iterate to next node
    curr = clone.next;
  }

  curr = head;

  /*
    Set clone random pointer to be where the curr node random points.
    Be careful not to set it to be the original list, set it to point to the
    cloned list.
  */
  while (curr) {
    const clone = curr.next;

    if (curr.random) {
      const clonedRandom = curr.random.next;
      clone.random = clonedRandom;
    } else {
      clone.random = null;
    }

    curr = clone.next;
  }

  let oldList = head;
  let clone = head.next;
  const cloneHead = head.next;

  while (oldList) {
    // Connect original list to its original next (skip the clone)
    oldList.next = oldList.next.next;

    // Connect clone with its correct next (skipping the original list)
    if (clone.next) {
      clone.next = clone.next.next;
    } else {
      clone.next = null;
    }

    oldList = oldList.next;
    clone = clone.next;
  }

  return cloneHead;
};
