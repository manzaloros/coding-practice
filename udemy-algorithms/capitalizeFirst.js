/* Recursively capitalize each first letter of each word */

const capitalizeFirst = function (arr, firstWord = arr[0]) {
  if (arr.length === 0) return [];
  const newArray = [firstWord[0].toUpperCase() + firstWord.slice(1)];
  return newArray.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['dog', 'cat', 'mouse']));