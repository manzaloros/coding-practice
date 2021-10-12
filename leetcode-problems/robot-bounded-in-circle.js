const isRobotBounded = (instructions) => {
  /*
    direction vector to add to current coord.
    Order is N E S W, clockwise.
  */
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // start at origin
  let [x, y] = [0, 0];

  // Starts facing north based on the problem instructions
  let directionIndex = 0;

  /*
    Going left is making 3 right turns.
  */
  instructions.split('').forEach((instruction) => {
    if (instruction === 'L') {
      directionIndex = (directionIndex + 3) % 4;
    } else if (instruction === 'R') {
      directionIndex = (directionIndex + 1) % 4;
    } else if (instruction === 'G') {
      x += directions[directionIndex][0];
      y += directions[directionIndex][1];
    }
  });

  /*
    After following instructions, if you're back at the origin, you're in a
    circle. Otherwise, if you aren't facing north, you will eventually make get
    back to your starting point, you are in some kind of cycle.
  */
  return (x === 0 && y === 0) || directionIndex !== 0;
};

isRobotBounded('GGLLGG');
