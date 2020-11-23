const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === val) return i;
  }
  return -1
};

console.log(linearSearch([10, 15, 20, 25, 30], 15))