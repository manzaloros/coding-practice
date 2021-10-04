/*
  Check if both strings are same length.

  Check if concatting the first string with itself includes the second string,
  like:

      s2
      -----------
  ilovedonutsilovedonuts includes 'donutsilove' ? yes

      s2
      -----------
  ilovedonutsilovedonuts includes 'donutslovei' ? no
*/
// O(n) time, O(n) space
const isRotated = (s1, s2) => s1.length === s2.length && s1.concat(s1).includes(s2);

isRotated('ilovedonuts', 'donutsilove'); // true
isRotated('ilovedonuts', 'donutslovei'); // false
