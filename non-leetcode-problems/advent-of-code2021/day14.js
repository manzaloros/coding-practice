/*
  parse input, make map {ch -> cbh}

     i
  nncb
  counts
  {
    n:2
    c:1
    b:1
    h:0
  }

  {
    nn: 1
    nc: 1
    cb: 1
  }
  newmap: {
    ch:1
    hb:1
    nc:2
    cn:1
  }

  ncnbchb
  new map:
  {
    nc: 1
    cn: 1
    nn: 0
    nb: 1
    bc: 1
    ch: 1
    hb: 1
    cb: -1
  }

  for each step
  look at pair
  add to count of both new pairs created
*/

const constructPolymer = (input, steps) => {
  let [template, ...rules] = input.split(/\n/)
    .filter((p) => p.trim());

  const ruleMap = rules.reduce((map, rule) => {
    const [pattern, toInsert] = rule.split(' -> ');
    const result = pattern[0] + toInsert + pattern[1];

    return map.set(pattern, result);
  }, new Map());

  Array(steps).fill()
    .forEach((step) => {
      let built = '';

      template.split('')
        .forEach((char, i) => {
          if (i < template.length - 1) {
            let next = ruleMap.get(char + template[i + 1]);

            if (built[built.length - 1] === next[0]) {
              next = next.substring(1);
            } else {
              built += next;
            }
          }
        });

      template = built;
    });

  const elementCount = template.split('')
    .reduce((map, char) => map.set(char, (map.get(char) || 0) + 1), new Map());

  const counts = Array.from(elementCount.values());

  return Math.max(...counts) - Math.min(...counts);
};

const countMostAndLeastOccuring = (input, steps) => {
  const addOrDefault = (map, key, num) => map.set(key, (map.get(key) || 0) + num);

  let [template, ...rules] = input.split(/\n/)
    .filter((p) => p.trim());

  const [ruleMap, oldPairMap] = rules.reduce(([map, oldPair], rule) => {
    const [pattern, toInsert] = rule.split(' -> ');

    return [map.set(pattern, toInsert), oldPair.set(pattern, 0)];
  }, [new Map(), new Map()]);

  const counts = template.split('')
    .reduce((map, char, i) => {
      addOrDefault(map, char, 1);

      if (i < template.length - 1) {
        const pair = char + template[i + 1];

        addOrDefault(oldPairMap, pair, 1);
      }

      return map;
    }, new Map());

  Array(steps).fill()
    .forEach((step) => {
      let newPairMap = new Map(oldPairMap);

      newPairMap.forEach((count, pair) => {
        const toInsert = ruleMap.get(pair);

        [pair[0] + toInsert, toInsert + pair[1]].forEach((createdPair) => {
          addOrDefault(oldPairMap, createdPair, count);
        });

        addOrDefault(counts, toInsert, count);
        addOrDefault(oldPairMap, pair, -count);
      });
    });

  const frequencies = Array.from(counts.values());

  return Math.max(...frequencies) - Math.min(...frequencies);
};

const sample = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;

const puzzleInput = `SFBBNKKOHHHPFOFFSPFV

HB -> C
KO -> S
KK -> N
PF -> F
VB -> F
KC -> S
BP -> H
SS -> H
BS -> B
PB -> O
VH -> C
BK -> S
BO -> F
HN -> V
NN -> K
PV -> C
NH -> P
KP -> N
NB -> V
NF -> V
PP -> O
PN -> B
VN -> K
SC -> O
NS -> N
SV -> B
BV -> P
FV -> F
OK -> H
HF -> F
CV -> K
KB -> C
OB -> B
NO -> V
OF -> B
HP -> C
BB -> F
FB -> H
OC -> K
NV -> H
OV -> S
OP -> N
SP -> N
FK -> F
VV -> B
VK -> H
OS -> F
CO -> F
CH -> V
HV -> V
FN -> B
CS -> F
PS -> F
HS -> F
VO -> K
NP -> F
FP -> B
KF -> P
CC -> N
BF -> S
VP -> F
HO -> H
FC -> F
BH -> K
NK -> S
BN -> V
SH -> K
CP -> B
VS -> K
ON -> S
FS -> P
HK -> F
PC -> O
KN -> H
CK -> N
HH -> N
CN -> S
BC -> K
PH -> N
OO -> B
FO -> O
SK -> B
FF -> V
VC -> N
SF -> N
KH -> V
SO -> F
KS -> H
SB -> K
VF -> V
PK -> O
OH -> N
HC -> F
PO -> O
NC -> F
FH -> V
KV -> V
CB -> C
CF -> O
SN -> H`;

countMostAndLeastOccuring(puzzleInput, 40);
