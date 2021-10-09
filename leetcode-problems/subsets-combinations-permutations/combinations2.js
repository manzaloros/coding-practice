// variant of subsets algo
// includes repetitions
// Time: O(n!)/(n-k!k!) ... how am I supposed to remember this?
// Space: O(n!)/(n-k!k!) ... how am I supposed to remember this?
// Return all possible combinations of k numbers 1-n.
let combine = function (n, k) {
  const result = [];
  const temp = [];

  const backtrack = (index) => {
    if (temp.length === k) result.push([...temp]);

    for (let i = index; i <= n; i += 1) {
      temp.push(i);
      backtrack(i + 1);
      temp.pop();
    }
  };

  backtrack(1);

  return result;
};

let combineUsingCombinationsAlgo = (
  n,
  comboLength,
  options = Array(n).fill(0).map((e, index) => index + 1),
) => {
  if (comboLength === 1) return options.map((option) => [option]);

  const combos = [];

  options.forEach((currOption, optionIndex) => {
    const smallerCombos = combine(n, comboLength - 1, options.slice(optionIndex + 1));

    smallerCombos.forEach((smallerCombo) => combos.push([currOption].concat(smallerCombo)));
  });

  return combos;
};
