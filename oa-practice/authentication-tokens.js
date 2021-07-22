/*
  i: matrix of num triples representing [command in 0 or 1, id, time]
  o: num rep. number of tokens that exist at the end of all commands

  GET (0) generates a token (id, time)
  RESET (1) resets token (id, time)

  time: O(n)
  space: O(n)

  Can you create a new token with the same id as an expired one?
*/

const numberOfTokens = (expiryLimit, commands) => {
  /*
    init a token map {id: [timeUp (limit + get or reset time)]}
    init maxtime as commands[length - 1][2]

    start time at commands[0][2]
    for each command
      if GET
        add a new token to the map if it doesn't exist

      else if reset
        if token time is > timeUp in the map
          delete from the map
        else if token time within timeUp limit
          update limit to be time + expiryLimit

    return map keys length
  */

  const tokenMap = new Map();

  for (let i = 0; i < commands.length; i += 1) {
    const [command, id, time] = commands[i];
    const willExpireAt = time + expiryLimit;

    if (command === 0) {
      if (!tokenMap.has(id)) tokenMap.set(id, willExpireAt);
    } else if (command === 1 && tokenMap.has(id)) {
      const timeUp = tokenMap.get(id);

      if (time > timeUp) {
        tokenMap.delete(id);
      } else {
        tokenMap.set(id, willExpireAt);
      }
    }
  }

  return tokenMap.size;
};

numberOfTokens(4, [[0, 1, 1], [0, 2, 2], [1, 1, 5], [1, 2, 7]]);
