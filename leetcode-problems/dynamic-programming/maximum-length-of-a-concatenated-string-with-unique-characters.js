// O(arr.length ^ 2)
let maxLength = function (arr) {
  // track characters added to subsequence
  const counts = new Set();

  const backtrack = (index) => {
    // if you've gone out of bounds
    // return the length 0 so it doesn't add to max length
    if (index > arr.length - 1) return 0;

    // string[]
    // get each character of the current index
    const chars = arr[index].split(''); // O(26) because each element has max 26 chars

    // represents the length of the longest subsequence
    let choose = 0;
    
    // if counts set already has the character
    // make 'choose' an invalid value
    // checking that there are no repetitions in the element
    chars.forEach((char) => {
      if (counts.has(char)) choose = -Infinity;
    });

    // only choose this arr element if element has no repetitions
    if (choose === 0) {
      chars.forEach((char) => {
        if (counts.has(char)) choose = -Infinity;
        counts.add(char);
      });

      // add the length of the current set of chars
      // to whatever is returned from going down the decision tree
      choose = choose === -Infinity ? -Infinity : chars.length + backtrack(index + 1);

      // clean up the set after adding the characters from 
      // the current array element so you can go down the notChoose path
      chars.forEach((char) => {
        counts.delete(char);
      });
    }

    // second path, don't choose the current element of the array
    // go to the next element
    let notChoose = backtrack(index + 1);
    
    // if either is -Infinity, it will never be the max
    return Math.max(choose, notChoose);
  };

  return backtrack(0);
};
