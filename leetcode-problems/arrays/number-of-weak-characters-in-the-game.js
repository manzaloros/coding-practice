/**
 * @param {number[][]} properties
 * @return {number}
 */
let numberOfWeakCharacters = function (props) {
  const comparator = (a, b) => {
    // if attack is same, sort by defense desending
    if (a[0] === b[0]) return a[1] < b[1] ? 1 : -1;

    return a[0] < b[0] ? -1 : 1;
    // otherwise
    // sort ascending
  };

  props.sort(comparator);

  let maxDefSeen = -Infinity;
  let count = 0;

  // iterate backwards
  // if curr defense > max seen, update max
  // if curr defense < max seen, count += 1
  for (let i = props.length - 1; i >= 0; i -= 1) {
    let currDef = props[i][1];

    maxDefSeen = Math.max(currDef, maxDefSeen);
    if (currDef < maxDefSeen) count += 1;
  }

  return count;
};
