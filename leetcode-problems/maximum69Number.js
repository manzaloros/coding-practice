var maximum69Number = function (num) {
  // first attempt:
  //     let place = Math.pow(10,4);

  //     while (Math.floor(num / place) === 0) {
  //         place / 10;
  //     }
  //     // place === 100

  //     let result = 0
  //     while (place >= 0) {
  //         let digit = Math.floor(num / place);
  //         if (digit === 6) {

  //         }
  //         result += (digit * place);
  //         place / 10;
  //     }
  let place = Math.pow(10, 4);
  while (place > 0) {
    if (Math.floor((num / place) % 10) === 6) {
      num += 3 * place;
      break;
    }

    place /= 10;
  }
  return num;

  /*
    // O(4 places) time, space
    const string = num.toString().split('');
    for (let i = 0; i < string.length; i += 1) {
        if (string[i] === '6') {
            string[i] = '9'
            break;
        }
    }
    
    return +string.join('');
    */
};

maximum69Number(669);
