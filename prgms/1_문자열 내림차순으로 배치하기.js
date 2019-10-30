function solution(s) {
    return s.split('').sort((a, b) => {
        return b.charCodeAt(0) - a.charCodeAt(0);
    }).join('');
}

// sort 사용시 주의점
// 1. number형 요소도 무조건 '문자열'로 검사한다.
// 2. 따라서 반드시 연산자(-, +, * ...)를 사용하여 [양수, 음수, 0]중 하나를 리턴하도록 검사해야 한다.
