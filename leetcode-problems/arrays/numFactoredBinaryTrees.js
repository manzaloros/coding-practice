const numFactoredBinaryTrees = (arr) => {
  arr.sort((b, c) => b - c);
  const memo = new Map();
  let result = 0;

  arr.forEach((num) => {
    const limit = Math.sqrt(num);
    let currentNumberOfCombinations = 1;

    for (let i = 0, factor1 = arr[i]; factor1 <= limit; factor1[i += 1]) {
      const factor2 = num / factor1;

      if (memo.has(factor2)) {
        currentNumberOfCombinations
        += (memo.get(factor1) * memo.get(factor2) * (factor1 === factor2 ? 1 : 2));
      }
      factor1 = arr[i + 1];
    }

    result += currentNumberOfCombinations;
    memo.set(num, currentNumberOfCombinations);
  });

  return result % ((10 ** 9) + 7);
};

numFactoredBinaryTrees([10, 2, 5, 4]);
