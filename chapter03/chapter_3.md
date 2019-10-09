# 큐(fifo) - 선입선출
```
function Quene() {
    //프로퍼티와 메소드
}
```
### 메소드
- enqueue() : 뒤쪽에 원소 추가
- dequeue() : 첫번째 원소를 반환하고, 큐에서 삭제
- front() : 첫번째 원소는 반환하되, 큐 자체는 그대로 둠 (참조만 할 뿐)
- isEmpty() : 큐가 비어있다면 true, 그 외는 false
- size() : 큐의 원소 개수를 반환(배열의 length와 같다)
- front() : 큐의 맨앞에 있는 원소가 무엇인지 알고 싶을때
```
this.front = function() {
    return items[0];
}
```
### 스택 클래스 사용법
1. 인스턴스 생성
2. 빈스택인지 확인(이때, 비어있기때문에 결과값은 true)
3. 원소 삽입

### 우선순위 큐
우선순위에 따라 추가되고 삭제된다는 점이 다르다
- 우선순위를 설정해 원소를 정확한 위치에 추가
-  추가는 순서대로 하되, 삭제만 우선순위에 따른다
1. 큐가 비어있다면 그냥 원소 삽입
2. 비어있지 않다면, 우선순위를 비교
2-1. 새원소(더 높다) > 기존원소 우선순위라면 한칸 앞에 새 원소 추가(Arry.splice메소드 사용)
2-2. 새 원소 < 기존 원소 우선순위라면 큐의 맨 뒤에 추가

```function priorityQueue(){

    var items = [];

    function QueueElement (element, priority){
        this. element = element;
        this.priority = priority;
    }
    this.enqueue = function(element, priority){
        var queueElement = new QueueElement(element, priority);
        if (this.isEmpty()){
            items.push(queueElemnt);
        }else{
            var added = false;
            for(var i=0; i<items.length; i++;){
                if(queueElement.priority < items[i].priority){
                    items.splice(i,0,queueElemnt);
                    added=true;
                    break;
                }
            }
            if (!added){
                items.push(queueElement);
            }
        }
    };
```