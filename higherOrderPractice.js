function computeProductOfAllElements(arr) {
  if (arr.length !== 0) {return arr.reduce((acc, curr) => {
     return acc *= curr;
  })
  } 
  return 0;
}

function filterEvenElements(arr) {
  return arr.filter(element => element % 2 === 0);
}

function getLengthOfShortestElement(arr) {
  return arr.length ?  
    arr.reduce((shortest, curr) => {
      return curr.length < shortest.length ? curr : shortest;
    }).length : 0;
}

function getLongestElement(arr) {
  return arr.length ? 
    arr.reduce((longest, current) => {
      return current.length > longest.length ?
        current : longest;
    }) : "";
}

function findSmallestElement(arr) {
  return arr.length ? 
    arr.reduce((smallest, current) => {
      return current < smallest ? current : smallest;
    }) : 0;
}

function findShortestElement(arr) {
  return arr.length ? 
    arr.reduce(function(shortest, current) {
      return current.length < shortest.length ? current : shortest;
    }) : "";
}

function getLargestElement(arr) {
  return arr.length ? 
    arr.reduce((largest, current) => {
      return current > largest ? current : largest;
    }) : 0;
}

function computeSumOfAllElements(arr) {
  return arr.length ? arr.reduce((sum, current) => {
    return sum += current;
  }) : 0;
}

function getElementsThatEqual10AtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ? 
    obj[key].filter(item => {
      return item === 10;
    }) : [];
}

function getElementsLessThan100AtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].filter(item => item < 100) : [];
}

function countAllCharacters(str) {
  return str.length ?
    str.split("").reduce((acc, current) => {
      acc[current] = (acc[current] || 0) + 1; 
      return acc;
    }, {}) : {};
}

function countAllCharacters(str) {
  return str.length ?
    str.split("").reduce((acc, current) => {
      return acc[current] ? acc[current]++ : acc[current] = 1;
  }, {}) : {};
}

function getElementsGreaterThan10AtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].filter(item => item > 10) : [];
}
var obj = {
  key: [1, 20, 30]
};

function computeAverageOfNumbers(nums) {
  return nums.length ?
    nums.reduce((sum, current) => {
      return sum += current;
    }) / nums.length : 0;
}

function getOddLengthWordsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].filter(word => word.length % 2 !== 0) : [];
}

function getAverageOfElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].reduce((sum, current) => {
      return sum += current;
    }) / obj[key].length : 0;
}

function getEvenLengthWordsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].filter(word => word.length % 2 === 0) : [];  
}

function getSquaredElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].map(number => number ** 2) : [];
}

function getOddElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].filter(number => number % 2 !== 0) : [];
}

function getEvenElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].filter(number => number % 2 ===  0) : [];
}

function getSmallestElementAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].reduce((smallest, current) => {
      return current < smallest ? current : smallest;
    }) : undefined;
}

function getLargestElementAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].reduce((largest, current) => {
      return current > largest? current : largest;
    }) : undefined;
}

function getAllButLastElementOfProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].filter((item) => obj[key].indexOf(item) !== obj[key].length - 1) : [];
}

function getElementOfArrayProperty(obj, key, index) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key][index] : undefined;
}

function getStringLength(string) {
  return string.split("").reduce((l) => {
    return l+= 1;
  }, 0)
}

function joinArrayOfArrays(arr) {
  return arr.reduce((array, current) => {
    return array.concat(current);
  })
}

function getProductOfAllElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].reduce((product, current) => {
      return product *= current;
    }) : 0;
}

function sumDigits(num) {
  return num < 0 ? 
    num.toString().split("").slice(1).reduce((sum, current, index) => {
      if (index === 0) {
        sum -= (2 * +current);
      }
        return sum += +current;   
    }, 0) : num.toString().split("").reduce((sum, current) => {
      return sum += +current;
    }, 0)
}

function getSumOfAllElementsAtProperty(obj, key) {
  return Array.isArray(obj[key]) && obj[key].length ?
    obj[key].reduce((sum, current) => {
      return sum += current;
    }) : 0;
}

function findShortestWordAmongMixedElements(arr) {
  return Array.isArray(arr) && arr.length && arr.some(item => typeof item === "string") ?
    arr.filter(word => typeof word === "string").reduce((shortest, current) => {
      return current.length < shortest.length ? current : shortest;
    }) : "";
}

function findSmallestNumberAmongMixedElements(arr) {
  return Array.isArray(arr) && arr.length && arr.some(item => typeof item === "number") ?
   arr.filter(item => typeof item === "number").reduce((smallest, current) => {
     return current < smallest ? current : smallest;
   }) : 0;
}

function getLongestWordOfMixedElements(arr) {
  return Array.isArray(arr) && arr.length && arr.some(item => typeof item === "string") ?
    arr.filter(item => typeof item === "string").reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }) : "";
}

function getLargestNumberAmongMixedElements(arr) {
  return Array.isArray(arr) && arr.length && arr.some(item => typeof item === "number") ?
    arr.filter(item => typeof item === "number").reduce((largest, current) => {
      return current > largest ? current : largest;
    }) : 0;
}

function isOddWithoutModulo(n) {
  return n & 1 === 1 ? true : false;
}

function isEvenWithoutModulo(n) {
  return n & 1 === 1 ? false : true;
}

function transformArrayToObject(array) {
  return array.reduce((obj, current, index) => {
    obj[array[index][0]] = array[index][1];
    return obj;
  }, {})
}

function transformEmployeeData(array) {
  let reducer = (obj, curr) => {
    obj[curr[0]] = curr[1];
    return obj;
  }
  
  return array.map(item => item.reduce(reducer, {}));
}

function countCharacter(str, char) {
  return str.split("").reduce((sum, curr) => {
    return curr === char ? sum += 1 : sum;
  }, 0)
}

function countWords(str) {
  return str.length ? str.split(" ").reduce((map, currentWord) => {
    map[currentWord] ? map[currentWord]++ : map[currentWord] = 1;
    return map;
  }, {}) : "";
}

function getIndexOf(char, str) {
  return str.includes(char) ? str.split("").reduce((array, curr, index) => {
    if (curr === char) {
      array.push(index)
      
    }
    return array;
  }, [])[0] : -1;
}

function getLongestOfThreeWords(...words) {
  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  })
}

function findShortestOfThreeWords(...words) {
  return words.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
  })
}