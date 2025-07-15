/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 * This method isn't as good as the one below because it doesn't account for if ā is a delimiter in the original strings
 */
const encode = (strs) => strs.map((string) => `${string}ā`).join('');

/**
* Decodes a single string to a list of strings.
*
* @param {string} s
* @return {string[]}
*/
const decode = (s) => {
  const arr = s.split('ā');
  return arr.slice(0, arr.length - 1);
};

/**
* Your functions will be called as such:
* decode(encode(strs));
*/
const encodeChunk = (strings) => (
  // calculate length of string and output as 4 byte string (0003) for length 3.
  strings.map((string) => {
    const { length } = string;
    const padded = String(length).padStart(4, '0');
    return padded + string;
  }).join('')

  // append that length to the string
  // output for each string
  // looks like '0003foo0003bar' for ['foo', 'bar']
);

const decodeChunks = (string) => {
  let i = 0;
  const output = [];

  while (i < string.length) {
    // Get length of upcoming string and increment i to beginning of that
    // string. This will always be 4 because we padded it earlier. Make sure to
    // convert it to a string
    const length = Number.parseInt((string.substring(i, i + 4)), 10); // substring is better supported than 'substr'
    i += 4;

    // Push to the output the string, which you know the length because you just
    // built it. Increment i by the length to get to the next size of the chunk
    // delimiter
    output.push(string.substring(i, i + length));
    i += length;
  }

  return output;
};

const string = encodeChunk(['Hello', 'World']);
decodeChunks(string);
