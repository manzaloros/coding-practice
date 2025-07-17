/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

const reverse = (node) => {
	let curr = node;
	let prev = null;

	while (curr) {
		const { next } = curr;
		curr.next = prev;

		prev = curr;
		curr = next;
	}

	return prev;
};

const reorderList = (head) => {
	if (!head.next) return head;

	const sentinel = new ListNode();
	sentinel.next = head;

	let curr = head;

	// O(n^2) because you need to reverse the list for every iteration
	while (curr.next.next) {
		const { next } = curr;

		const reversed = reverse(next);

		curr.next = reversed;
		curr = curr.next;
	}

	return sentinel.next;
};

const findMid = (head) => {
	let [fast, slow] = [head, head];
	// let prev = null;

	while (fast?.next) {
		fast = fast.next.next;
		// prev = slow;
		slow = slow.next;
	}
	// prev.next = null;

	return slow;
};

const merge = (l1, l2) => {
	const sentinel = l1;

	while (l2.next) {
		let { next: temp } = l1;
		l1.next = l2;
		l1 = temp;

		temp = l2.next;
		l2.next = l1;
		l2 = temp;
	}

	return sentinel;
};

const reorderListOptimal = (head) => {
	const mid = findMid(head);

	const reversed = reverse(mid);

	return merge(head, reversed);
};

const list = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next: {
				val: 4,
				next:
					// { val: 5, next: null },
					null,
			},
		},
	},
};
reorderListOptimal(list);

// Less optimal, uses an extra array to store the list. Not done in place
const reorderListNotInPlace = (head) => {
    if (!head || !head.next) return;

    const list = [];
    let curr = head;

    // Step 1: Store all nodes in an array
    while (curr) {
        list.push(curr);
        curr = curr.next;
    }

    // Step 2: Reorder the array into the required pattern
    const reordered = [];
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        if (left === right) {
            reordered.push(list[left]);
        } else {
            reordered.push(list[left]);
            reordered.push(list[right]);
        }
        left++;
        right--;
    }

    // Step 3: Reconnect the nodes
    for (let i = 0; i < reordered.length - 1; i++) {
        reordered[i].next = reordered[i + 1];
    }
    reordered[reordered.length - 1].next = null;
};