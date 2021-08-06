const camelMatch = (queries, pattern) => {
  const results = [];

  queries.forEach((query) => {
    let [i, j] = [0, 0];

    while (i < query.length) {
      const letter = query[i];

      if (letter === pattern[j]) {
        i += 1;
        j += 1;
      } else if (letter === letter.toUpperCase()) {
        results.push(false);
        break;
      } else {
        i += 1;
      }

      if (i === query.length && j < pattern.length) {
        results.push(false);
      } else if (i === query.length && j === pattern.length) { results.push(true); }
    }
  });

  return results;
};
