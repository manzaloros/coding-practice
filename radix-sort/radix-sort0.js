const placeHelper = (num, place) => Math.floor((num / 10 ** place) % 10);

const digitHelper = (num) => {
  let digits = 1;
  let numCopy = num;
  while (numCopy / 10 >= 1) {
    numCopy /= 10;
    digits += 1;
  }
  return digits;
};

console.log(placeHelper(12345, 3));
console.log(placeHelper(897654321, 2));
console.log(digitHelper(5000) === 4);
