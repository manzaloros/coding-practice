// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

//how to deal with space after names?
function likes(names) {
  let output = "";
  let length = names.length;
  let likesString = length <= 1 ? " likes this" : " like this";
  let nameString = "";

  if (length === 0) {
    nameString = "no one";
  } else if (length === 1) {
    nameString = names[0];
  } else if (length === 2) {
    nameString = `${names[0]} and ${names[1]}`;
  } else if (length === 3) {
    nameString = `${names[0]}, ${names[1]} and ${names[2]}`;
  } else {
    let othersString = `${length - 2} others`;
    nameString = `${names[0]}, ${names[1]} and ${othersString}`;
  }

  output += nameString + likesString;
  return output;
}

function assertEquals(actual, expected) {
  if (actual === expected) {
    console.log(`passed`);
  } else {
    console.log(`failed Expected "${expected}", but got "${actual}"`);
  }
}

let inputActual0 = likes([]);
let inputExpected0 = "no one likes this";
assertEquals(inputActual0,inputExpected0);
let inputActual1 = likes(["Peter"]);
let inputExpected1 = "Peter likes this";
assertEquals(inputActual1, inputExpected1);
let inputActual2 = likes(["Jacob", "Alex"]);
let inputExpected2 = "Jacob and Alex like this";
assertEquals(inputActual2, inputExpected2);
let inputActual3 = likes(["Max", "John", "Mark"]);
let inputExpected3 = "Max, John and Mark like this";
assertEquals(inputActual3, inputExpected3);
let inputActual4 = likes(["Alex", "Jacob", "Mark", "Max"]);
let inputExpected4 = "Alex, Jacob and 2 others like this";
assertEquals(inputActual4, inputExpected4);
