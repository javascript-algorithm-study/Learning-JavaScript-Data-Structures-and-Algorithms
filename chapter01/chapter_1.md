1.개요
    변수 : 데이터를 담아두는 곳
        변수에 할당된 값은 특정 타입중 하나(숫자, 문자열, 불린, 함수, 객체)
            * Null은 아무런 값도 없는 상태
            Undefined는 선언은 했으나 아직 값이 할당되지 않음

    변수 스코프 : 변수에 접근할 수 있는 범위(지역변수, 전역변수)
    
    연산자 : 산술(+), 할당(+=), 비교(==), 논리(&&), 비트(&), 단항 연산자
            * type of 연산자는 타입을 반환한다

    Truthy와 Falsy : 참, 거짓
            undefined -> false
            null ->false
            boolean -> true, false
            number -> +0. -0
            string -> 빈 문자열의 경우 false , 이외는 true
            object -> true (객체는 항상 true)
    
    제어구조 : if...else, switch, while, do...while, for
              if : true 일 경우
              if...else : false 일 경우
               * 삼항 연산자로 표현 가능 ex) if (nume === )) {
                                                                num--;
                                                              }else{
                                                                num++;
                                                              } => (num === 1) ? num-- : num++;
              switch : 코드와 조건이 같을 경우 (비교하는 값은 다름)
                        case : 지정된 값이 switch와 같은지 비교
                        break : 그 다음의 코드가 실행되지 않도록 switch문 중단
              for : for(var i=0; i<10; i++){
                  console.log(i);
              }
    함수 : 함수는 인자를 받을 수 있다. (여러개 가능)
            인자 : 함수가 어떤 일을 하기 위해 필요한 변수
    자바스크립트 = 키-값 쌍의 집합
    -생성과 동시에 값을 초기화 할 수 있다 
        객체 : 클래스의 인스턴스
        클래스 : 캑체의 특성을 정의


2.배열
인스턴스 생성, 크기 지정, 초기화 가능 -> 대괄호를 써서 선언하는 것이 좋음

원소의 갯수(length)
console.log(dayOfWeek.length);

대괄호 안에 숫자형 인덱스를 넣으면 특정한 원소에 접근하거나 값을 바꿀 수 있음 ex) console.log(dayOfWeek[1]);

전체 원소를 출력하고 싶다면 루프문 사용

원소 삽입- 마지막 위치(push)
numbers.push(11);
* 앞부분에 원소를 추가하고 싶다면 for문에서 순회하며 위치를 바꾸고, 새로운 값을 첫번째 위치에 할당한다

Array.unshift : 삽입할 값들을 인자로 넘겨준다
pop : 배열 뒷부분의 값을 삭제
shift : 길이와 값 둘다 삭제
splice : 특정 원소 삭제/삽입
    ex) numbers.splice (5,3);
                        어디서, 몇개
        numbers.splice (5,0,2,3,4);
                        어디서,삭제x, 추가할 원소

2차원/다차원 배열 : 행, 열을 사용
ex)averageTemp [0] [4] = 81;

contact : 각 배열을 루프로 반복해서 원소를 하나하나 결과 배열에 담음
    ex)var Numbers = negativeNumbers.contact (zero. positiveNumbers);
    -> zero가 negative에 병합, 그 뒤에 positive에 병합

every : 함수의 결과 값이 false가 될때까지 배열의 모든 원소를 반복
every : 함수의 결과 값이 true가 될때까지 배열의 모든 원소를 반복
isEven : false를 반환
forEach : 조건에 상관없이 모든 원소를 반복
filter : 함수의 결과값을 true로 만드는 원소로만 구성
reduce : 모든 배열 원소 값의 총합을 구할때 사용 ex)number.reduce(function(previous, current, index){
                                                        return previous +current;
                                                    });
reverse : 배열 원소 순서를 거꾸로
sort : 정렬 (모든 원소를 문자열로 취급) -> 교재의 예제처럼 숫자일 경우 비교함수로 비교
       문자열 정렬에선 아스키 값으로 비교(대문자 우선) -> comparFunction사용 (대소문자 구별없음)

비교함수 : function compare(a,b){
    if (a < b){
        return -1;
    }
    if (a > b){
        return 1;
    }
    return 0;
}

검색 : indexOf, lastIndexOf
단일 문자열 변경 : toString
