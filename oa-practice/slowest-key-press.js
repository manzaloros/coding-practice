/*
i: matrix of nums, [char in ascii 0-25, num rep. time key is pressed]
o: string rep. char that took longest to press

letter.charCodeAt(0) - 97 gives you the ascii.

to get letter from char code: String.fromCharCode(code + 97)
*/

const slowestKey = (keyTimes) => {
  /*
    init times array
    init max

    foreach keyTime
      only update if number there is less that current keytime
      update array at i = key, val = keytime - prev keytime or 0

    return max
  */

  let maxTime = [0, 0];

  keyTimes.forEach(([key, time], index) => {
    if (index === 0) {
      maxTime[0] = key;
      maxTime[1] = time;
    } else if (time - keyTimes[index - 1][1] > maxTime[0]) {
      maxTime[0] = key;
      maxTime[1] = time - keyTimes[index - 1][1];
    }
  });

  return String.fromCharCode(97 + maxTime[0]);
};

// slowestKey([[0, 2], [1, 3], [0, 7]]);
slowestKey([[0, 1], [0, 3], [4, 5], [5, 6], [4, 10]]);
