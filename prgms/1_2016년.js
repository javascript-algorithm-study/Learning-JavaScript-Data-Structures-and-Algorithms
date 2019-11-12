function solution(a, b) {
    let answer;
    const days = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    const dates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalRemain = 0;

    for (let i = 0; i < a - 1; i++) {
        totalRemain += dates[i];
    }

    totalRemain += b;
    answer = days[(totalRemain - 1) % 7];

    return answer;
}
