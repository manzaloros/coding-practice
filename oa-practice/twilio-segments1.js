const splitMessage = (message) => {
  if (message.length <= 160) return message;

  let [answer, segment] = [[], ''];

  return message
    .split(' ')
    .forEach((word, i, arr) => {
      const segmentWithWord = segment.length + word.length;

      if (segmentWithWord === 154 || segmentWithWord === 155) {
      // Need to add space to next segment. 154 because word + 1 (for space)
      // will be 155. 155 is if the segment and word won't be able to include
        segment += word;
        answer.push(segment);
        segment = ' ';
      } else if (segmentWithWord > 155) {
      // Word makes segment too long, so add it to next segment
        answer.push(segment);
        segment = `${word} `;
      } else if (i === arr.length - 1) {
      // If this is the last word, add it to the segment without a space
        segment += word;
        answer.push(segment);
      } else {
        segment += `${word} `;
      }
    })
    .map((s, i) => `${s}(${i + 1}/${answer.length})`);
};

// splitMessage('eseses seseseseseseses tntntntntntn riririririri tetetetetete fefefefefefefefefefefef itititittiitit isisisissisisisisisi enteneenne tntntntnnt ntntnteses esetntntesese sesesent');
// splitMessage('justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu justo pono mira tora');
splitMessage(`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
in, viverra quis, feugiat a, tellus`);
// splitMessage('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.');
