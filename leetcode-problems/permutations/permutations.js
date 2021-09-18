/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
  Each recursive call calculates the permutations for the current array made
  smaller (sliced) by 1

  Permutates WITHOUT repetitions
  When the order DOES matter, it's a permutation, not a combination
  Time O(n!)

  The reason the order matters is because you have the same numbers, but in
  different orders

          1 2 3 = [ [ 1, 2, 3 ], [ 2, 1, 3 ], [ 2, 3, 1 ], [ 1, 3, 2  ], [ 3, 1, 2  ], [ 3, 2, 1 ] ]
           /
          2 3  = [ [ 2, 3], [ 3, 2 ] ]
          /
         3 = [ [ 3 ] ]
  calls:
  p(1 2 3)
  small: p(2 3) = [ [ 2, 3], [ 3, 2 ] ]
              per: [ [ 2, 3], [ 3, 2 ] ]
              small: p(3) = [ [ 3 ] ]
              first: 2
              smallerP: [ 3 ]
              i: 0
              j: 1
              prefix: [ 3 ]
              suffix: [ ]
  first: 1
  i: 1
  smaller: [ 3, 2 ]
  j: 2
  pre: [ 3, 2  ]
  suff: [  ]
  per: [ [ 1, 2, 3 ], [ 2, 1, 3 ], [ 2, 3, 1 ], [ 1, 3, 2  ], [ 3, 1, 2  ], [ 3, 2, 1 ] ]

*/
let permute = (nums) => {
  /*
    since nums is an array, this returns an array of an array of length 1
  */
  if (nums.length === 1) return [nums];

  const permutations = [];

  // recursive step
  const smallerPermutations = permute(nums.slice(1));

  // This is a number, NOT an array
  const firstOption = nums[0];

  /*
    Iterate over each array permutation returned from the recursive call
  */
  for (let i = 0; i < smallerPermutations.length; i += 1) {
    const smallerPerm = smallerPermutations[i];

    for (let j = 0; j <= smallerPerm.length; j += 1) {
      /*
        prefix starts off as empty array, and suffix ends last iteration as an
        empty array. Don't forget the <= in this loop!
      */
      const prefix = smallerPerm.slice(0, j);
      const suffix = smallerPerm.slice(j);

      permutations.push(prefix.concat([firstOption], suffix));
    }
  }

  return permutations;
};

permute([1, 2, 3]);
