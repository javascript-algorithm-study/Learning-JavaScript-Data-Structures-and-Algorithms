function solution(phone_number) {
    return phone_number.split('').map((num, i) => i < phone_number.length - 4 ? '*' : num).join('');
}


/**
 * 다른 사람 코드
 * @param phone_number
 * @returns {string}
 */
function solution(phone_number){
    return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 1. slice의 매개변수로 음수를 넣게되면, 끝을 기준으로 선택된다.
// 2. repeate() 함수
