/*
  result length is 3^num.
  Time: O(3^n);
  space: O(num), recursion tree will reach depth of num before base case
*/

const rockPaperScissors = (num) => {
  const result = [];
  const choices = ['rock', 'paper', 'scissors'];

  const recurse = (current = []) => {
    if (current.length === num) {
      result.push(current);
      return;
    }

    choices.forEach((choice) => {
      // can't do, because you have to make a new array:
      // current.push(choice);
      // recurse(current)

      const next = current.concat([choice]);
      recurse(next);
    });
  };

  recurse();

  return result;
};

const rockPaperScissorsWithoutWrapper = (num, current = [], res = [], choices = ['rock', 'paper', 'scissors']) => {
  if (current.length === num) {
    // can't do:
    // return current;
    res.push(current);
    return res;
  }

  choices.forEach((choice) => {
    const nextPlay = current.concat(choice);
    const completePlay = rockPaperScissors(num, nextPlay, res);
    res.concat(completePlay);
  });

  return res;
};

console.log(rockPaperScissors(2));
