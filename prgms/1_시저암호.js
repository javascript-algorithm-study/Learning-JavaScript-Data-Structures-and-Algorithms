function solution(s, n) {
    return s.split('').map((str) => {
        if (str !== ' ') {
            const code = str.charCodeAt(0);
            let newCode = code + n;
            if (code >= 65 && code <= 90) {
                if (newCode > 90) {
                    newCode -= 26;
                }
            } else if (code >= 97 && code <= 122) {
                if (newCode > 122) {
                    newCode -= 26;
                }
            }
            return String.fromCharCode(newCode);
        }
        return ' ';
    }).join('');
}
