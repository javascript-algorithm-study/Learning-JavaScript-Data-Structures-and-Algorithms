# 연결리스트(동적인 자료구조)
1. 원소 : 원소 자신 + 노드(다음 원소를 가르키는 참조 정보(포인터, 링크))
2. 추가/삭제 시 다른원소를 이동하지 않아도 된다
3. 원소를 찾기 위해선 루프를 반복(배열은 특정 원소에 틴덱스로 바로 접근 가능)
4. 마지막 노드의 next는 항상 null

### 연결리스트 만들기
```
function LinkedList() {
   var Node = function(element){
       this.element = element;
       this.next = null;
   }
}
```
### 메소드
- append(원소) : 리스트이 맨 끝에 원소를 추가
- insert(위치, 원소) : 해당 위치에 원소를 삽입
- remove(원소) : 원소를 삭제
- indexOf(원소) : 해당 원소의 인덱스를 반환(존재하지 않을 경우 결과값은 -1)
- removeAt(위치) : 해당 위치에 있는 원소를 삭제
- isEmpty() : 원소가 하나도 없다면 true, 이외는 false
- size() : 원소의 갯수를 반환, (length의 프로퍼티와 비슷)
- toString : 원소의 값만을 출력하려면 기본 객체로 부터 상속한 toString  메소드를 재정의 해야함

## 리스트 끝에 원소 추가(빈연결리스트 인지 / 원소가 들어가있는지(append))
```
this. append = function(element){
    var node = new Node (element),  //노드를 생성
    current;    // 현재 원소를 담아둔다
    if (heade === null){
        head = node;
    }else{
        current = head;
        while(current.next){    //current.next가 null이 되는 시점에 루프를 끝낸다
            current = current.next;
        }
        current.next = node;    //새로 넣을 원소를 current.next에 넣는다
    }
    length++;   //리스트 크기를 증가시켜줌
};
```

## 리스트 삭제(삭제하려는 원소가 리스트의 첫번째인지 / 아닌지)(removeAt))
```
this.removeAt = function(position){
    if(position > -1 && position<length){   //삭제할 원소가 리스트에 있는지
        var current = head,
        previous,
        index = 0;
        if(position === 0){
            head = current.next;
        }else{
            while(index++ < position){
                previous = current;     //previous.next=current.next를 하면 current는 지워진다
                current = current.next;
            }previous.next = current.next;      //마지막 원소를 삭제하는 경우, 어차피 current.next는 null이다
        }                                       //previous.next를 curren.next에 넣으면 저절로 삭제된다
        length --;
        return current.element;
    }else{
        return null;
    }
};
```

## 임의의 위치에 원소 삽입(insert)
```
this.insert = function(position, element){
    if (position >=0 && position <= length){
        var node = new Node (element),
        current = head,
        previous,
        index=0;
        if (position === 0){
            node.next = current;    //node가 current를 가르키기 때문에 변경
            head = node;
        }else{
            while (index++ < position){     //원하는 위치까지 루프 반복
                previous = current;
                current = current.next;
            }
            node.next = current;
            previous.next = node;
        }
            length++;
            return true;
    }else{
        return false;   //범위를 벗어났다면 false를 반환해줌으로써 아무것도 추가되지 않음을 분명히 해준다
    }
};
```

## toString
```
this.toString = function(){
    var current = head;
    string = '';    //결과를 담아둘 변수를 초기화

    while (current){
        string += current.element;
        current = current.next;
    }
    return string;
}
```

## indexOf
```
this.indexOf = function(element){
    var current = head,
    index = -1;     //없는 원소라면 -1을 반환
    
    while (current){
        if (element === current.element){   //인자로 받은 원소값과 일치하는지 
            return.index;   //일치할 경우, 원소를 반환
        }
        index++;    //일치하지 않으면 index증가
        current = current.next;     //null이 되면 루프가 끝난다
    }
    return -1;
};
```

# 이중연결리스트
1. 다음노드와 이전 노드 2개의 연결 정보를 이중으로 가지고 있다
2. 양방향으로 리스트 순회 가능

## 임의의 위치에 원소 삽입
```
this.insert = function(position, element){
    if (position >= 0 && position <= length){
        var node = new Ndoe(element), 
        current = head,
        previous,
        index = 0;

        if (position === 0){
            if (!head){     //head와 tail이 삽입할 노드를 가르킴
                head = node;
                tail = node;
            }else{
                node.next = current;
                current.prev = node;
                head = node;
                }
            }else if (position == length){
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            }else{
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };

```

## 원소삭제
```
this.removeAt = function(position){
    if (position > -1 && position < length){
        var current = head,
        previous,
        index = 0;

        if (position === 0){
            head = current.next;
            
            if (length === 1){
                tail = null;
            }else{
                head.prev = null;
            }
        }
    }else if (position === lengtt-1){
        current = tail;
        tail = current.prev;
        tail.next = null;
    }else{
        while (index++ < position){
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
    }
    length --;
    return current.element;
}else{
    return null;
}
```

## 환형 연결리스트
1. 단방향 또는 양방향 참조정보를 갖는다(마지막 원소가 null이 아닌 첫번째 원소를 가르킴)

## 이중 환형 연결리스트
tail.next가 head를, head.prev가 tail을 상호 참조