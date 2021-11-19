// time: O(n) space: O(1)
const generateByProbability = (nums, probabilities) => {
  let rand = Math.floor(Math.random() * 100);

  for (let i = 0; i < nums.length; i += 1) {
    rand -= (probabilities[i] * 100);

    if (rand <= 0) return nums[i];
  }
};

const arr = [1, 2, 3, 4];
const probs = [0.1, 0.5, 0.2, 0.2];

generateByProbability(arr, probs);
generateByProbability(arr, probs);
generateByProbability(arr, probs);
