function solution(n, arr1, arr2) {
    function transToInt2String(int10) {
        let result = '';
        while (int10 > 0) {
            const nmg = int10 % 2 === 1 ? '#' : ' ';
            result = nmg.toString() + result;
            int10 = Math.floor(int10 / 2);
        }
        return result.length < n ? ' '.repeat(n - result.length) + result : result;
    }

    let result = [];
    for (let i = 0; i < n; i++) {
        const line1 = transToInt2String(arr1[i]);
        const line2 = transToInt2String(arr2[i]);
        const finalLine = line1.split('').map((word, index) => {
            if (word === ' ' && line2[index] === ' ') {
                return ' ';
            }
            return '#';
        }).join('');
        result.push(finalLine);
    }
    return result;
}



console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));