/*
  left: min sweetness (problem said it would be at least 1)
  right: sum of array / k + 1 pieces. It's if the array had k + 1 equal pieces.
  So, I guess you can't get any bigger than that for your own piece: finding the
  maximum of the minumum piece.
*/
let maximizeSweetness = function (sweetness, k) {
  let [minSliceSize, maxSliceSize] = [1, Math.floor(sweetness.reduce((a, b) => a + b) / (k + 1))];

  while (minSliceSize < maxSliceSize) {
    const sizeOfSlice = Math.floor((minSliceSize + maxSliceSize + 1) / 2);
    let [currCandyBar, numCuts] = [0, 0];

    sweetness.forEach((slice) => {
      currCandyBar += slice;

      if (currCandyBar >= sizeOfSlice) {
        numCuts += 1;
        currCandyBar = 0;
      }
    });

    if (numCuts > k) minSliceSize = sizeOfSlice;
    else maxSliceSize = sizeOfSlice - 1;
  }

  return maxSliceSize;
};

maximizeSweetness([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
