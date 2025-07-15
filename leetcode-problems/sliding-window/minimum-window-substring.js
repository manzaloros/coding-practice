const minWindow = (s, t) => {
	const getFreq = (map, char) => map.set(char, (map.get(char) || 0) + 1);
	const tFreq = t.split("").reduce(getFreq, new Map());
	/*
    counter counts the total number of chars in t that are NOT in the window.
  */
	let [start, end, counter, minStart, minLen] = [
		0,
		0,
		t.length,
		0,
		Number.POSITIVE_INFINITY,
	];

	const { length } = s;

	while (end < length) {
		const endChar = s[end];
		const endCharFreq = tFreq.get(endChar);
		/*
      Every time you see a character that was in t, it's freq will be positive.
      Decrement the counter because now the window has a char from t in it.
    */
		if (endCharFreq > 0) counter -= 1;

		/*
      Any chars that aren't in t will have negative freq in the window
    */
		tFreq.set(endChar, (endCharFreq || 0) - 1);
		end += 1;

		/*
      When the window contains all characters of t, check if the size of the
      window is less than the minimum length you've found so far. If it is, make
      the current start the minimum start. Start will be updated in the same
      loop so you want to make sure that you record the correct index of this
      window.

      Then, increase the freq of your start char in the window. This seems
      backwards because normally you would want to decrease a freq in a window
      when shrinking it, but here you see that if a char freq ever is greater
      than 0, that means that a char from t just left the window. You increase
      your counter of chars of t not in window when this happens.
    */
		while (counter === 0) {
			const startChar = s[start];

			if (end - start < minLen) {
				minStart = start;
				minLen = end - start;
			}

			tFreq.set(startChar, tFreq.get(startChar) + 1);

			if (tFreq.get(startChar) > 0) counter += 1;

			start += 1;
		}
	}

	// substr method here!!! Returns from the index to however many characters forward
	return minLen !== Number.POSITIVE_INFINITY ? s.substr(minStart, minLen) : "";
};

minWindow("ADOBECODEBANC", "ABC");
