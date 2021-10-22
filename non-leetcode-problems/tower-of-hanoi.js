/*
  Time: O(2^n)
  Space: O(n) depth of callstack

  Recursion moves down the tree Left Root Right (in - order traversal)
  Notice the first move you make is the leftmost leaf, and the top of the tree
  ends up being the last move you make. Intermediate moves are moving from ->
  aux and aux -> to.

           3(A B C) -> A to C
          /      \
      2(A C B)    2(B A C)
      A to B       B to C
      /   \        /     \
    1      1      1       1
A to C   C to B  B to A    A to C
*/
const hanoi = (n) => {
  let moves = [];

  const recurse = (movesLeft, from, aux, to) => {
    if (movesLeft === 1) {
      moves.push(`Move disk 1 from rod ${from} to rod ${to}`);
    } else {
      recurse(movesLeft - 1, from, to, aux);
      moves.push(`Move disk ${movesLeft} from rod ${from} to rod ${to}`);

      recurse(movesLeft - 1, aux, from, to);
    }
  };

  recurse(n, 'A', 'B', 'C');

  return moves;
};

hanoi(3);
