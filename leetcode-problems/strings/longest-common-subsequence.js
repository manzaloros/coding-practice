// No memo Time: O(2^(length of longer word))
// Space: O(length of shorter word) for callstack

// Memo Time: O(length of string 1 * length of string2 ^ 2). Why string2 ^ 2?
// Because of the indexOf, which is O(n), which you have to do possibly do for
// every recursive call. Without the indexOf, time would be O(length1 *
// length2), since you have 2 parameters for the recursive calls, and length1
// possibilities * length2 possibilities

// Memo Space: O(length of string1 * length of string2)
const longestCommonSubsequence = (text1, text2) => {
  const memo = new Map();

  const backtrack = (firstIndex, secondIndex) => {
    // base case
    // If you've gone past the last character of either string, return 0 because
    // you didn't find a match
    if (firstIndex >= text1.length || secondIndex >= text2.length) {
      return 0;
    }

    const key = `${firstIndex}:${secondIndex}`;
    if (memo.has(key)) return memo.get(key);

    // enumerate decisions
    let withLetter = 0;
    let without = 0;
    without = backtrack(firstIndex + 1, secondIndex);

    // O(n)
    const firstOccurence = text2.indexOf(text1[firstIndex], secondIndex);
    if (firstOccurence !== -1) {
      // Advance both pointers because you found a matching letter in both strings
      withLetter = 1 + backtrack(firstIndex + 1, firstOccurence + 1);
    }

    // return winner
    const longest = Math.max(withLetter, without);
    memo.set(key, longest);

    return longest;
  };

  return backtrack(0, 0);
};

longestCommonSubsequence('ace', 'abcde');
