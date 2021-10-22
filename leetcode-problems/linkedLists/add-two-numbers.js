const ListNode = require('../LinkedList');

let addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let sentinel = result;
  /*
  Don't need to do this: Just start with your result being a null node becausew
  you will process it's next value in the loop. If you don't enter the loop, you
  will end up returning a null node, which works.

  result.next = new ListNode();
  result = result.next;
  */

  let carry = 0;
  let [list1, list2] = [l1, l2];

  while (list1 || list2) {
    const val1 = list1 ? list1.val : 0;
    const val2 = list2 ? list2.val : 0;

    const sum = val1 + val2 + carry;
    carry = sum > 9 ? Math.floor(sum / 10) : 0;
    const digit = sum > 9 ? sum % 10 : sum;

    /*
    Make sure to process the NEXT val, not the current val. Then, set curr to next
    result.val = digit;
    result.next = new ListNode();
    result = result.next
    */
    result.next = new ListNode(digit);
    result = result.next;

    list1 = list1 ? list1.next : list1;
    list2 = list2 ? list2.next : list2;
  }

  if (carry > 0) result.next = new ListNode(carry);

  return sentinel.next;
};

let addTwoNumbersLCSolution = function (l1, l2) {
  const dummyHead = new ListNode();
  let [p, q, curr] = [l1, l2, dummyHead];

  let carry = 0;

  while (p || q) {
    let val1 = p ? p.val : 0;
    let val2 = q ? q.val : 0;

    const sum = carry + val1 + val2;
    carry = Math.floor(sum / 10);
    const digit = (sum % 10);

    curr.next = new ListNode(digit);
    curr = curr.next;

    if (p) p = p.next;
    if (q) q = q.next;
  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummyHead.next;
};

addTwoNumbers();
