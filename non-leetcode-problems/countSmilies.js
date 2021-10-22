//  Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.

 function countSmilies(array) {
  //create numberOfSmilie var 
  let numberOfSmilies = 0;
  //iterate over array
  for (let i = 0; i < array.length; i++) {  	
    //check if element is smilie
    if (isSmilie(array[i])) {
      //if so, incremenet numberOfSmilies
      numberOfSmilies++;
    }
  }
  //return numberOfSmilies
  return numberOfSmilies;
 }

 function isSmilie(face) {
 	if (face.length < 4) {
  //check if face includes a ) or D
  if (face.includes(")") || face.includes("D")) {
    //check if face includes : or ;
    if (face.includes("-") || face.includes("~") || face === ":)" || face === ";)" || face === ":D" || face === ";D") {
    	return true;
    }
  }
  }
  //return false
  return false;
 }

 function assertEquals(actual, expected) {
  if (actual === expected) {
  	console.log(`passed`);
  } else {
  	console.log(`failed, Expected ${expected}, but got ${actual}`);
  }
 }

 let inputActual = countSmilies([":)", ":~>", ":->", ":-)", ":>", ";oD", ":oD"]);
 let inputExpected = 2;
 assertEquals(inputActual, inputExpected);
