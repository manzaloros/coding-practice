const getNumberOfOptions = (jeansPrices, shoesPrices, skirtsPrices, topsPrices, dollars) => {
  const shoesJeansSumOccurrences = new Map();

  /*
    For each jeans / shoes combo, find their sum and record how many times you
    have seen that current sum.
  */
  jeansPrices.forEach((jeans) => {
    shoesPrices.forEach((shoes) => {
      const currentSum = jeans + shoes;

      shoesJeansSumOccurrences.set(currentSum,
        (shoesJeansSumOccurrences.get(currentSum) || 0) + 1);
    });
  });

  let numberOfPossibilities = 0;

  /*
    For each combo of skirt and top, find how much money you have left.

    With that amount, check every shoes + jeans combo sum. If your shoes + jeans
    is less than or equal to the amount of money you have left, you can buy that
    skirt, top, jeans and shoes together. Add the number of times you have seen
    that shoes jeans sum to your possibilities so that you account for seeing
    the same sum for multiple combinations of shoes and jeans.
  */
  skirtsPrices.forEach((skirt) => {
    topsPrices.forEach((top) => {
      const dollarsLeftAfterSkirtTop = dollars - (skirt + top);

      shoesJeansSumOccurrences.forEach((occurrence, shoeJeansComboSum) => {
        if (shoeJeansComboSum <= dollarsLeftAfterSkirtTop) numberOfPossibilities += occurrence;
      });
    });
  });

  return numberOfPossibilities;
};
