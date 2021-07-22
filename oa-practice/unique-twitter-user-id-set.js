/*
  i: arr of nums rep. unordered user ids
  o: sum of unique ids

  increment duplicates until all ids are unique and have min sum
*/

// Time: O(n log n) because of sort
// Space: O(1) sorting happens in place
const getUniqueUserIdSum = (userIds) => {
  // create sum var
  // Sort so you always increment the lowest nums
  userIds.sort((a, b) => (a < b ? -1 : 1));
  let sum = 0;
  let low = 0;

  // Add the id if it's the lowest you've seen, or add one to lowest, and then
  // add it
  userIds.forEach((id) => {
    low = Math.max(low + 1, id);
    sum += low;
  });

  // return sum
  return sum;
};

getUniqueUserIdSum([3, 2, 1, 2, 2, 7]);
