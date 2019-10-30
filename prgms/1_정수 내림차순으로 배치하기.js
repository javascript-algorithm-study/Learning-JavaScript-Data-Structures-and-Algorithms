function solution(n) {
    return n.toString().split('').sort((a, b) => {
        return parseInt(a) < parseInt(b);
    }).join('');
}
