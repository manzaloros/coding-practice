/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
let cleanRoom = function (robot) {
  // up, right, down, left
  const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

  const visited = new Set();

  // go to previous cell facing same direction as now
  const goBack = () => {
    robot.turnRight();
    robot.turnRight();
    robot.move();
    robot.turnRight();
    robot.turnRight();
  };

  const backtrack = (row, col, direction) => {
    visited.add(`${row}:${col}`);

    robot.clean();

    for (let i = 0; i < 4; i += 1) {
      // Tell the robot which direction is forward
      const newDirection = (direction + i) % 4;
      const newRow = row + directions[newDirection][0];
      const newCol = col + directions[newDirection][1];

      // if valid, you actually move the robot.
      if (!visited.has(`${newRow}:${newCol}`) && robot.move()) {
        // place, backtrack
        backtrack(newRow, newCol, newDirection);
        // remove
        goBack();
      }

      // Always go right maze rule
      robot.turnRight();
    }
  };

  // start from arbitrary [0, 0] facing 0 ()
  backtrack(0, 0, 0);
};
