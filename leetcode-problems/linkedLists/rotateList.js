/* Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example:
Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL

*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

ListNode.prototype.addToTail = function (val) {
  let node = new ListNode(val);
  let current = this;
  while (current.next !== null) {
    current = current.next;
  }
  current.next = node;
}

// const rotateRight = (head, k) => {
//   if (head === null || k === 0) return head;

//   let current1 = head;
//   let current2 = head;

//   let size = 0;

//   // Finding size of linked list
//   while (current1 !== null) {
//     current1 = current1.next;
//     size += 1;
//   }

//   // Return the list unaltered if the size is 1 or if rotating the list will have no effect
//   if (size === 1 || k % size === 0) return head;

//   if (size < k) k = k % size;

//   let nDiffK = size - k;

//   // Set current1 back to the head
//   current1 = head;
//   let c = 0;

//   let previous = head;

//   while (c < nDiffK && current1 !== null) {
//     previous = current1;
//     current1 = current1.next;
//     c += 1;
//   }

//   previous.next = null;
//   c = 0;

//   current2 = current1;
//   while (c < k - 1) {
//     current1 = current1.next;
//     c += 1;
//   }

//   current1.next = head;
//   head = current2;

//   return head;
// }

// Matt W solution:
const rotateRight = (head, k) => {
  if (!head || !head.next) return head;
  let [count, oldTail] = [1, head];
  while (oldTail.next) {
    count += 1;
    oldTail = oldTail.next;
  }
  oldTail.next = head;
  let newTail = head;
  for (let i = 0; i < (count - (k % count)) - 1; i += 1) {
    newTail = newTail.next;
  }
  let newHead = newTail.next;
  newTail.next = null;
  return newHead;
}


// Test:
let list = new ListNode(1);
list.addToTail(2);
list.addToTail(3);
console.log(rotateRight(list, 2));
