var isPalindrome = (s) => {
	const isAlphaNumeric = (char) =>
		(char >= "a" && char <= "z") || (char >= "0" && char <= "9");
	const inBounds = (i, j) => i <= j;

	for (let i = 0, j = s.length - 1; inBounds(i, j); i += 1, j -= 1) {
		while (!isAlphaNumeric(s[j]) && inBounds(i, j - 1)) j -= 1;
		while (!isAlphaNumeric(s[i]) && inBounds(i + 1, j)) i += 1;

		if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
	}
	return true;
};

isPalindrome("A man, a plan, a canal: Panama");
