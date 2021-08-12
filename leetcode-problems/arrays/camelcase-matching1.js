const camelMatch = (queries, pattern) => {
  const result = [];

  // return if the uppercase version of the char is different than the char
  // itself
  const isLowercase = (char) => char !== char.toUpperCase();

  const match = (query) => {
    let j = 0;

    // for each query char
    for (let i = 0; i < query.length; i += 1) {
      // if there are words left in the pattern and the chars match
      if (j < pattern.length && query[i] === pattern[j]) {
        j += 1;
      } else if (!isLowercase(query[i])) {
        // otherwise, if you're at the end of the pattern and the query letter
        // is uppercase, just return false immediately. If you still have
        // pattern chars left and the chars don't match and the char is
        // uppercase, do the same.
        return false;
      }
    }

    // if you got to the end of the query and didn't have any non-matching
    // uppercase chars, only return true if you don't have any pattern
    // characters left.
    return j === pattern.length;
  };

  queries.forEach((query) => {
    // ensures you will only push one bool to result per query
    const isMatch = match(query);
    result.push(isMatch);
  });

  return result;
};
