
# 스택(lifo) - 후입선출

종단점 : top(최근), base(오래됨)

### 메소드
- push(): top에 원소 추가
- pop() : top원소 반환, 해당 원소는 스택에서 삭제
- peek() : top원소 반환, 스택 변경x -> 마지막으로 추가된 원소를 확인하는 용도
- isEmpty() : 원소가 하나도 없다면 true, 크기가 0보다 크면 false
- clear() : 모든 원소 삭제
- size() : 원소 개수를 반환

### 스택 클래스 사용법
1. 인스턴스 생성
2. 빈스택인지 확인(이때, 비어있기때문에 결과값은 true)
3. 원소 삽입

### 10진수 ->2진수
```function divideBy2(decNumber){

    var remStack = new Stack(),
    rem,
    binaryString = '';

    while (decNumber > 0){
        rem = Math.floor (decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()){
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
```
2가 아닌 다른 수로 나누면 이외의 진법으로 가능
하지만 나머지 값이 달라지기 때문에 로직이 추가 되어야함
