// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords) {
  let outputTitle = "";
  minorWords ? minorWords = minorWords.toLowerCase().split(" ") : minorWords = "";
  if (!title) {
    return outputTitle;
  }
  
  title.toLowerCase().split(" ").map((word) => 
    {minorWords.includes(word) ? outputTitle += `${word} ` : outputTitle += `${word[0].toUpperCase() + word.slice(1)} `});

  return outputTitle[0].toUpperCase() + outputTitle.slice(1,-1);
}

function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`failed Expected "${expected}", but got "${actual}"`);
  }
} 

let inputActual = titleCase('THE WIND IN THE WILLOWS', 'The In');
let inputExpected = 'The Wind in the Willows';
assertEquals(inputActual, inputExpected);
