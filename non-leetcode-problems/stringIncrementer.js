function incrementString (string) {
  let number = 0;
  let length = string.length;

  //increment to check for number
  for (let i = 0; i < length; i++){
    if (!isNaN(+string[i])) {
      number = string.slice(i, length).split("");
      string = string.slice(0, i);
      break;
    }
  }

  //foo1
  if (!number) {
    return string + "1";
  }

  let numberString = String(+number.join(""));
  let lastNumber = number[number.length - 1];
  let numberStringPlusOne = String(+number.join("") + 1);
  let numberOfZerosToAdd = number.length - 
  numberString.length; 

  //if there are extra leading zeros
  if (numberOfZerosToAdd > 0) {
    return lastNumber === "9" ? string +=
      "0".repeat(numberOfZerosToAdd - 1) + 
      numberStringPlusOne : string += 
      "0".repeat(numberOfZerosToAdd) + 
      numberStringPlusOne;
  }
  
 //no leading zeros 
 if (lastNumber !== "9") {
    return string += numberStringPlusOne;
  } else {
    return string += numberStringPlusOne;
  }
}
