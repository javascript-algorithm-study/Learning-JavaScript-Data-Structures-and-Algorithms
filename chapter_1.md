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