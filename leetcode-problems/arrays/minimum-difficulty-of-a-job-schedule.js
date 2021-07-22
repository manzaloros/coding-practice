/* You want to schedule a list of jobs in d days. Jobs are dependent (i.e To
work on the i-th job, you have to finish all the jobs j where 0 <= j < i).

You have to finish at least one task every day. The difficulty of a job schedule
is the sum of difficulties of each day of the d days. The difficulty of a day is
the maximum difficulty of a job done in that day.

Given an array of integers jobDifficulty and an integer d. The difficulty of the
i-th job is jobDifficulty[i].

Return the minimum difficulty of a job schedule. If you cannot find a schedule
for the jobs return -1.

Example 1:

Input: jobDifficulty = [6,5,4,3,2,1], d = 2 Output: 7 Explanation: First day you
can finish the first 5 jobs, total difficulty = 6.  Second day you can finish
the last job, total difficulty = 1.  The difficulty of the schedule = 6 + 1 = 7
Example 2:

Input: jobDifficulty = [9,9,9], d = 4 Output: -1 Explanation: If you finish a
job per day you will still have a free day. you cannot find a schedule for the
given jobs.  Example 3:

Input: jobDifficulty = [1,1,1], d = 3 Output: 3 Explanation: The schedule is one
job per day. total difficulty will be 3.  Example 4:

Input: jobDifficulty = [7,1,7,1,7,1], d = 3 Output: 15 Example 5:

Input: jobDifficulty = [11,111,22,222,33,333,44,444], d = 6 Output: 843

Constraints:

1 <= jobDifficulty.length <= 300 0 <= jobDifficulty[i] <= 1000 1 <= d <= 10
 */

/*
  input: array of ints representing jobs and their difficulties
  output: int rep.minimum difficulty of the jobschedule OR -1 if you can't find
  a schedule for the jobs

  you can't have a day with no jobs

  difficulty of a day is determined by the most difficult job on that day

  You need to return the min difficulty after arranging jobs into days (scheduling)
*/

const minDifficulty = (jobDifficulty, d) => {
  const { length } = jobDifficulty;
  const memo = new Map();

  const backtrack = (index, daysLeft) => {
    if (index === length && daysLeft === 0) return 0;
    // If you still have days left you can't partition the jobs the way you're
    // trying to.
    if (index === length || daysLeft === 0) return -1;

    const key = `${index}:${daysLeft}`;
    if (memo.has(key)) return memo.get(key);

    let currentMax = jobDifficulty[index];
    let minimum = Infinity;

    for (let i = index; i < length; i += 1) {
      // Update the max of this subarray if current is bigger
      const difficulty = jobDifficulty[i];
      currentMax = Math.max(difficulty, currentMax);

      // Make up to i a subarray
      const minimumOfNextDays = backtrack(i + 1, daysLeft - 1);

      if (minimumOfNextDays !== -1) {
        minimum = Math.min(minimum, minimumOfNextDays + currentMax);
      }
    }

    minimum = minimum === Infinity ? -1 : minimum;
    memo.set(key, minimum === Infinity ? -1 : minimum);

    return minimum;
  };

  return backtrack(0, d);
};

// minDifficulty([9, 9, 9], 4);
// minDifficulty([1, 1, 1], 4);
// minDifficulty([6, 5, 4, 3, 2, 1], 2);
// minDifficulty([7, 1, 7, 1, 7, 1], 3);
minDifficulty([11, 111, 22, 222, 33, 333, 44, 444], 6);
