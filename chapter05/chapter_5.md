# 집합
1. 정렬되지 않은 컬렉션(원소는 반복되지 않는다)
2. 합집합, 교집합, 차집합같은 수학적 연산도 가능하다
3. 배열이 아닌 객체로 집합을 표현한다

### 집합 만들기
```
function Set(){
    var items = ();
}
```
### 메소드
- add(원소) : 원소 추가
- remove(원소) : 원소 삭제
- has(원소) : 어떤 원소가 집합에 포함되어 있는지의 여부 (true/false)
- clear() : 모든 원소를 삭제
- size() : 원소의 개수를 반환, 
- values() : 집합의 모든 원소를 배열의 형태로 반환

## has
```
this.has = function(values){
    return value in items;
};
또는
this.has = function(value){
    return items.hasOwnProperty(value);  //자바스크립트 객체는 hasOwnProperty를 상속한다는 사실을 응용
};
```

## add
```
this.add = function(value){
    if(!this.has(value)){ //이미 집합에 포함되어 있는지를 먼저 확인
        items[value] = value;
        return true; //없는  원소라면
    }
    return false; //이미 있는 원소
}
```

## remove / clear
```
this.remove = function(value){
    if (this.has(value)){ //삭제할 원소가 집합에 있는지 확인
        delete items[value];
        return true; //원소를 삭제하고 true를 반환
    }
    return false; //그 외의 경우
}
```

## clear / size
```
this.clear = function(){
    items = {};
};
this.size = function(){
    return Object.keys(items).length;
};
//오래된 브라우저에서도 돌아가게
this.sizeLeqacy = function(){
    var count = 0;
    for (var prop in items){
        if(items.hasOwnProperty(prop))
        ++count;
    }
    return count;
};
```

## values
```
this. values = function(){
    return Object.keys(items);
};
//오래된 브라우저에서도 돌아가게
this.valuesLegacy = function(){
    var keys = [];
    for(var key in items){
        keys.push(key);
    }
    return keys;
};
```

# 집합 연산
- 합집합, 교집합, 차집합, 부분집합(어떤 집합이 다른 집합의 일부인지)

## 합집합
```
this.union = function(otherSet){
    var unionSet = new Set();   //unionSet이라는 합집합 생성

    var values = this.values();     //첫번째 집합의 value 메소드로 모든 원소를 추출한 뒤 루프로 반복하면서 unionSet에 추가
    for (var i=0; i<values.length; i++){
        unionSet.add(values[i]);
        }
        values = otherSet.values();     //두번째 집합에도 추가한 뒤 unionSet을 반환
        for (var i=0; i<values.length; i++){
            unionSet.add(values[i]);
        }
        return unionSet;
}
```

## 교집합
```
this.intersection = function(otherSet){     //교집합 생성
    var intersectionSet = new Set();

    var values = this.values();
    for (var i=0; i<values.length; i++){    //현재 인스턴스의 모든 원소를 values메소드로 모든 원소를 루프로 순회
        if (otherSet.has(values[i])){   //각 원소가 다른 otherSet에도 존재하는지 조사(has로 조사)
            intersectionSet.add(values[i]);
        }
    }
    return intersectionSet;
}
```
## 차집합
```
this.difference = function(otherSet){
    var differenceSet = new Set();
    var values = this.values();
    for (var i=0; i<values.length; i++){
        if (!otherSet.has(values[i])){  //a에만 있고 b에는 없는 원소를 가려낸다
            differenceSet.add(values[i]);
        }
    }
    return.diffenrenceSet;
}
```
## 부분집합
```
this.sunset = function(otherSet){
    return false;
} else{
    var values = this.values();
    for(var i=0; i <values.length; i++){    //원소 순회
        if (!otherSet.has(values[i])){  //this가 others보다 많으면 안된다, 존재 하는지 확인
            return false;   //하나라도 otherSet에 존재하지 않으면 부분집합이 아니다 ->false
        }
    }
    return true;    //루프가 정상조료했다면, 원소가 하나라도 있다는 것
}

```
