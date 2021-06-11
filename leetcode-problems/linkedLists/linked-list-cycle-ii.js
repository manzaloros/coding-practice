// Find a point of intersection, or null
// Does not guarantee that it's the FIRST point that they intersect!
const getIntersect = (node) => {
  let slow = node;
  let fast = node;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return slow;
  }
  return null;
};

const detectCycle = function (head) {
  if (!head) return null;

  const intersect = getIntersect(head);
  if (!intersect) return null;

  let ptr1 = head;
  let ptr2 = intersect;

  // Starting a pointer from the beginning and one from the intersection,
  // You know that the fast pointer has gone twice as far as the slow pointer
  // So you can advance them one by one until they meet
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr1;
};
