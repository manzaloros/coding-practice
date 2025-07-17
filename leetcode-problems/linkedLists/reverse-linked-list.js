/* Given the head of a singly linked list, reverse the list, and return the
reversed list.

Example 1:

Input: head = [1,2,3,4,5] Output: [5,4,3,2,1] Example 2:

Input: head = [1,2] Output: [2,1] Example 3:

Input: head = [] Output: []

Constraints:

The number of nodes in the list is the range [0, 5000].  -5000 <= Node.val <=
5000

Follow up: A linked list can be reversed either iteratively or recursively.
Could you implement both? */

const reverseListRecursive = (head) => {
	if (!head || !head.next) return head;

	// Previous is always the last node!
	const previous = reverseList(head.next);

	head.next.next = head;
	// Nodes always get their next set to null until it is reassigned in the next
	// recursive call (or not if it's the new tail node)
	head.next = null;

	// Previous is always the very last node (which becomes the new first node!)
	return previous;
};

const reverseListIterative = (head) => {
	let prev = null;
	let curr = head;

	while (curr) {
		const { next } = curr;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	return prev;
};
