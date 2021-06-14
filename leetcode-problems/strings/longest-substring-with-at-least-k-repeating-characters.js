/**
 * @param {string} s
 * @param {number} k
 * @return {number}

c is only repeated once, b 3 times
{
a: 1
b:3
c: 1
}
 ababbc
  -----

{
a:2
b:3
}
ababbc
-----

{
b: 3
a:2
c:1
}

left: 0
ababbc
----

 l
 r
caaabb
----
 */
const longestSubstring = (s, k) => {
  const set = new Set();
  for (let i = 0; i < s.length; i += 1) {
    set.add(s[i]);
  }

  /*
    Time: O(maxUnique * length) or O(n) because the max unique, if you're only
    doing alphabetic characters, is 26.  Get the max size of a window with a
    current unique number of characters that appear at least k times. For
    example, you find the max window size of 1 character that appears at least
    k times. Then you find the max window size of 2 characters that appear at
    least k times, and so on until you get to your max total unique characters
    you have in your string, tracked by the size of the set you created
    earlier. Each time you find a window that satisfies your conditions of
    having your characters appear at least k times, you update your maxLength.
  */
  const maxUnique = set.size;
  let result = 0;

  // Increment currUnique when you have checked all possible windows of one
  // size, for example, once you've seen the max size of windows with only 1
  // character that repeats minimum of k times (like 'aaab' where k is 2 the max
  // size would be 3) then check all windows where there are 2 unique characters
  // (using the previous example of 'aaab', that window doesn't exist).
  for (let currUnique = 1; currUnique <= maxUnique; currUnique += 1) {
    let left = 0;
    let right = 0;
    let countAtLeastK = 0; // represents how many characters in your window occur at least k times
    let unique = 0; // tracks number of unique characters you have in your window

    // O(1) since max keys in map will be 26, it won't increase with the size of
    // your input
    const countMap = new Map();
    set.forEach((c) => countMap.set(c, 0));

    // This is the actual O(n) part! The for-loop above only has a max ending
    // condition of 26!
    while (right < s.length) {
      // increase the window size when the number of unique characters in your
      // window is less than or equal to the current unique you are tracking in
      // your loop
      if (unique <= currUnique) {
        const char = s[right];

        // increment unique if you haven't seen the char yet in your window
        if (countMap.get(char) === 0) unique += 1;
        countMap.set(char, countMap.get(char) + 1);
        if (countMap.get(char) === k) countAtLeastK += 1;

        right += 1;

        // Decrease your window size when you go over your limit of current
        // unique characters
      } else {
        const char = s[left];

        // If you had k occurences of the current character, decrement the
        // countAtLeastK since you're decreasing your window size
        if (countMap.get(char) === k) countAtLeastK -= 1;
        countMap.set(char, countMap.get(char) - 1);
        if (countMap.get(char) === 0) unique -= 1;

        left += 1;
      }

      // First check if you have the right number of unique characters in your
      // window that you're checking for. Interestingly, you can take out this
      // first condition and it still works.
      // Only record window size when every unique character in your string
      // appears at least K times. Remember we record when a character reaches k
      // times when we increase the window size.
      if (unique === currUnique && unique === countAtLeastK) {
        result = Math.max(right - left, result);
      }
    }
  }

  return result;
};

longestSubstring('caaabb', 2);
