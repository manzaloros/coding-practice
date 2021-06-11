/* Given the heads of two singly linked-lists headA and headB, return the node
at which the two lists intersect. If the two linked lists have no intersection
at all, return null.

For example, the following two linked lists begin to intersect at node c1:

It is guaranteed that there are no cycles anywhere in the entire linked
structure.

Note that the linked lists must retain their original structure after the
function returns.

Example 1:

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2,
skipB = 3 Output: Intersected at '8' Explanation: The intersected node's value
is 8 (note that this must not be 0 if the two lists intersect).  From the head
of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5].
There are 2 nodes before the intersected node in A; There are 3 nodes before the
intersected node in B.  Example 2:

Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB
= 1 Output: Intersected at '2' Explanation: The intersected node's value is 2
(note that this must not be 0 if the two lists intersect).  From the head of A,
it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3
nodes before the intersected node in A; There are 1 node before the intersected
node in B.  Example 3:

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection Explanation: From the head of A, it reads as [2,6,4].
From the head of B, it reads as [1,5]. Since the two lists do not intersect,
intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

Constraints:

The number of nodes of listA is in the m.  The number of nodes of listB is in
the n.  0 <= m, n <= 3 * 104 1 <= Node.val <= 105 0 <= skipA <= m 0 <= skipB <=
n intersectVal is 0 if listA and listB do not intersect.  intersectVal ==
listA[skipA + 1] == listB[skipB + 1] if listA and listB intersect.

Follow up: Could you write a solution that runs in O(n) time and use only O(1)
memory? */

/*
  Time: O(n + m), worst case the intersection is at the end of the longer list
 */
const getIntersectionNode = (headA, headB) => {
  const getLength = (node) => {
    let current = node;
    let length = 0;

    while (current) {
      length += 1;
      current = current.next;
    }

    return length;
  };

  const lengthA = getLength(headA);
  const lengthB = getLength(headB);
  // get length of both

  const iterate = (node, amount) => {
    let current = node;
    let i = 0;

    while (i < amount) {
      current = current.next;
      i += 1;
    }

    return current;
  };

  // get difference and advance the longer pointer that difference
  const difference = lengthA > lengthB ? lengthA - lengthB : lengthB - lengthA;
  if (lengthA > lengthB) {
    headA = iterate(headA, difference);
  } else {
    headB = iterate(headB, difference);
  }

  // iterate lists, if you reach end without intersection return null,
  // otherwhise return node
  let currA = headA;
  let currB = headB;

  while (currA || currB) {
    if (currA === currB) return currA;
    currA = currA.next;
    currB = currB.next;
  }

  return null;
};

// Shorter code :
/*
 No matter how long / short / big the differences between the lists, they
 eventually end in null, so if you cycle through both lists and return where
 they are the same, it will be their intersection point or null

 You're basically measuring the longer list and setting it's pointer to the
 shorter list when you can, thus eventually starting them from the same length

 a a1->a2->c1->c2->c3->b1->b2->b3->c1
   a-------c-----------b-----------i
 b b1->b2->b3->c1->c2->c3->a1->a2->c1
   b-----------c-----------a-------i

*/
const getIntersectionNodeShorter = (headA, headB) => {
  let currA = headA;
  let currB = headB;

  while (currA !== currB) {
    currA = !currA ? headB : currA.next;
    currB = !currB ? headA : currB.next;
  }

  return currA;
};
