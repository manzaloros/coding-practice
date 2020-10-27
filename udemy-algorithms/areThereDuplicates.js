const areThereDuplicates = (...args) => {
  /* Using frequency counter O(n) time: */
  // const frequency = {};
  // let duplicates = false;
  // args.forEach((arg) => {
  //   if (frequency[arg] > 0) duplicates = true;
  //   frequency[arg] = (frequency[arg] || 0) + 1;
  // })
  // return duplicates;

  /* Using multiple pointers: */
  for (let i = 0; i < args.length; i += 1) {
    let j = args.length;
    while (j > i) {
      if (args[i] === args[j]) return true;
      j -= 1;
    }
  }
  return false;

  /* Using set: */
  // const set = new Set(args);
  // return set.size !== args.length;
}

console.log(areThereDuplicates(1, 2, 1));