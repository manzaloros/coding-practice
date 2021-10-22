/*

robot toy. Bounces off of walls, continues in direction it was going after bounce.

To begin, create:

1) A Hexbug model
  - Users can specify the total number of feet the hexbug can move in 1 button push (to nearest whole int)

2) a Room model
  - Users can specify the x and y dimensions of the room's floor (in feet, integers only). Constructor should create a rectangular room in these dimensions.

3) A method to place an instance of a Hexbug within an instance of a Room.
  - Users can specify the (x,y) coordinate where the Hexbug is placed, and the direction the Hexbug is facing (one of North, South, East, West)

4) A method to display your room and the location and direction of a hexbug within it. That output might look something like the following:

  [0, 0, 0, 0, 0, 0]
  [0, 0, 0, W, 0, 0]
  [0, 0, 0, 0, 0, 0]

Or this:

  ROOM: x=6,y=3
  BUG: At x=3, y=1 Facing West

But you can choose any representation you prefer.
-----
Add a method to your code to represent pushing the hexbug’s button. It should move the hexbug in the direction it's currently facing.

If the hexbug collides with a wall, it should "bounce". The hexbug should randomly pick one of the three remaining directions to move in.

The hexbug should continue to move and bounce when appropriate for its entire movement distance.

Create a test example with 1 hexbug moving through 1 room to demonstrate that your hexbug is moving correctly. Be sure to provide enough output so that we can see the bug’s movement.

*/

class Bug {
  constructor(feet) {
    this.feet = feet; // how many feet it can move
    this.direction = 'north';
    this.row = 0;
    this.col = 0;
  }
}

class Room {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;

    this.room = Array(rows)
      .fill(0)
      .map(() => Array(cols).fill(0));

    this.bugs = [];
  }

  placeBug(bug, row, col, direction) {
    bug.row = row;
    bug.col = col;
    bug.direction = direction;

    this.bugs.push(bug);
  }

  display() {
    this.bugs.forEach((bug) => {
      const { row, col, direction } = bug;
      this.room[row][col] = direction;
    });

    console.log(this.room);

    this.bugs.forEach(({ row, col }) => {
      this.unPlaceBug(row, col);
      this.room[row][col] = 0;
    });
  }

  moveBug(bug) {
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    const indexToDirections = ['south', 'north', 'east', 'west'];

    const [rows, cols] = [this.room.length, this.room[0].length];
    const inBounds = (row, col) => row < rows && row >= 0 && col < cols && col >= 0;

    let { feet } = bug;

    while (feet > 0) {
      const { direction, row, col } = bug;

      const directionIndex = indexToDirections.indexOf(direction);
      const [nRow, nCol] = [
        directions[directionIndex][0] + row,
        directions[directionIndex][1] + col,
      ];

      if (inBounds(nRow, nCol)) {
        bug.row = nRow;
        bug.col = nCol;

        feet -= 1;
      } else {
        const randIndex = Math.floor(Math.random() * 4);
        const randDir = indexToDirections[randIndex];

        bug.direction = randDir;
      }
    }
  }
}

const myRoom = new Room(4, 4);
const myBug = new Bug(6);
const secondBug = new Bug(2);

myRoom.placeBug(myBug, 0, 2, 'south');
myRoom.placeBug(secondBug, 0, 1, 'north');

myRoom.display();

myRoom.moveBug(myBug);

myRoom.display();
