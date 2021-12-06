/*
  every fish makes a new laternfish every 7 days.

  new laternfish needs 9 days for first production. (timer at 8, 0-based)
  newly created fish doesn't start timer of 8 until the next day.

  input: string rep. array of nums
  output: num rep. how many nums are in the array after x=80 days
*/

const getTotalLanternfish = (input, numDays = 80) => {
  input = input.split(',').map((el) => +el);

  Array(numDays).fill().forEach((day) => {
    const newFish = [];

    input.forEach((timeUntilSpawn, i) => {
      if (timeUntilSpawn === 0) {
        input[i] = 6;
        newFish.push(8);
      } else input[i] -= 1;
    });

    input = input.concat(newFish);
  });

  return input.length;
};

// Time: O(days)
// Space: O(9)
const getTotalLanternfishBetter = (input, numDays) => {
  input = input.split(',')
    .map((el) => +el)
    .reduce((fishTable, currFishDaysLeft) => {
      fishTable[currFishDaysLeft] += 1;

      return fishTable;
    }, Array(9).fill(0));

  let newIncomingFish = 0;

  Array(numDays)
    .fill(0)
    .map((el, i) => i)
    .forEach((day) => {
      input.forEach((daysLeft, i) => {
        if (i < 8) {
          if (i === 0) newIncomingFish = daysLeft;

          input[i] = input[i + 1];
        } else input[i] = newIncomingFish;
      });

      input[6] += newIncomingFish;
    });

  return input.reduce((a, b) => a + b);
};

// getTotalLanternfishBetter('3,4,3,1,2', 18);
// getTotalLanternfishBetter('3,4,3,1,2', 80);
// getTotalLanternfish('6', 256);

const puzzleInput = '1,1,1,3,3,2,1,1,1,1,1,4,4,1,4,1,4,1,1,4,1,1,1,3,3,2,3,1,2,1,1,1,1,1,1,1,3,4,1,1,4,3,1,2,3,1,1,1,5,2,1,1,1,1,2,1,2,5,2,2,1,1,1,3,1,1,1,4,1,1,1,1,1,3,3,2,1,1,3,1,4,1,2,1,5,1,4,2,1,1,5,1,1,1,1,4,3,1,3,2,1,4,1,1,2,1,4,4,5,1,3,1,1,1,1,2,1,4,4,1,1,1,3,1,5,1,1,1,1,1,3,2,5,1,5,4,1,4,1,3,5,1,2,5,4,3,3,2,4,1,5,1,1,2,4,1,1,1,1,2,4,1,2,5,1,4,1,4,2,5,4,1,1,2,2,4,1,5,1,4,3,3,2,3,1,2,3,1,4,1,1,1,3,5,1,1,1,3,5,1,1,4,1,4,4,1,3,1,1,1,2,3,3,2,5,1,2,1,1,2,2,1,3,4,1,3,5,1,3,4,3,5,1,1,5,1,3,3,2,1,5,1,1,3,1,1,3,1,2,1,3,2,5,1,3,1,1,3,5,1,1,1,1,2,1,2,4,4,4,2,2,3,1,5,1,2,1,3,3,3,4,1,1,5,1,3,2,4,1,5,5,1,4,4,1,4,4,1,1,2';
getTotalLanternfishBetter(puzzleInput, 256);
