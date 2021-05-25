/* Given an integer rowIndex, return the rowIndexth (0-indexed) row of the
Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above
it as shown:

Example 1:

Input: rowIndex = 3 Output: [1,3,3,1] Example 2:

Input: rowIndex = 0 Output: [1] Example 3:

Input: rowIndex = 1 Output: [1,1]

Constraints:

0 <= rowIndex <= 33

Follow up: Could you optimize your algorithm to use only O(rowIndex) extra
space? */

const getRow = (rowIndex) => {
  const memo = new Map();
  const getNum = (row, col) => {
    const rowCol = String(row) + String(col);

    if (memo.has(rowCol)) {
      return memo.get(rowCol);
    }

    let val;

    if (col === 0 || row === 0 || row === col) {
      val = 1;
    } else {
      val = getNum(row - 1, col - 1) + getNum(row - 1, col);
    }

    memo.set(rowCol, val);

    return val;
  };

  const result = [];
  for (let i = 0; i <= rowIndex; i += 1) {
    result.push(getNum(rowIndex, i));
  }

  return result;
};

console.log(getRow(29));
