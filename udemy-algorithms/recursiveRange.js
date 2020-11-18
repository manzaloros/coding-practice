const recursiveRange = function (num) {
  return num === 0 ? 0 : num + recursiveRange(num - 1);
}

console.log(recursiveRange(5)) //15