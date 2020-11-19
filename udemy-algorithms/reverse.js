/* Reverse string with recursion */

const reverse = (str, index = str.length - 1) => {
  return index === 0 ? str[0] : str[index].concat(reverse(str, index - 1));
}

/*  cat. Index starts at 2
't'.concat()
          index is 1
          'a'.concat()
                    index is 0
                    'c'
*/

console.log(reverse('awesome'));