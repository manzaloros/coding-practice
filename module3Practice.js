function average(numbers) {
  return sum(numbers) / numbers.length;
}

function sum(numbers) {
  return numbers.reduce((sum, current) => sum += current);
}

function getRandomIntInclusive(min, max) {
  //rounds up to nearest integer
  min = Math.ceil(min);
  //rounds down to nearest integer
  max = Math.floor(max);
  let random = Math.random();
  return Math.floor(random *  (max - min + 1)) + min; 
}

function decorateClassListWithAges(classList) {
  return classList.map((student) =>  
    ({name: student,
      age: getRandomIntInclusive(10,11)})
  );
}

function isIsogram(text) {
  text = text.toLowerCase();
  if (text.length === 0) {
    return true;
  }
  return text.split("").reduce((string, curr) => {
    return string.includes(curr) ? string : string += curr;
  }).length === text.length;
}

function findMaxRepeatCountInWord(word) {
  let countsObj = word.split("").reduce((obj, letter) => {
    obj[letter] = (obj[letter] || 0) + 1;
    return obj;
  }, {})

  return Object.values(countsObj).reduce((acc, curr) => {
    return acc > curr ? acc : curr;
  })
}

function findFirstWordWithMostRepeatedChars(text) {
  return text.split(" ").reduce((maxRepeat, current) => {
    return findMaxRepeatCountInWord(current) > findMaxRepeatCountInWord(maxRepeat) ? current : maxRepeat;
  })
}

function findLongestPalindrome(sentence) {
  return sentence.split(" ").filter(word => isPalindrome(word)).reduce((longest, current) => current.length > longest.length ? current : longest);
}

function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}

function renderInventory(inventory) {
  let list = "";
  inventory.forEach(designer => 
    designer.shoes.forEach(shoes => 
      list += `${designer.name}, ${shoes.name}, ${shoes.price}\n`));
  return list;
}

function calculateAveragePricePerDesigner(inventory) {
  let designersArray = inventory.map(designer => ({
    name: designer.name,
    averagePrice: getAverage(designer.shoes)
    })
  )
  let containerObject = {
    designers: designersArray
  }
  return containerObject;
}

function getAverage(shoesList) {
  return shoesList.map(shoe => shoe.price)
    .reduce((average, current, _, {length}) => {
      console.log(average, current)
      return average + current / length;
    }, 0)
}

function listAllBlackShoes(inventory) {
  return inventory.map(designer => designer.shoes.reduce((list, item) => {
    if (item.name.includes('black')) {
      list += `${designer.name}, ${item.name}, ${item.price}\n`;
    }
    return list;
  }, "")).join("");
}

function generateLaceDetails(inventory) {
  let container = [];
  let laceShoesArray = [];

  //creates array of shoe names that have the word 'lace' in them
  laceShoesArray = inventory.map(designer => 
    designer.shoes.map(shoe => shoe.name).filter(shoe => shoe.includes('lace'))
  )

  //creates objects for each shoe and pushes to the container
  laceShoesArray.forEach(shoe => 
    shoe.map((current) => {
      let obj = {};
      let nameWordsArray = current.split(" ");
      let targetWordIndex = nameWordsArray.findIndex(word => word.includes('lace'));
      obj = {
      nameWordsArray: nameWordsArray,
      targetWordIndex: targetWordIndex
      }
    container.push(obj);
    })
  )
  return container;
}

function flipPairs(string) {
  return string.match(/.{1,2}/g).map(letter => {
    return letter.split("").reverse().join("");
  }).join("")
}

function flipEveryNChars(string, n) {
  let result = "";
  string = string.split("");
  string.forEach((letters, index) => {
    result += string.slice(index, index + n).reverse().join("");
    index += n;
    console.log(index)
    return result;
  })
  return result;
}

console.log(flipEveryNChars('a short example', 5));