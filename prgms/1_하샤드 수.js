function solution(x) {
    return  x % x
        .toString()
        .split('')
        .reduce((a, b) => {
            return parseInt(a) + parseInt(b);
        }) === 0;
}
