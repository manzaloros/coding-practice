export default class ListNode {
  constructor(val, next) {
    this.val = val || 0;
    this.next = next || null;
  }

  static insert(root, num) {
    const temp = new ListNode(num);
    let pointer;

    if (!root) {
      root = temp;
    } else {
      pointer = root;
      while (pointer.next) pointer = pointer.next;

      pointer.next = temp;
    }

    return root;
  }

  static arrayToList(arr) {
    let root = null;

    // arr.forEach((num) => ListNode.insert(root, num));
    for (let i = 0; i < arr.length; i += 1) {
      root = ListNode.insert(root, arr[i]);
    }

    return root;
  }
};
