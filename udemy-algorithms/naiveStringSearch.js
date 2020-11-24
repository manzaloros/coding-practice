/* naive string search. Better version is with KNP? */

/* const stringSearch = function (str, substr, [count, i, j] = [0, 0, 0]) {
  while (i < str.length) {
    while (j < substr.length) {
      if (substr[j] !== str[i + j]) break;
      if (j === substr.length - 1) count += 1;
      j += 1;
    }
    j = 0;
    i += 1;
  }
  return count;
} */
/* More readable naive string search: */
const stringSearch = (str, pattern, count = 0) => {
  for (let i = 0; i <= str.length; i += 1) {
    for (let j = 0; j <= pattern.length; j += 1) {
      if (pattern[j] !== str[i + j]) break;
      if (j === pattern.length - 1) count += 1;
    }
  }
  return count;
}

console.log(stringSearch('wowow', 'ow'));