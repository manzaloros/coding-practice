/* array .some() recursively: */

const someRecursive = function (arr, cb) {
  if (arr.length === 0) return false;
  if (cb(arr[0]) === true) return true;
  return someRecursive(arr.slice(1), cb);
}