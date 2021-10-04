/*
  thoughts:

  make map (name: freq)
  make set of ids

  iterate over businesses
    if location matches input location
      if business id isn't in set
        add to set
        add to freq as 0 or + 1.

  make result [];
  iterate over map
    inst Chain(name, freq)
    add chain to result;

  sort result
  comparator
    if freq === freq
      sort by name ascending
    return freq > freq

  return result
*/
const Chain = function (name, frequency) {
  this.name = name;
  this.frequency = frequency;
};

const detectAndOrderChainBusiness = (businesses, location) => {
  const set = new Set();
  const freq = businesses
    .filter((b) => b.location === location)
    .reduce((map, { name, id }) => {
      if (!set.has(id)) {
        set.add(id);
        map.set(name, (map.get(name) || 0) + 1);
      }

      return map;
    }, new Map());

  const result = Array.from(freq).map(([name, frequency]) => new Chain(name, frequency));

  const byFreqThenName = (a, b) => {
    if (a.frequency === b.frequency) return a.name < b.name ? -1 : 1;

    return a.frequency < b.frequency ? 1 : -1;
  };
  result.sort(byFreqThenName);

  return result;
};

detectAndOrderChainBusiness([{ name: 'Whole Foods', location: 'Austin', id: 103 },
  { name: 'Whole Foods', location: 'Austin', id: 103 },
  { name: 'Whole Foods', location: 'Austin', id: 104 }], 'Austin');
