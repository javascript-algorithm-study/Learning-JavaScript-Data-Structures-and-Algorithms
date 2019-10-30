function solution(n, lost, reserve) {
    const countList = '1'.repeat(n).split('').map((a) => {return parseInt(a);});
    lost.forEach((a) => {countList[a - 1]--;});
    reserve.forEach((a) => {countList[a - 1]++;});
    countList.forEach((count, i) => {
        if (count === 2) {
            if (countList[i - 1] === 0) {
                countList[i]--;
                countList[i - 1]++;
            } else if (countList[i + 1] === 0) {
                countList[i]--;
                countList[i + 1]++;
            }
        }
    });
    let result = 0;
    countList.forEach((count) => {
        if (count >= 1) {
            result++;
        }
    });
    return result;
}

// 탐욕법(Greedy): 기회가 있을때 바로 넣는게 최선일 수 있다.
