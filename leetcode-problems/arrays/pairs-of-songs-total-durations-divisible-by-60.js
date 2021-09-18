const numPairsDivisibleBy60 = (times) => {
  const map = new Map();

  let count = 0;
  times.forEach((time) => {
    // If curr time remainder with 60 is 0, just return whatever you have mapped
    // to 0 in your map
    if (time % 60 === 0) {
      count += map.get(0) || 0;
    } else {
      // Otherwise, increment count by the number of times you've seen the
      // compliment of the current time
      count += map.get(60 - (time % 60)) || 0;
    }

    // increment map count of self by 1
    map.set(time % 60, (map.get(time % 60) || 0) + 1);
  });

  return count;
};

// numPairsDivisibleBy60([60, 60, 60]);
numPairsDivisibleBy60([30, 20, 150, 100, 40]);

/*
  Algorithm:
  make compliment map
  for each num
    if num % 60 is 0
      add freq of 0 to count
    otherwise,
      add compliment (60 - (num % 60)) freq to count
    increment freq of num % 60

  return pairs

*/
