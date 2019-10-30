function solution(num) {
    let attempt = 0;
    while (num > 1) {
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        if (attempt > 500) {
            break;
        }
        attempt++;
    }
    return num === 1 ? attempt : -1;
}


/**
 * 다른 사람 코드 1
 * @param num
 * @returns {number}
 */
function solution(num) {
    let answer = 0;
    while(num !== 1 && answer !== 500){
        num%2 === 0 ? num = num / 2 : num = num * 3 +1;
        answer++;
    }
    return num === 1 ? answer : -1;
}

// 1. 케이스가 명백히 2가지로 나뉘는 경우, 삼항연산자가 깔끔하다.
// 2. while문의 조건을 잘 설정해, break관련 로직이 필요 없다.


/**
 * 다른 사람 코드 2
 * @param num
 * @param count
 * @returns {number}
 */
function solution(num) {
    function collatz(num, count = 0) {
        return num === 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 === 0 ? num / 2 : num * 3 + 1, ++count);
    }
    return collatz(num);
}

// 재귀함수
