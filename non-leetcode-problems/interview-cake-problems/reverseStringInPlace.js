function reverse(arrayOfChars) {
  // Reverse the input array of characters in place

  for (let i = 0; i < arrayOfChars.length; i += 1) {
    if (i >= Math.floor(arrayOfChars.length / 2)) break;
    const temp = arrayOfChars[(arrayOfChars.length - 1) - i];
    arrayOfChars[(arrayOfChars.length - 1) - i] = arrayOfChars[i];
    arrayOfChars[i] = temp;
  }
}

reverse(['a', 'b']);