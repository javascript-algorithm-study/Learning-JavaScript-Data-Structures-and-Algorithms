/*
	You are going to be given a word. Your job is to return the middle character of the word. 
	If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

	ex)
	Kata.getMiddle("test") should return "es"

	Kata.getMiddle("testing") should return "t"

	Kata.getMiddle("middle") should return "dd"

	Kata.getMiddle("A") should return "A"
*/

function getMiddle(s) {
	const arr = s.split('');
	const arrLen = arr.length;
	const arrRest = arrLen % 2;
	const arrDivide = Math.floor(arrLen / 2);

	return (
		arrRest
			?
			//odd
			arr[arrDivide]
			:
			//even
			arr[arrDivide - 1] + arr[arrDivide]
	)

}