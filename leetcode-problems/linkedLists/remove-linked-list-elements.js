/* Given the head of a linked list and an integer val, remove all the nodes of
the linked list that has Node.val == val, and return the new head.

Example 1:

Input: head = [1,2,6,3,4,5,6], val = 6 Output: [1,2,3,4,5] Example 2:

Input: head = [], val = 1 Output: [] Example 3:

Input: head = [7,7,7,7], val = 7 Output: []

Constraints:

The number of nodes in the list is in the range [0, 104].  1 <= Node.val <= 50 0
<= k <= 50
 */

const removeElements = (head, val) => {
  // prev is the "sentinel" node
  const sentinel = new ListNode();
  sentinel.next = head;

  let [prev, current] = [sentinel, sentinel.next];

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }

  return sentinel.next;
};

const removeElementsRecursive = (head, val) => {
  if (!head) return null;
  head.next = removeElementsRecursive(head.next, val);
  return head.val === val ? head.next : head;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

const l = new ListNode(7);

removeElements(l, 7);
