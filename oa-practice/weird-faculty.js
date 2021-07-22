/*
  i: array of nums rep. answers to question
  o: num rep. min # of questions to answer to have your result be more than a friends

  1 means correct, 0 means wrong
*/

// Time O(num of verdicts)
// Space O(1)
const exam = (verdicts) => {
  let theirScore = 0;
  let yourScore = 0;

  // get their score if they take the whole test
  verdicts.forEach((verdict) => {
    if (verdict === 1) {
      theirScore += 1;
    } else {
      theirScore -= 1;
    }
  });

  // find the point at which your score is more than theirs
  for (let i = 0; i < verdicts.length; i += 1) {
    const verdict = verdicts[i];
    if (yourScore > theirScore) return i;

    if (verdict === 1) {
      yourScore += 1;
      theirScore -= 1;
    } else {
      yourScore -= 1;
      theirScore += 1;
    }
  }

  // return the length of array if you have to take the whole test?
  return verdicts.length;
};

// exam([1, 0, 0, 1, 0]);
// exam([1, 0, 0, 1, 1]);
// exam([1, 1, 1, 0, 1]);
exam([0, 0, 0, 1, 1, 1, 1]);
