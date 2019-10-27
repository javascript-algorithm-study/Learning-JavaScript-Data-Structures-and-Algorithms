/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are arrbers, the score is the sum of the two. If only one is a arrber, the score is that arrber. If neither is a arrber, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the arrber of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/

function explode(x) {
	const [arr1, arr2] = x;
	const isBoolFirst = typeof arr1 === 'number';
	const isBoolSecond = typeof arr2 === 'number';

	let newArr = [];
	let totalLen = 0;

	if (isBoolFirst && !isBoolSecond) {
		totalLen += arr1;
	} else if (!isBoolFirst && isBoolSecond) {
		totalLen += arr2;
	} else if (isBoolFirst && isBoolSecond) {
		totalLen += (arr1 + arr2);
	} else {
		return 'Void!';
	}

	for (let i = 0; i < totalLen; i++) {
		newArr.push([arr1, arr2]);
	}

	return newArr;
}