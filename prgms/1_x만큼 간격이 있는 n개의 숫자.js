function solution(x, n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push((i + 1) * x);
    }
    return answer;asdas
}


/**
 * 다른 사람 코드
 * @param x
 * @param n
 * @returns {number[]}
 */
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v);
}

// Array(n)을 하면 n만큼 빈 배열이 생긴다.
// (이를 fill과 활용해 )
