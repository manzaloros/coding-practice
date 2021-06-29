const combine = (options, k) => {
  const result = [];
  if (k === 1) return options.map((option) => [option]);

  options.forEach((option, i) => {
    const smallerCombos = combine(options.slice(i + 1), k - 1);
    smallerCombos.forEach((smallerCombo) => {
      result.push([option].concat(smallerCombo));
    });
  });

  return result;
};

combine([1, 2, 3, 4], 3);
