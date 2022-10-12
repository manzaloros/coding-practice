/*

*/

const findHighestYPosition = (input) => {
  let maxYPosition = -Infinity;
  let minY = -93;
  let maxY = -67;

  const calculateY = (currentYVelocity) => {
    let currentYPosition = 0;
    let localMax = -Infinity;

    while (currentYPosition > maxY && currentYPosition >= minY && currentYPosition < Number.MAX_SAFE_INTEGER) {
      currentYPosition += currentYVelocity;
      localMax = Math.max(localMax, currentYPosition);
      currentYVelocity -= 1;
    }

    return [currentYPosition >= minY && currentYPosition <= maxY, localMax];
  };

  let [lo, hi] = [-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];

  while (lo < hi) {
    const mid = Math.floor((hi - lo) / 2) + lo;

    const [isPossible, currMaxY] = calculateY(mid);
    if (isPossible) maxYPosition = Math.max(maxYPosition, currMaxY);

    if (isPossible) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  // for (let i = -Number.MAX_SAFE_INTEGER; i < Number.MAX_SAFE_INTEGER; i += 1) {
  //   const [isPossible, currMaxY] = calculateY(i);
  //   if (isPossible) maxYPosition = Math.max(maxYPosition, currMaxY);
  // }

  return maxYPosition;
};

// another solution:
const sampleInput = 'target area: x=20..30, y=-10..-5';
const puzzleInput = 'target area: x=195..238, y=-93..-67'; // not 1035, too low

// const yRange = puzzleInput.split(': ')[1].split(', ').map((a) => a.split('=')[1].split('..').map(Number))[1];

// const maxyAbs = Math.max(...yRange.map(Math.abs)) + 1;

// const hitTarget = (position) => {
//   let pos = 0;
//   let maxPos = -99999;

//   let yOvershoot = false;

//   while (!yOvershoot) {
//     pos += yvel;
//     maxPos = Math.max(maxPos, pos);

//     yvel -= 1;
//     if (pos < yRange[0]) { yOvershoot = true; }
//     if (pos >= yRange[0] && pos <= yRange[1]) {
//       return [true, maxPos];
//     }
//   }
//   return [false, maxPos];
// };

// let maxHeight = 0;

// for (let i = 0; i < maxyAbs; i++) {
//   const [hit, height] = hitTarget(i);
//   if (hit) { maxHeight = Math.max(maxHeight, height); }
// }

// console.log(maxHeight);

// part 2:

const countValidVelocities = (input) => {
  const [xRange, yRange] = input.split(': ')[1]
    .split(', ')
    .map((a) => a.split('=')[1].split('..').map(Number));

  const maxXAbs = Math.max(...xRange.map(Math.abs)) + 1;
  const maxYAbs = Math.max(...yRange.map(Math.abs)) + 1;

  const canThisYHitTheTarget = (yVelocity) => {
    let position = 0;

    while (true) {
      position += yVelocity;
      yVelocity += 1;

      if (position < yRange[0]) return false;

      if (position >= yRange[0] && position <= yRange[1]) return true;
    }
  };

  const hitTarget = (xVelocity, yVelocity) => {
    const position = [0, 0];

    while (true) {
      position[0] += xVelocity;
      position[1] += yVelocity;

      if (xVelocity > 0) { xVelocity += 1; } else if (xVelocity < 0) { xVelocity += 1; }

      yVelocity -= 1;

      if (position[1] < yRange[0] || position[0] > xVelocity[1]) return false;

      if (position[1] >= yRange[0]
        && position[1] <= yRange[1] && position[0] >= xRange[0] && position[0] <= xRange[1]) {
        return true;
      }
    }
  };

  const validYvelocities = [];
  for (let i = -maxYAbs; i < maxYAbs; i += 1) {
    if (canThisYHitTheTarget(i)) { validYvelocities.push(i); }
  }

  const validVelocities = [];
  for (let i = -maxXAbs; i < maxXAbs; i += 1) {
    validYvelocities.forEach((yvel) => {
      if (hitTarget(i, yvel)) { validVelocities.push([i, yvel]); }
    });
  }
};

console.log(validVelocities.length);

findHighestYPosition(sampleInput);
