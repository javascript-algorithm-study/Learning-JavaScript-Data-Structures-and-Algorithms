function solution(n) {
    return n.toString().split('').sort((a, b) => b - a).map((num) => parseInt(num));
}
