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

const sortedListToBST = (head) => {
  // Get length
  let length = 0;
  let current = head;
  let previous = null;
  while (current) {
    current.prev = previous;
    previous = current;
    current = current.next;
    length += 1;
  }
  current = head;
  // Store middle node and index for later
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i += 1) {
    current = current.next;
  }
  let current2 = current;

  // Iterate backwards from the middle of the list adding nodes
  const root = new TreeNode(current.val);
  let currentNode = root;
  for (let i = middle; i > 0; i -= 1) {
    currentNode.left = new TreeNode(current.prev?.val);
    current = current.prev;
    currentNode = currentNode.left;
  }

  // Iterate forwards from the middle of the list adding nodes
  currentNode = root;
  for (let i = middle; i < length - 1; i += 1) {
    currentNode.right = new TreeNode(current2.next?.val);
    current2 = current2.next;
    currentNode = currentNode.right;
  }

  return root;
};

const l = new ListNode(-10);
l.next = new ListNode(-3);
l.next.next = new ListNode(0);
l.next.next.next = new ListNode(5);
l.next.next.next.next = new ListNode(9);

sortedListToBST(l);
