/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
let encode = function (strs) {
  return strs.map((string) => `${string}ā`).join('');
};

/**
* Decodes a single string to a list of strings.
*
* @param {string} s
* @return {string[]}
*/
let decode = function (s) {
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
);

const decodeChunks = (string) => {
  let i = 0;
  const output = [];

  while (i < string.length) {
    // Get length of upcoming string and increment i to beginning of that
    // string. This will always be 4 because we padded it earlier. Make sure to
    // convert it to a string
    let length = +(string.substring(i, i + 4));
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
