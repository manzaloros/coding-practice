console.log(depthSum([1, [1, [1]]])) // 9
// 1*(1 + 2*(1 + 3*1))
console.log(depthSum([8, 4, [5, [9], 3], 6])) // 88

1 * 18 +  2*(5 + 3 + 3 * (9))
console.log(depthSum([1, [2, [3], 4], 5])) // 36

depth: 1
sum:  36
current:
return 36 * 1;



level * (sum of all elements in level)

// level is nested arrays
// input: arr of nums or arr of ints or more arrays
// output: num rep. whole calculation
// edge: [] at least 1

// traverse nested arrays, keep track of the depth

// 8 4 6
// 5 3
// 9

// int recurse(arr, depth = 1) {
       init sum 0
//   iterate over nums
         sum += recurse(currentElement, depth + 1)
         add each num to sum

     return sum * depth
}

//time: O(number of elements)
// space: O(number of elements)
const depthSum = (nums, depth = 1) => {
  sum = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const current = nums[i];

    if (Array.isArray(current)) {
      sum += depthSum(current, depth + 1);
    } else {
      sum += current;
    }
  }

  return depth * sum;
}

- 38: done with question
- 36: going through second example
- 34: clear understanding of problem
- 34: clear input/output/explanation, edge cases
- 33: naive approach but maybe not that naive :)
- 33: traversing recursively through nested arrays
- 31: no data structure, iterate through array in recursive function, when you see new array, recurse
- 30: recursive function takes in array, outputs sum
- 29: setting up scaffolding
- 28: keep track of depth
- 27 scaffolding starting to look like real code
- 26: starting code
- 26: missing “let” for sum variable
- 26 for loop rather than .forEach
- 24 working code, initialized depth
- 23: going through example
- 21 a bit verbose in example but clear
- 20 actually this recursive examples is really clear and detailed, just be careful for bigger examples
- 19 time complexity: min O(n), need nested arrays, only look at each value once, call stack space complexity o(n)


Given the string croakOfFrogs, which represents a combination of the string "croak" from different frogs, that is, multiple frogs can croak at the same time, so multiple “croak” are mixed. Return the minimum number of different frogs to finish all the croak in the given string.

A valid "croak" means a frog is printing 5 letters ‘c’, ’r’, ’o’, ’a’, ’k’ sequentially. The frogs have to print all five letters to finish a croak. If the given string is not a combination of valid "croak" return -1.



Example 1:

Input: croakOfFrogs = "croakcroak"
Output: 1
Explanation: One frog yelling "croak" twice.
Example 2:

Input: croakOfFrogs = "crCoakROAK"
Output: 2
Explanation: The minimum number of frogs is two.
The first frog could yell "crCoakROAK".
The second frog could yell later "crCoakROAK".
Example 3:


cccrrroooaaakkk

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
input: string croak, always in order but multiple frogs, if there's overlap the same frog can't be doing that croak
output: num rep. min num of frogs
edge: string is valid

thought: if not expecting the curr char, either start a new frog or continue adding to some prev frog's croak. if c, new frog. frog starts at c, and is done at k.


frog1: croa
frog2: cro
frog3: cr
frog4: c

if you see a c before you see a k.. add one to frogs?

ccccrrrooakac
// subtract when you see a k, add when you see a c.

const frogs = (string) => {
  numFrogs = 0;
  wasLastCharK = false;

  for (let i = 0; i < string.length; i+= 1) {
    if (currentChar === 'c' && !wasLastCharK) numFrogs += 1
    if (currentChar === 'k') {
      wasLC = true;
    } else {
      wasLastCharK = false;
    }
  }

  return numFrogs;
}

- 15 finished question 2 explanation
- 14 what is naive approach, iterate through string, track croaks
- 12 if you come to a character that you were not expecting, there is overlap
- 9 c starts a new frog
- 6 minimum info necessary to know frog croaks
- 4 do you need to store all 5 characters
- 4 c and k are what matter
- 3 if you see a c before a k, you have overlap, add one frog
- 3 k means a frog stopped croaking, so
- 2 stubbing out code. No let for numFrogs variable
- 0 need to figure out logic

https://leetcode.com/contest/weekly-contest-185/problems/minimum-number-of-frogs-croaking/















