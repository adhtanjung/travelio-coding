function isPalindrome(str) {
	str = str.toLowerCase();

	// if only 1 letter, returns true
	if (str.length <= 1) {
		return true;
	}

	// divide by 2 so you saved half of the time
	for (let i = 0; i < Math.floor(str.length / 2); i++) {
		const firstChar = str[i];
		const lastChar = str[str.length - i - 1];

		if (firstChar !== lastChar) {
			return "not palindrome";
		}
	}
	return "palindrome";
}

console.log(`
--- IS PALINDROME ---
`);
console.log("isPalindrome('racecar'):", isPalindrome("racecar"));
console.log("isPalindrome('bringback'):", isPalindrome("bringback"));
console.log("isPalindrome('neveroddoreven'):", isPalindrome("neveroddoreven"));
console.log("isPalindrome('carisonrace'):", isPalindrome("carisonrace"));

console.log("--------");
