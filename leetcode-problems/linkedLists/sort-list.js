/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const merge = (firstHalf, secondHalf) => {
  let merged;

  if (firstHalf.val < secondHalf.val) {
    merged = firstHalf;
    firstHalf = firstHalf.next;
  } else {
    merged = secondHalf;
    secondHalf = secondHalf.next;
  }

  let mergedPointer = merged;

  while (firstHalf && secondHalf) {
    if (firstHalf.val <= secondHalf.val) {
      merged.next = firstHalf;
      firstHalf = firstHalf.next;
    } else {
      merged.next = secondHalf;
      secondHalf = secondHalf.next;
    }

    merged = merged.next;
  }

  if (firstHalf) {
    while (firstHalf) {
      merged.next = firstHalf;
      firstHalf = firstHalf.next;
      merged = merged.next;
    }
  } else if (secondHalf) {
    while (secondHalf) {
      merged.next = secondHalf;
      secondHalf = secondHalf.next;
      merged = merged.next;
    }
  }

  return mergedPointer;
};

const getMid = (node) => {
  let midPrev = null;
  let [fast, slow] = [node, node];

  while (fast && fast.next) {
    midPrev = midPrev ? midPrev.next : fast;

    fast = fast.next.next;
    slow = slow.next;
  }

  // Cut first half off from second half
  midPrev.next = null;

  return slow;
};

let sortList = function (head) {
  if (!head || !head.next) return head;

  const mid = getMid(head);

  const secondHalf = sortList(mid);
  const firstHalf = sortList(head);

  const merged = merge(firstHalf, secondHalf);

  return merged;
};

const l = {
  val: 4,
  next: {
    val: 2,
    next: {
      val: 1,
      next: {
        val: 3,
        next: null,
      },
    },
  },
};

sortList(l);
