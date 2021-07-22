/*
You are given an array of logs. Each log is a space-delimited string of words,
where the first word is the identifier.

There are two types of logs:

Letter-logs: All words (except the identifier) consist of lowercase English
letters.  Digit-logs: All words (except the identifier) consist of digits.
Reorder these logs so that:

The letter-logs come before all digit-logs.  The letter-logs are sorted
lexicographically by their contents. If their contents are the same, then sort
them lexicographically by their identifiers.  The digit-logs maintain their
relative ordering.  Return the final order of the logs.

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3
art zero"] Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1
5 1","dig2 3 6"] Explanation: The letter-log contents are all different, so
their ordering is "art can", "art zero", "own kit dig".  The digit-logs have a
relative order of "dig1 8 1 5 1", "dig2 3 6".  Example 2:

Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act
zoo"] Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4
7"]

Constraints:

1 <= logs.length <= 100 3 <= logs[i].length <= 100 All the tokens of logs[i] are
separated by a single space.  logs[i] is guaranteed to have an identifier and at
least one word after the identifier.

Letter logs before digits
Letter logs sorted lexicographically. If same, sort by identifier.
Digit logs maintain ordering.

output: array of strings, rep. sorted logs

identifier is unique.

digits will remain relative ordering, so dig1 will come before dig2.

lexicographically means that they end up: lower char code : higher char code
*/

// O(n^2) time
// O(n^2) space
const reorderLogFiles = (logs) => {
  const digitLogs = [];
  const letterLogs = [];

  // O(n^2) time
  // O(n^2) space
  logs.forEach((log) => {
    // O(n) time
    const spaceIndex = log.indexOf(' ');
    // O(n) space
    const logText = log.slice(spaceIndex + 1);
    if (!isNaN(logText[0])) {
      digitLogs.push(log);
    } else {
      const logIdentifier = log.slice(0, spaceIndex + 1);
      letterLogs.push([logIdentifier, logText]);
    }
  });

  // O(n log n)
  // Sort lexicographically
  letterLogs.sort(([i, log1], [j, log2]) => {
    if (log1 === log2) return i < j ? -1 : 1;
    return log1 < log2 ? -1 : 1;
  });

  // O(n) time
  // O(n) space
  // log[0] is a STRING so the concat is actually on two strings
  // Results in ['identifier text', ...]
  const lettersMerged = letterLogs.map((log) => log[0].concat(log[1]));

  // O(n)
  return lettersMerged.concat(digitLogs);
};

// reorderLogFiles(['dig1 8 1 5 1', 'let1 art can', 'dig2 3 6', 'let2 own kit
// dig', 'let3 art zero']);
reorderLogFiles(['a1 9 2 3 1', 'g1 act car', 'zo4 4 7', 'ab1 off key dog', 'a8 act zoo']);
