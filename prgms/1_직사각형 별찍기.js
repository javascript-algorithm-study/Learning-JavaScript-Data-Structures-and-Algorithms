function solution(data) {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let line = '';
    for (let i = 0; i < a; i++) {
        line += '*';
    }
    for (let i = 0; i < b; i++) {
        console.log(line);
    }
}


/**
 * 다른 사람 코드
 * @param data
 */
function solution(data) {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const line = '*'.repeat(a);
    for (let i = 0; i < b; i++) {
        console.log(line);
    }
}

// repeat(n) : 문자열을 'n'번 반복해 리턴해준다.
