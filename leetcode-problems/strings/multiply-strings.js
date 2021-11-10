let multiply = function (num1, num2) {
  let result = '';
  let place = 0;
  let carry = 0;

  const num2Split = num2.split('').reverse();

  const multiply = (num) => {
    let product = 0;

    num2Split.forEach((digit) => {
      let currDig = (+num * +digit) + carry;
      carry = Math.floor(currDig / 10);
      currDig %= 10;

      product += currDig;
    });

    product *= (10 ** place);
    place += 1;

    return product;
  };

  // get array to add
  // for each digit of num1
  // multiply it by every digit of num2
  // if index isn't first, place *= 10
  // return that num * place
  const numsToAdd = num1.split('').reverse().map(multiply);

  // add each nums in array to result
  const add = (totalSum, curr, i) => {
    let carry = 0;
    let total = totalSum.split('').reverse();
    if (i === 0) total = [0];
    let sum = 0;

    String(curr).split('').reverse().forEach((digit) => {
      total.forEach((digit2) => {
        let currDig = (+digit + +digit2) + carry;
        carry = Math.floor(currDig / 10);
        currDig %= 10;

        sum += currDig;
      });
    });

    return String(sum);
  };

  return numsToAdd.reduce(add, '');
};

multiply('45', '2');
