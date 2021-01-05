/*

Given the head of a linked list, return the list after sorting it in ascending order.

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?



Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []


Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105


Leetcode Solution:
We can do this in a regular merge sort. There are some stardard tricks for Linked list:

Slow and fast pointers to find the middle of the linked list
user a dummy node other than the head to merge
So now we have a O(nlogn) solution. But wait a second, this is not O(1) space, it is O(logN) space. Is O(1) space even possible? Yes, it is called bottom-up merge-sort Check this video for more info. I need to go to sleep now. I will have a bottom-up merge-sort later.

If you like it, please upvote it. Thanks.

https://youtu.be/WVl2QSe4R14?list=PLRdD1c6QbAqJn0606RlOR6T3yUqFWKwmX
*/

const sortList = (head) => {

  // Merge sort solution:
  if (head === null || head.next === null) return head;

  let [slow, fast] = [head, head.next];
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHead = slow.next;
  slow.next = null;
  head = sortList(head);
  secondHead = sortList(secondHead);

  // Merge two lists
  let dummy = new ListNode();
  let prev = dummy;

  while (head !== null && secondHead !== null) {
    if (head.val < secondHead.val) {
      prev.next = head;
      head = head.next;
    } else {
      prev.next = secondHead;
      secondHead = secondHead.next;
    }
    prev = prev.next;
  }

  prev.next = head !== null ? head : secondHead;

  return dummy.next;
}

// Test
const ListNode = function (val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

ListNode.prototype.addToTail = function (val) {
  let currentNode = this;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = new ListNode(val);
  return this;
}

const list = new ListNode(3);
list.addToTail(4);
list.addToTail(1);
// list.addToTail(4);
// list.addToTail();

console.log(sortList(list));