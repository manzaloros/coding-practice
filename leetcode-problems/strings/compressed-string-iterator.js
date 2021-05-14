/* Design and implement a data structure for a compressed string iterator. The
given compressed string will be in the form of each letter followed by a
positive integer representing the number of this letter existing in the original
uncompressed string.

Implement the StringIterator class:

next() Returns the next character if the original string still has uncompressed
characters, otherwise returns a white space.  hasNext() Returns true if there is
any letter needs to be uncompressed in the original string, otherwise returns
false.

Example 1:

Input ["StringIterator", "next", "next", "next", "next", "next", "next",
"hasNext", "next", "hasNext"] [["L1e2t1C1o1d1e1"], [], [], [], [], [], [], [],
[], []] Output [null, "L", "e", "e", "t", "C", "o", true, "d", true]

Explanation StringIterator stringIterator = new
StringIterator("L1e2t1C1o1d1e1"); stringIterator.next(); // return "L"
stringIterator.next(); // return "e" stringIterator.next(); // return "e"
stringIterator.next(); // return "t" stringIterator.next(); // return "C"
stringIterator.next(); // return "o" stringIterator.hasNext(); // return True
stringIterator.next(); // return "d" stringIterator.hasNext(); // return True

Constraints:

1 <= compressedString.length <= 1000 compressedString consists of lower-case an
upper-case English letters and digits.  The number of a single character
repetitions in compressedString is in the range [1, 10^9] At most 100 calls will
be made to next and hasNext. */

// Uncompressing the string approach
/*
  TC: O(n) for constructor
  SC: O(n)

  next() and hasNext are O(1)
*/
class StringIterator {
  constructor(compressedString) {
    const counts = [];
    let numLength = 1;

    for (let i = 0; i < compressedString.length; i += numLength) {
      numLength = 1;
      let j = 1;
      let number = '';
      while (typeof +compressedString[i + j] === 'number' && !Number.isNaN(+compressedString[i + j])) {
        numLength += 1;
        number += compressedString[i + j];
        j += 1;
      }

      j = +number;

      counts.push([compressedString[i], j]);
    }

    this.counts = counts;
  }

  next() {
    if (this.hasNext()) {
      if (this.counts[0][1] > 1) {
        this.counts[0][1] -= 1;

        return this.counts[0][0];
      }

      return this.counts.shift()[0];
    }

    return ' ';
  }

  hasNext() {
    return this.counts.length > 0;
  }
}

class StringIteratorDemand {
  constructor(string) {
    [this.pointer, this.number, this.character, this.string] = [0, 0, ' ', string];
  }

  next() {
    const { length } = this.string;
    if (!this.hasNext()) return ' ';

    // If we are at a new character, and not popping off a repeated character
    if (this.number === 0) {
      this.character = this.string.charAt(this.pointer);

      // Increment the pointer to the next character which will be a number
      this.pointer += 1;
      let nextCharacter = this.string.charAt(this.pointer);

      // While the next character is a number
      while (this.pointer < length
        && !Number.isNaN(nextCharacter) && !Number.isNaN(parseFloat(nextCharacter))) {
        // Add digit to current number
        this.number = this.number * 10 + +nextCharacter;
        this.pointer += 1;

        // Update next character to check
        nextCharacter = this.string.charAt(this.pointer);
      }
    }

    this.number -= 1;
    return this.character;
  }

  hasNext() {
    return this.pointer !== this.string.length || this.number !== 0;
  }
}

// const sI = new StringIterator('G4X10v8G17x15A12c12d6F1A13K3z17U11Z17Z1F5J14L16o18o13M18h20n6R20Y8B5Q3f16C5y2b13W11B10A15p5O20K10v14U1e5k10e12l12E4s18p11');
const sI = new StringIteratorDemand('L10e2t1C1o1d1e1');
sI.next();
// const sI = new StringIterator('z82d333333333');
sI.next();
