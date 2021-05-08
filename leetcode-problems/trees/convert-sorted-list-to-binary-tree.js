/* Convert Sorted List to Binary Search Tree Given the head of a singly linked
list where elements are sorted in ascending order, convert it to a height
balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in
which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Input: head = [-10,-3,0,5,9] Output: [0,-3,9,-10,null,5] Explanation: One
possible answer is [0,-3,9,-10,null,5], which represents the shown height
balanced BST.  Example 2:

Input: head = [] Output: [] Example 3:

Input: head = [0] Output: [0] Example 4:

Input: head = [1,3] Output: [3,1]

Constraints:

The number of nodes in head is in the range [0, 2 * 104].  -10^5 <= Node.val <=
10^5 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }
}

/*
  TC: O(n log n)
  SC: O(log n)
*/
const sortedListToBST = (head) => {
  if (!head) return null;
  if (!head.next) return new TreeNode(head.val);

  let [prev, slow, fast] = [new ListNode(), head, head];
  prev.next = head;

  // Slow will end up being the middle element in the list
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    prev = prev.next;
  }

  // Sever connection before slow, the middle of the list
  prev.next = null;

  const root = new TreeNode(slow.val);

  root.left = sortedListToBST(head);
  root.right = sortedListToBST(slow.next || null);

  return root;
};

/*
  TC: O(n), made better than the previous because you're using the array for
  O(n) lookups
  SC: O(n), made worse than the previous because you're using the array for storage
*/
const sortedListToBSTWithArray = (head) => {
  const values = [];
  let current = head;
  while (current) {
    values.push(current.val);
    current = current.next;
  }

  const recurse = (left = 0, right = values.length - 1) => {
    if (left > right) return null;

    const middle = Math.floor((left + right) / 2);

    const root = new TreeNode(values[middle]);

    if (left === right) return root;

    root.left = recurse(left, middle - 1);
    root.right = recurse(middle + 1, right);
    return root;
  };

  return recurse();
};

/*
  TC: O(n) since you have to traverse the whole list
  SC: O(log n) since the balanced BST is bound by log(n) height
*/
const sortedListToBSTInOrder = (head) => {
  // Get length of list
  let current = head;
  let length = 0;
  while (current) {
    current = current.next;
    length += 1;
  }

  /* Since array is sorted you can traverse the tree "in order"
    So l and r start at the bounds of the array.
   */
  const convert = (l = 0, r = length - 1) => {
    if (l > r) return null;

    const mid = Math.floor((l + r) / 2);

    const left = convert(l, mid - 1);

    const node = new TreeNode(head.val);
    node.left = left;

    head = head.next;

    node.right = convert(mid + 1, r);
    return node;
  };

  return convert();
};

const l = new ListNode(-10);
l.next = new ListNode(-3);
l.next.next = new ListNode(0);
l.next.next.next = new ListNode(5);
l.next.next.next.next = new ListNode(9);

console.log(sortedListToBSTInOrder(l));
