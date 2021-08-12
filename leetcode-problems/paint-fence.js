// If you're painting the 2nd post, how many ways can you paint it to make it a
// different color than the first post? It is colors (k) - 1.
/*
good discussion:
https://leetcode.com/problems/paint-fence/discuss/178010/The-only-solution-you-need-to-read
posts: 3 colors: 2 3 different ways to paint the first post. There are (3 - 1) *
3 different ways to paint the second post. You get this from: If you had 3
colors and 2 posts, you would have 3 * 2 ways of how to paint the second post
different than the first.

[ 3 ] [ 2 ways to be different ]

Logical leap: To figure out how many ways to paint the current post the same
color, you have to consider that you can't paint 3 the same color. So to get
that, you have to look at the number of ways you can paint the previous post a
DIFFERENT color, which gives you the number of ways to paint the current post
the same color.  [ 3  ][ 9 ] [ 6 ]

*/

// Non memoized: time O(2^n)
// memoized: time O(n) because you ensure you only go down each branch of the
// recursion tree once.
const numWays = (n, k) => {
  const memo = new Map();

  const backtrack = (index) => {
    if (index === 1) return k;
    if (index === 2) return k * k;

    if (memo.has(index)) return memo.get(index);

    // If k is greater than 2 you can't paint the next post the same color as
    // the previous post
    const paintDifferent = backtrack(index - 1);
    const paintSame = backtrack(index - 2);

    const numberOfWays = (k - 1) * (paintDifferent + paintSame);
    memo.set(index, numberOfWays);

    return numberOfWays;
  };

  return backtrack(n);
};

// num;Ways(3, 2;)
numWays(3, 1);

// Time: O(n)
// Space: O(n)
const numWaysBU = (n, k) => {
  if (n === 0) return 0;

  if (n === 1) return k;

  if (n === 2) return k * k;

  const table = [0, k, k * k];

  for (let i = 3; i <= n; i += 1) {
    table[i] = (k - 1) * (table[i - 1] + table[i - 2]);
  }

  return table[n];
};
