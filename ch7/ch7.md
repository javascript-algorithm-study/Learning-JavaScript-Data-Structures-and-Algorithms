# 자바스크립트 자료구조와 알고리즘

## ch7.딕셔너리와 해서

- 유일한 값을 저장하기 위한 자료구조이며 `키, 값` 형태로 저장

### 딕셔너리

- ES6에 `Map`
- `SET`은 `[키, 키]`
- `MAP`은 `[키, 값]`

```javascript
function Dictionary() {
  var items = {};
}
```

#### has와 set 메소드

```javascript
this.has = function(key) {
  return key in items;
};

this.set = function(key, value) {
  items[key] = value;
};
```

#### remove 메소드

```javascript
this.remove = function(key) {
  if (this.has(key)) {
    delete items[key];
    return true;
  }
  return false;
};
```

#### get과 values 메소드

```javascript
this.get = function(key) {
  return this.has(key) ? items[key] : undefined;
};

this.values = function() {
  var values = [];
  for (var k in items) {
    if (this.has(k)) {
      values.push(items[k]);
    }
  }
  return values;
};
```

#### clear, size, keys, getItems 메소드

```javascript
this.clear = function(value) {
  items = {};
};

this.size = function() {
  return Object.keys(items).length;
};

this.keys = function() {
  var keys = [];
  for (var k in items) {
    if (this.has(k)) {
      keys.push(k);
    }
  }
  return keys;
};

this.getItems = function() {
  return items;
};
```

### 해시 테이블

- 해싱(hasing)은 자료구조에서 특정 값을 가장 신속하게 찾는 방법

#### 해시 테이블 만들기

``` javascript
function HashTable() {
  var table = [];

  var loseloseHasCode = function(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.put = function (key, value) {
    var position = loseloseHashCOde(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  }

  this.get = function (key) {
    return table[loseloseHashCode(key)];
  };

  this.remove = function (key) {
    return table[loseloseHasCode(key)] = undefined;
  }
}
```

### 해시 테이블과 해시 집합 비교

- 해시 테이블(hash map), 해시 집합(hash set)
- 키-값 쌍이 아닌, 값만 넣는 해시 집합!

#### 해시 테이블 간 충돌 해결

``` javascript
var hash = new HashTable();
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'Aaron@email.com');
hash.put('Jonathan', 'jonathan@gmail.com');
hash.put('Jamie', 'jamie@gmail.com');
hash.put('Sue', 'sue@gmail.com');

hash.print();

16 - Tyrion
16 - Aaron
5 - Jonathan
5 - Jamie
5 - Sue
5: sue@gmail.com
16: Aaron@email.com
```

- 해쉬 함수 값이 같은 경우 마지막것만 저장된다.
- 말도 안되니깐 체이닝, 선형탐사, 이중 해싱 3가지 방법으로 처리해보자.
- 여기선 이중 해싱은 안한다.

### 체이닝

- 같은 해시값이 있으면 `LinkList`연결리스트를 사용

``` javascript
var ValuePair = function(key, value) {
  this.key = key;
  this.value = value;

  this.toString = function() {
    return `[${this.key} - ${this.value}]`
  }
}
```

#### put 메소드

``` javascript
  this.put = function (key, value) {
    var position = loseloseHasCode(key);

    // 원소가 없으면 링크드리스트 만듬
    if (table[position] == undefined) {
      table[position] = new LinkedList();
    }
    // 원소가 있으면 링크드리스트의 append를 사용
    table[position].append(new ValuePair(key, value));
  }
```

#### get 메소드

``` javascript
this.get = function(key) {
  var position = loseloseHashCode(key);

  if(table[position] !== undefined) {
    var current = table[position].getHead();

    while(current.next) {
      if(current.element.key === key) {
        return current.element.value;
      }
      current = current.next;
    }

    if (current.element.key === key) {
      return current.element.value;
    }
  }
  return undefined;
}
```

#### remove 메소드

``` javascript
this.remove = function(key) {
  var position = loseloseHashCOde(key);

  if (table[position] !== undefined) {
    var current = table[position].getHead();
    while(current.next) {
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
      current = current.next;
    }

    if(current.element.key === key) {
      table[position].remove(current.element);
      if (table[position].isEmpty()) {
        table[position] = undefined;
      }
      return true;
    }
  }
  return false;
}
```

### 선형 탐색법

- 새 원소 추가 시 인덱스가 이미 점유된 상태라면 인덱스 +1를 찾아보고, 여기도 점유되어있으면 +2를 찾는다.

#### put메소드

``` javascript
this.put = function(key, value) {
  var position = loseloseHashCode(key);

  if (table[position] == undefined) {
    table[position] = new ValuePair(key.value);
  } else {
    var index = ++position;
    // 해당 index가 내용이 있으면 다음 인덱스 탐색
    while (table[index] != undefined) { 
      index++;
    }
    table[index] = new ValuePair(key, value);
  }
};
```

#### get 메소드

``` javascript
this.get = function(key) {
  var position = loseloseHashCode(key);

  if(table[position] !== undefined) {
    if (table[position].key === key) {
      return table[position].value;
    } else {
      var index = ++position;
      while (table[index] === undefined || table[index].key !== key) {
        index++;
      }
      if (table[index].key === key) {
        return table[index].value;
      }
    }
  }
  return undefined;
}
```

#### remove 메소드

``` javascript
this.get = function(key) {
  var position = loseloseHashCode(key);

  if(table[position] !== undefined) {
    if (table[position].key === key) {
      table[index] = undefined;
    } else {
      var index = ++position;
      while (table[index] === undefined || table[index].key !== key) {
        index++;
      }
      if (table[index].key === key) {
        table[index] = undefined;
      }
    }
  }
  return undefined;
}
```

### 해시 함수 개선

``` javascript
var djb2hashCode = function (key) {
  var hash = 5381;
  for (var i = 0; i< key.length; i++)) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % 1013;
}
```
