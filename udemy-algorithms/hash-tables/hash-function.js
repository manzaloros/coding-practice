// Needs to be more random and better time complexity
const hash = (key, length) => {
  let total = 0;
  for (let i = 0; i < key.length; i += 1) {
    const value = key[i].charCodeAt(0) - 96;
    total = (total + value) % length;
  }
  return total;
};

// Apparently prime numbers are used to reduce collisions in hash functions

const betterHash = (key, length) => {
  let [total, prime] = [0, 31];
  for (let i = 0; i < Math.min(key.length, 100); i += 1) {
    const value = key[i].charCodeAt(0) - 96;
    total = (total * prime + value) % length;
  }
  return total;
};
