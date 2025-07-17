/**
 * Given a string s, find the length of the longest substring without duplicate
   characters.
 * 
 * Example:
 * 
 * Input: s = "abcabcbb" Output: 3 Explanation: The answer is "abc", with the
   length of 3.
 */
const lengthOfLongestSubstring = (s) => {
    const set = new Set()

    let max = 0;
    let [start, end] = [0,0]

    while (end < s.length) {
        const endChar = s[end];
        const startChar = s[start]
        if (set.has(endChar)) {
            start += 1;
            set.delete(startChar)
        } else {
            set.add(endChar);
            max = Math.max(set.size, max)
            end += 1
        }
    }

    return max;
};
