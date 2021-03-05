const getIntersectionNode = (headA, headB) => {
  let node1 = headA;
  let node2 = headB;
  let [length1, length2] = [0, 0];
  while (node1) {
    length1 += 1;
    node1 = node1.next;
  }
  while (node2) {
    length2 += 1;
    node2 = node2.next;
  }
  let longerList = length1 >= length2 ? headA : headB;
  let shorterList = longerList === headA ? headB : headA;
  const difference = Math.abs(length1 - length2);
  for (let i = 0; i < difference; i += 1) {
    longerList = longerList.next;
  }
  while (longerList) {
    if (longerList === shorterList) return longerList;
    longerList = longerList.next;
    shorterList = shorterList.next;
  }
  return null;
};

const getIntersectionNode = (headA, headB) => {
  let [tempA, tempB] = [headA, headB];
  while (tempA !== tempB) {
    tempA = tempA === null ? headB : tempA.next;
    tempB = tempB === null ? headA : tempB.next;
  }
  return tempA;
}