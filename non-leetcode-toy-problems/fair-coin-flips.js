/*
  Flip n coins at same time.
  Any tails you set aside. Heads you reflip.
  How many rounds do you play before one coin remains?

  if n = 1, return 0? If n === 2 return 1?
*/
const howManyRounds = (n) => {
  if (n <= 1) return 0;

  return 1 + howManyRounds(Math.ceil(n / 2));
};

// howManyRounds(2);
howManyRounds(3);
howManyRounds(4);
