/* All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.



Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Example 2:

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]


Constraints:

0 <= s.length <= 105
s[i] is 'A', 'C', 'G', or 'T'.
 */

const findRepeatedDnaSequences = (s) => {
  // if (s.length <= 10) return s;
  const sequences = new Set();
  const result = [];
  const length = s.length;
  for (let i = 0; i < length - 9; i += 1) {
    const currentSequence = s.slice(i, i + 10);
    if (sequences.has(currentSequence)) {
      result.push(currentSequence);
    } else {
      sequences.add(currentSequence);
    }
  }
  const answer = new Set(result);
  return Array.from(answer);
}

// findRepeatedDnaSequences("AAAAAAAAAAAAA")
findRepeatedDnaSequences("AAAAAAAAAAA");
// findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")
// findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")