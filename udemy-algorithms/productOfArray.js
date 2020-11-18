const productOfArray = function (arr) {
  return arr.length === 0 ? 1 : arr[0] * productOfArray(arr.slice(1));
}



console.log(productOfArray([1, 2, 3]))