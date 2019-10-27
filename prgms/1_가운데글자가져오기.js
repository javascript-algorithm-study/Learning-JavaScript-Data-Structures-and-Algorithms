
function solution(s) {
	const {length} = s;
	let isBool = length % 2 ? true : false;

	return isBool ? s[Math.floor(length / 2)] : s[(length / 2) - 1] + "" + s[length / 2];
}