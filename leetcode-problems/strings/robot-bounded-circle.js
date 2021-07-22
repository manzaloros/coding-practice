/* On an infinite plane, a robot initially stands at (0, 0) and faces north. The
robot can receive one of three instructions:

"G": go straight 1 unit; "L": turn 90 degrees to the left; "R": turn 90 degrees
to the right.  The robot performs the instructions given in order, and repeats
them forever.

Return true if and only if there exists a circle in the plane such that the
robot never leaves the circle.

Example 1:

Input: instructions = "GGLLGG" Output: true Explanation: The robot moves from
(0,0) to (0,2), turns 180 degrees, and then returns to (0,0).  When repeating
these instructions, the robot remains in the circle of radius 2 centered at the
origin.  Example 2:

Input: instructions = "GG" Output: false Explanation: The robot moves north
indefinitely.  Example 3:

Input: instructions = "GL" Output: true Explanation: The robot moves from (0, 0)
-> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

Constraints:

1 <= instructions.length <= 100 instructions[i] is 'G', 'L' or, 'R'. */

const isRobotBounded = (instructions) => {
  // index of directions represents a direction, so index 0 is north, 1 is east,
  // 2 is south, 3 is west. Then you add to x and y when you move in a
  // direction. So, for north you add 0 to x and 1 to y.
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  // initial position
  let [x, y] = [0, 0];

  // face north at beginning
  let directionIndex = 0;

  for (let i = 0; i < instructions.length; i += 1) {
    const instruction = instructions[i];
    // Use modulus to only cycle over 4 directions
    // One turn left is the same as 3 turns right so you don't have to deal with
    // negative indices
    if (instruction === 'L') directionIndex = (directionIndex + 3) % 4;

    if (instruction === 'R') directionIndex = (directionIndex + 1) % 4;

    // Move it the direction you are facing
    if (instruction === 'G') {
      x += directions[directionIndex][0];
      y += directions[directionIndex][1];
    }
  }

  // If you are back at your origin or you are NOT facing north then your cycle,
  // if repeated, will eventually get you back to where you started. Apparently
  // this problem is helpful for network planning, topology and brute force?
  return (x === 0 && y === 0) || (directionIndex !== 0);
};
