/* Recursively capitalize each letter of each word in an array */

const capitalizeWords = function (arr) {
  const capitalize = (word) => {
    return word.length !== 0 ?
      word[0].toUpperCase() + capitalize(word.slice(1)) : '';
  }
  return arr.length !== 0 ?
    [capitalize(arr[0])].concat(capitalizeWords(arr.slice(1))) : [];
};

console.log(capitalizeWords(['i', 'am', 'cool']));