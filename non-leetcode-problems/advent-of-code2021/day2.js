/*
  input: string of directions separated by newlines
  output: num rep final depth * horizontal position

  split directions by newlines into array
  map each direction to be
    split the mapping by space
    examine split mapping at 0
    if forward, output num
    if down output num
    if up output -num

  inst depth and horizontal at 0
  iterate array
    if forward

  multiply depth and horizontal and return

  --------------------------------------------------
  part 2

  forward increases horidontal and increases depth by (aim * val)
*/

const findPosition = (d) => d.split(/\n/).reduce(([depth, horizontal, aim], command, i, commands) => {
  let [dimension, value] = command.split(' ');
  value = +value;

  if (dimension === 'up') {
    aim -= value;
  } else if (dimension === 'down') {
    aim += value;
  } else {
    horizontal += value;
    depth += (aim * value);
  }

  return i === commands.length - 1 ? depth * horizontal : [depth, horizontal, aim];
}, [0, 0, 0]);

const sampleD = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

const directions = `forward 3
down 4
forward 3
up 4
down 4
down 6
down 3
down 1
up 7
down 7
forward 4
forward 7
forward 3
down 2
forward 5
down 7
forward 5
up 9
down 6
forward 8
forward 8
down 8
forward 7
down 9
down 4
down 6
forward 1
down 2
down 7
up 4
forward 8
down 5
down 7
down 1
forward 5
down 1
up 1
forward 5
forward 1
down 1
forward 3
up 4
up 4
up 8
up 1
forward 7
down 3
forward 3
forward 3
down 3
down 6
down 7
forward 4
down 2
up 3
forward 5
forward 1
down 3
up 3
up 4
forward 2
forward 6
up 1
down 9
up 3
forward 5
forward 2
up 9
up 2
down 5
down 5
forward 7
forward 1
down 7
forward 9
forward 8
down 7
forward 5
forward 4
down 5
forward 7
forward 3
down 2
forward 2
forward 2
down 1
up 8
down 2
down 2
forward 6
up 9
forward 6
up 6
forward 5
forward 5
down 2
forward 5
up 5
forward 5
up 4
down 1
up 5
down 2
forward 3
down 1
forward 2
up 4
down 6
forward 1
forward 6
forward 6
forward 8
forward 8
forward 3
forward 5
down 8
up 8
down 6
down 8
forward 8
down 6
forward 4
down 4
forward 7
forward 9
down 6
up 6
forward 6
down 9
up 7
up 9
down 1
up 5
forward 2
forward 3
up 6
forward 8
forward 7
down 4
up 8
up 2
down 2
up 3
down 2
down 8
forward 9
up 9
forward 7
down 9
forward 4
forward 3
forward 2
down 5
forward 3
forward 1
down 2
forward 3
down 7
down 8
forward 9
down 9
forward 2
up 5
up 2
down 8
down 1
down 7
forward 6
down 2
forward 9
down 6
down 9
forward 9
down 2
up 5
forward 2
down 7
down 6
up 1
forward 9
up 7
down 1
forward 5
down 5
up 2
forward 6
forward 2
up 9
up 7
down 2
down 1
forward 6
down 2
forward 9
forward 8
forward 2
up 1
down 7
down 7
forward 5
forward 9
down 5
down 5
down 5
forward 4
up 4
down 7
up 6
forward 3
up 5
forward 3
forward 6
forward 8
down 6
forward 4
forward 5
up 8
down 9
down 3
down 8
forward 8
forward 1
down 7
down 2
forward 8
forward 7
up 2
down 9
forward 2
down 6
down 7
up 2
up 7
down 6
down 8
down 2
forward 8
down 6
up 1
down 6
down 5
down 8
down 1
down 4
down 1
down 8
up 3
forward 1
forward 5
forward 2
forward 2
down 5
down 2
down 8
up 7
forward 2
forward 1
forward 4
up 4
down 5
up 4
down 8
up 5
down 6
down 8
down 8
forward 8
forward 5
down 1
down 2
down 4
forward 5
up 3
forward 3
down 7
forward 9
down 9
down 5
forward 5
down 9
forward 9
down 5
up 4
up 9
forward 1
forward 6
forward 9
forward 2
up 5
forward 9
down 8
up 2
up 9
forward 1
down 7
down 4
down 4
up 3
forward 6
down 1
forward 6
forward 3
up 3
forward 1
down 1
up 8
up 3
forward 9
forward 1
forward 8
forward 8
up 7
forward 2
forward 9
down 9
down 2
down 5
down 1
forward 9
forward 9
up 4
forward 6
down 3
forward 2
forward 5
up 4
forward 2
up 1
up 4
up 3
up 6
up 6
down 2
up 7
down 1
down 3
forward 3
up 5
forward 4
down 5
forward 9
down 2
up 5
forward 9
down 3
down 5
forward 3
forward 7
forward 9
up 2
down 6
up 6
down 8
forward 8
down 1
forward 3
forward 4
up 6
up 3
forward 6
forward 5
forward 2
down 7
down 1
down 5
forward 6
down 4
down 2
forward 7
up 9
forward 3
down 2
up 3
down 3
down 1
up 5
down 4
forward 1
forward 2
forward 2
forward 6
forward 2
down 2
down 8
down 1
down 2
down 7
up 7
down 7
forward 7
forward 7
down 8
forward 1
down 7
down 7
down 8
up 9
down 4
up 6
forward 7
up 2
down 8
forward 2
down 8
forward 4
down 4
forward 4
up 1
down 2
forward 6
forward 7
forward 8
down 2
forward 5
forward 1
up 9
down 8
down 2
forward 1
down 8
forward 2
up 2
up 3
up 7
forward 3
forward 3
up 3
up 5
forward 8
down 6
forward 6
down 2
down 7
forward 3
forward 6
down 5
down 6
up 4
forward 8
up 8
down 9
forward 7
forward 1
down 6
up 1
down 7
forward 4
forward 8
down 2
forward 8
down 3
down 5
down 5
forward 8
down 3
up 8
down 9
forward 2
down 9
forward 4
up 8
forward 4
up 1
forward 8
forward 2
forward 5
down 2
down 6
up 2
down 8
forward 9
forward 5
forward 6
forward 4
down 4
down 6
up 1
forward 3
down 6
forward 6
forward 1
forward 6
forward 9
up 6
forward 5
down 4
forward 5
down 8
down 7
forward 7
up 5
down 6
forward 4
forward 6
forward 5
up 4
down 3
forward 1
down 1
forward 6
up 1
up 1
down 7
forward 5
forward 1
down 2
forward 2
down 3
down 6
down 5
down 4
forward 2
forward 1
down 7
forward 9
up 6
forward 9
forward 2
down 1
forward 9
forward 4
down 1
forward 3
up 9
down 1
down 3
down 6
down 9
forward 3
down 8
down 3
forward 5
forward 1
forward 5
forward 2
up 4
down 6
up 7
forward 7
down 9
forward 6
down 4
down 1
up 8
down 4
forward 7
forward 5
down 5
down 2
down 1
down 4
up 5
down 8
forward 1
forward 2
down 9
forward 7
down 8
forward 5
forward 7
forward 2
down 6
down 5
down 6
down 7
forward 2
up 9
down 3
forward 1
up 6
forward 4
down 3
up 7
forward 9
forward 7
down 4
up 1
forward 6
up 4
down 1
down 4
down 2
down 5
down 4
down 7
forward 2
down 8
down 8
forward 9
forward 3
down 2
down 2
forward 2
down 9
forward 8
up 8
down 3
forward 4
down 9
up 2
forward 6
forward 2
up 6
up 7
forward 1
forward 2
up 2
down 8
forward 9
down 7
forward 1
down 6
down 8
forward 2
down 8
forward 6
forward 7
forward 8
forward 1
up 8
down 5
forward 8
down 3
down 6
forward 6
down 4
down 6
forward 8
down 3
down 4
forward 6
forward 1
up 1
up 3
forward 7
forward 2
down 1
down 7
down 3
down 4
down 3
forward 2
forward 4
down 6
down 2
forward 3
down 9
down 5
down 6
down 7
down 5
down 3
forward 5
forward 6
down 3
down 1
up 3
down 8
down 7
down 5
up 9
down 8
down 4
down 2
forward 4
forward 9
forward 1
forward 7
down 3
down 4
up 9
down 6
forward 9
down 4
down 2
down 5
down 3
forward 2
forward 9
forward 3
down 5
up 1
down 9
forward 9
down 7
forward 6
down 6
down 9
down 7
down 8
down 2
up 3
forward 6
forward 3
up 4
down 6
down 8
down 2
down 1
up 9
down 1
down 8
forward 5
forward 4
forward 9
forward 3
forward 9
down 5
up 9
down 6
forward 4
down 6
forward 4
forward 9
down 7
up 9
up 2
forward 5
forward 6
up 2
forward 8
down 6
forward 8
forward 1
forward 2
forward 6
down 3
up 2
forward 7
up 8
forward 2
forward 5
forward 4
up 6
forward 9
up 8
down 3
up 7
up 2
down 2
up 4
up 5
forward 5
down 9
forward 2
down 1
down 6
down 4
down 1
down 1
forward 4
forward 7
down 4
down 2
forward 7
down 4
up 1
up 8
down 6
down 8
forward 6
down 8
up 2
down 7
forward 5
forward 8
down 9
forward 1
up 7
down 5
up 1
up 6
down 3
down 4
down 9
down 6
forward 1
down 1
forward 4
down 4
down 8
up 1
down 7
forward 1
down 6
down 4
down 5
forward 6
forward 8
down 5
down 5
up 3
forward 8
down 4
down 3
up 1
up 8
forward 1
down 6
down 2
down 6
down 1
forward 9
down 1
forward 6
forward 9
down 5
up 4
down 5
down 1
forward 2
down 2
forward 9
down 3
forward 7
forward 8
forward 5
down 7
down 6
down 8
forward 7
up 7
forward 6
forward 3
down 2
forward 9
forward 4
down 6
down 6
up 9
down 1
forward 5
forward 2
forward 2
forward 2
down 8
up 1
down 4
forward 3
down 3
up 4
down 6
forward 2
forward 8
forward 9
forward 3
down 4
forward 2
forward 5
down 5
up 8
up 9
up 3
forward 9
forward 3
forward 3
forward 8
forward 2
forward 7
down 8
down 6
forward 6
forward 8
down 1
forward 3
down 7
forward 5
forward 3
forward 3
down 3
down 5
down 2
down 6
up 2
up 7
down 9
forward 6
down 9
down 8
up 8
down 1
forward 9
down 8
forward 7
forward 6
down 5
down 7
down 4
forward 7
down 8
down 9
down 4
up 8
forward 2
up 6
forward 6
forward 3
forward 6
up 9
forward 1
down 3
up 6
down 8
up 4
up 5
forward 8
forward 5
forward 3
forward 3
forward 4
down 4
forward 2
up 2
down 7
down 5
forward 7
down 8
forward 3
up 5
down 4
down 1
down 5
forward 6
forward 8
forward 6
down 2
down 7
forward 6
forward 2
forward 7
down 5
forward 2
forward 7
down 9
down 9
down 4
down 7
down 3
forward 1
up 8
down 7
forward 2
forward 4
up 2
forward 2
down 2
up 2
up 9
forward 1
down 5
down 1
forward 8
up 3
up 4
down 3
up 2
down 8
down 6
down 4
up 7
forward 4
down 7
down 4
up 3
up 8
down 1
down 7
forward 1
down 2
forward 6
down 9
forward 3
down 9
up 5
up 1
down 4
forward 1
down 4
forward 4
up 4
forward 7
down 9
down 2
down 8
forward 2
up 3
forward 2
down 7
forward 8
forward 6
forward 1
up 9
forward 7
up 4
down 4
down 3
down 7
forward 5
forward 3
forward 7`;

console.log(findPosition(directions));
