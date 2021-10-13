Input: matrix =
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
]

memo:
0,0: 1
0,1:1
1,1:2
2,0:
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
// can't backtrack. Up down left right. Return the length.
// Positive and negative. Valid input. Matrix length could be 0. Rectangle valid.

// longest path for row 0 col 0 is 1.

/*
  valid path: store row/col, store length so far + 1

  every time see new cell, update global maximum
          r. c
  stack: [1,1, 1] -> [1,2, 2]

  set:{
    `2,1`
  }
  dfs(2,1,1)
    dfs(2,0,2)
      dfs(1,0,3)
        dfs(0,0,4)
    dfs(1,1,2)
      dfs(1,2,3)

        i
    [
    [1(3),2(2),3(1)]
    [3(1),1(3),0(4)]
    ]



*/

memo = {"0,0": 1, ...}

const longestIncreasing = (matrix) => {
  let longest = 0;

  // O(m * n) without memo
  //
  const dfs = (row, col, lengthSoFar, seen) => {
    const key = makeKey(row, col);
    if (!seen.has(key)) {
      const curr = matrix[row][col];

      if (memo.has(key)) {
        longest = Math.max(lengthSoFar + memo.get(key), longest);
        return;
      }

      longest = Math.max(longest, lengthSoFar);

      memo.set(key, lengthSoFar);

      seen.add(key);

      // valid cells
      getNeighbors(row, col).forEach((nRow,nCol) => {
        const nKey = makeKey(nRow, nCol);

        if (matrix[nRow][nCol] > curr) dfs(nRow, nCol, lengthSoFar + 1, seen)
      })

      seen.delete(key)
    }
  }

  // O(n^2) without memo
  // O((rows * cols)) time with memo
  matrix.forEach((row, rowIndex) => {
    row.forEach((el, colIndex) => {
      dfs(rowIndex, colIndex, 1, new Set())
    })
  })

  return longest;
}



var longestIncreasingPath = function(matrix) {
  let len = 0;

  let longest = new Array(matrix.length).fill(0).map(
    ()=> new Array(matrix[0].length).fill(-1));

  for (let row=0; row<matrix.length; row++) {
    for (let col=0; col<matrix[0].length; col++) {
      len = Math.max(len, findLength(row, col, -Infinity));
    }
  }

  return len;

  function findLength(row, col, min) {
    if (row<0 || row>=matrix.length || col<0 || col>=matrix[0].length) return 0;
    let val = matrix[row][col];
    if (val<=min) return 0;

    if (longest[row][col] !== -1) return longest[row][col];

    let length = 1 + Math.max(
      findLength(row-1, col, val),
      findLength(row+1, col, val),
      findLength(row, col-1, val),
      findLength(row, col+1, val)
    )

    longest[row][col] = length;
    return length;
  }
};


39 done with question
38 clarifying questions
36 do a search from every single cell, recording longest path from there, record global max
31 example of approach
30 DFS: O(N) where N is cells in matrix
29 iterate over array and invoke DFS on each cell
29 start coding
23 most logic complete, getting into finer details
21 example
20 to include length in key?
18 O(N) for time and space
17 what about other paths
15 which function has O(N) time and space
14 both functions are O(N), so overall time complexity is O(N**2)
14 is anything redundant?
8 memoize
6 returning val from DFS when doesn't usually return val
4 fixing the return bug
2 reduces time complexity to O(N)
1 what info does seen set give?




