/* Here’s a fun one: write an algorithm that takes a number of players and
returns a list of “rounds” with them paired together. No player should be paired
with another more than once.  E.g. 4: [[ab, cd], [ac, bd], [ad, bc]] (Basically
what I’m doing to plan out your schedule for mock interviewing each other
:smile:) */

const createUniquePairings = (numOfPlayers) => {
  if (numOfPlayers === 1) return ['A'];

  const alphas = [];

  for (let i = 65; i < numOfPlayers + 65; i += 1) {
    alphas.push(String.fromCharCode(i));
  }

  const pairings = [];

  for (let i = 0; i < alphas.length; i += 1) {
    for (let j = i + 1; j < alphas.length; j += 1) {
      pairings.push(alphas[i] + alphas[j]);
    }
  }

  return pairings;
};

console.log(createUniquePairings(6));
