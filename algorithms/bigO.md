# bigO

spoiled it

consistent : 일관된
concrete example : 구체적인 예
precise : 정확한
that can be measured isn't good enough then it doesn't really help us. : 측정 할 수있는 것만으로는 충분하지 않으며 실제로 우리에게 도움이되지 않습니다.
where this is derived from I'm not going to go into. : 이것은 내가 가지 않을 것입니다.
So I want to be clear I'm not saying that timing your code is a bad idea. : 그래서 코드의 타이밍을 맞추는 것이 좋지 않다는 것을 분명히하고 싶지 않습니다.

## 시간 체크

- 2개의 코드가 있는데 어떻게 좋은지 체크체크체크
- 우선 속도부터 보자

function addUpTo(n) {
  var total = 0;
  for ( var i = 0; i <= n; i++) {
    total += i;
  }
  return total
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/ 1000} seconds.`)  

function addUpTo(n) {
  return n * (n + 1) / 2;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/ 1000} seconds.`)  


## 연산자 체크

function addUpTo(n) {
  return n * (n + 1) / 2;
}

- 연산자 3개 깔아아알끔

function addUpTo(n) {
  var total = 0; // 1 assignment
  for ( var i = 0; i <= n; i++) { // 1assignment, n comparisons, n additions and n assignments
    total += i; // n additions n assignments
  }
  return total

- 최대일때 5n + 2  n이 10일때 연산자 52개
- n이 커질때마다 계속계속 커진다.

## 시간복잡도

- 연산자 3개일때는 그래프가 상수 가로로 쭉~
- 5n+2 연산자일때는 왼쪽하단부터 오른쪽상단으로 이어주는 대각선 쭉