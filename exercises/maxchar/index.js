// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const countedChars =  str.split('').reduce((acc, current) => {
		if (!acc[current]) {
			acc[current] = 1;
		} else {
			acc[current]++;
		}
		return acc;
	}, {});

	let max = 0, key;

	Object.keys(countedChars).forEach(k => {
		if (countedChars[k] > max) {
			max = countedChars[k];
			key = k;
		}
	});

	return key;
}

module.exports = maxChar;
