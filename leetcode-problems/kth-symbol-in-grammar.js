/* K-th Symbol in Grammar We build a table of n rows (1-indexed). We start by
writing 0 in the 1st row. Now in every subsequent row, we look at the previous
row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is
0110.  Given two integer n and k, return the kth (1-indexed) symbol in the nth
row of a table of n rows.

Example 1:

Input: n = 1, k = 1 Output: 0 Explanation: row 1: 0 Example 2:

Input: n = 2, k = 1 Output: 0 Explanation: row 1: 0 row 2: 01 Example 3:

Input: n = 2, k = 2 Output: 1 Explanation: row 1: 0 row 2: 01 Example 4:

Input: n = 3, k = 1 Output: 0 Explanation: row 1: 0 row 2: 01 row 3: 0110

Constraints:

1 <= n <= 30 1 <= k <= 2n - 1 */

// DFS of a tree
// O(n)
// Space: O(n) callstack
// If you're odd and parent is a 0, you're a 0. If you're even, and your parent
// is a 0, you're a 1
const kthGrammar = (n, k) => {
  // Base case because first row is always a 0
  if (n === 1) return 0;

  let parentNode;
  let currentNode;

  // If k is even, find the parent node's value by dividing k by 2
  if (k % 2 === 0) {
    // if the parent node is a 0, return 1
    parentNode = kthGrammar(n - 1, k / 2);

    if (parentNode === 0) {
      currentNode = 1;
    } else {
      currentNode = 0;
    }
  } else {
    // if the parent node is a 0 return a 0. (k + 1) because k will end up
    // having the same parent as k + 1
    parentNode = kthGrammar(n - 1, (k + 1) / 2);

    if (parentNode === 0) {
      currentNode = 0;
    } else {
      currentNode = 1;
    }
  }

  return currentNode;
};
