/**
 * Time: O(words.length * longest word.length)
 * Space: O(order.length)
 */
const isAlienSorted = (words, order) => {
	const map = order.split("").reduce((m, curr, i) => {
		m.set(curr, i);
		return m;
	}, new Map());

	for (let i = 1; i < words.length; i += 1) {
		const [first, second] = [words[i - 1], words[i]];
		const [shorter, longer] = [first, second].sort(
			(a, b) => a.length - b.length,
		);
		if (longer.includes(shorter) && longer !== shorter) {
			if (longer === first) return false;
			else continue;
		}
		for (let j = 0; j < shorter.length; j += 1) {
			const firstChar = first[j];
			const secondChar = second[j];
			if (map.get(firstChar) > map.get(secondChar)) return false;
			else if (map.get(firstChar) < map.get(secondChar)) break;
		}
	}

	return true;
};
