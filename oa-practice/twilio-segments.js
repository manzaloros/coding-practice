/*
Given a text message break the string into segments. The text message can only
be broken between words, not inbetween any punctiation. Valid characters are
(a-z), ",", ".".

A segment is defined as having a max of 160 characters including its suffix. A
suffix is written as (1/3), (2/3), (3/3) for a 3 segment message.

The tricky part is deciding where to put the space on some segments. Since a
segment is 160 characters and 5 of those are taken up by the suffix then if the
current segment is only 155 away from the previous then you have to not have the
space on the current segment and add it to the next one.  Example inputs: Lorem
ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus

Output:

"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis (1/5)"

"parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
pede(2/5)"

" justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
(3/5)"

"mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, (4/5)"

"consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
quis, feugiat a, tellus(5/5)"

Another Example: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aenean commodo ligula eget dolor. Aenean massa.

Output:

"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
eget dolor. Aenean massa."

Notice no suffix, if it is only one segment, no suffixes need.  Last Example:
Input:

justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu justo pono

Output:

"justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus
ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu justo pono(1/2)"
" mira tora(2/2)"

The format they wanted this was a little weird and annoying. They wanted newline
characters between each segment which took me 40mins to figure out and really
took away from actually solving the problem because I didn't realize newline
characters account for a length of 1. My thought process for this was to iterate
through the string jumping by segments of essentially 160 but really 155 + 5 + 1
so 161. 155 for characters, 5 for the suffix, and 1 for the newline character.
From there I would iterate backwards in the string until I found a space. If I
did, I inserted the suffix and newline char. Only tricky part was where to put
the space. If I did not iterate backwards at all then the space was going in the
next segment, if I had iterated back at least once while looking for a space on
a given segment then the space was going in the current segment before the
suffix.

To find the denominator of the suffix, they specified that "$" were not valid
characters in a text message so I iterated through the string to find how many
segments there were then went back and replace the $ with my count of segments.

given: string rep. text message

output: string formatted the way they want
*/

const getSegments = (message) => {
  if (message.length <= 160) return message;

  let segments = [];
  let segment = '';

  const words = message.split(' ');

  words.forEach((word, i) => {
    const { length } = segment;
    const { length: wLength } = word;

    const lengthWithWord = length + wLength;
    // add segment, make new segment start with space
    if (lengthWithWord === 155) {
      segment += word;
      segments.push(segment);
      segment = ' ';
    } else if (lengthWithWord === 154) {
      // add word and space to segment, make empty new segment
      segment += `${word} `;
      segments.push(segment);
      segment = '';
    } else if (lengthWithWord > 155) {
      // add segment and make word the start of the new segment
      segments.push(segment);
      segment = `${word} `;
    } else if (i !== words.length - 1) {
      segment += `${word} `;
    } else {
      segment += word;
    }
  });

  // add leftover segment
  if (segment.length > 0) segments.push(segment);

  const deno = segments.length;

  segments = segments.map((s, i) => `${s}(${i + 1}/${deno})`);

  let output = segments.join('\n');

  console.log(output);
  return output;
};

const getSegmentsAlternate = (message) => {
  const { length } = message;

  if (length <= 160) return message;

  let count = 1;
  let currIndex = 155;

  let extraSpace = 0;

  while (currIndex < length) {
    if (message[currIndex] === ' ') {
      let suffix = `(${count}/$)`;

      message = `${message.slice(0, currIndex + extraSpace)}${suffix}\n${message.slice(currIndex + extraSpace)}`;

      count += 1;

      currIndex += 161 + extraSpace;
      extraSpace = 0;
    } else {
      extraSpace = 1;
      currIndex -= 1;
    }
  }

  let suffix = `(${count}/$)`;
  message += suffix;

  message = message.replace(/\$/g, `${count}`);
  return message;
};

// getSegments('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
// commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
// magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
// ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
// enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
// enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
// felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
// elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
// porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
// in, viverra quis, feugiat a, tellus');

// getSegments('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.');

getSegmentsAlternate('justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu justo pono mira tora');
