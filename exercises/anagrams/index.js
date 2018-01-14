// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const transformString = (str) => str.replace(/[^a-z]*/gi).toLocaleLowerCase().split('').sort().join('');

function anagrams(stringA, stringB) {
	return transformString(stringA) === transformString(stringB);
}
//
// function anagrams(stringA, stringB) {
// 	const countedA = countChars(stringA.replace(/[^a-z]*/gi).toLocaleLowerCase());
// 	const countedB = countChars(stringB.replace(/[^a-z]*/gi).toLocaleLowerCase());
// 	const keysA = Object.keys(countedA);
// 	const keysB = Object.keys(countedB);
// 	if (keysA.length !== keysB.length) {
// 		return false;
// 	}
//
// 	return keysA.every(key => countedA[key] === countedB[key]);
// }
//
// function countChars(str) {
// 	return str.split('').reduce((acc, curr) => {
// 		if (!acc[curr]) {
// 			acc[curr] = 1;
// 		} else {
// 			acc[curr]++;
// 		}
// 		return acc;
// 	}, {});
// }

module.exports = anagrams;
