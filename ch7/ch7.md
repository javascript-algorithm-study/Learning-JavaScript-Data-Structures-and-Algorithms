# 자바스크립트 자료구조와 알고리즘

## ch7.딕셔너리와 해서

- 집합은 정렬되지 않은 컬렉션으로 원소는 반복되지 않는다.(중복된 원소가 없다.)

### 집합 만들기

- `ES6` SET 모방

```javascript
function Set() {
  var items = {};
}
```

#### `has()`

```javascript
this.has = function(value) {
  return value in items;
};

// good
this.has = function(value) {
  return items.hasOwnProperty(value);
};
```

#### `add`

```javascript
this.add = function(value) {
  if (!this.has(value)) {
    items[value] = value;
    return true;
  }
  return false;
};
```

- 키와 값이 동일한 이유는 나중에 찾기 편하게!!

#### `remove`, `clear`

```javascript
this.remove = function(value) {
  if (this.has(value)) {
    delete items[value];
    return true;
  }

  return false;
};

this.clear = function(value) {
  items = {};
};
```

#### `size`

- 3가지 방법
- `LinkedList`처럼 `length`변수로 `add,remove` 사용시 변경
- 자바스크립트 내장함수 이용

  ```javascript
  this.size = function() {
    return Object.keys(items).length;
  };
  ```

- 모든 브라우저에서 사용 가능

  ```javascript
  this.sizeLegacy = function() {
    var count = 0;
    for (var prop in items) {
      if (items.hasOwnProperty(prop)) {
        ++count;
      }
    }
    return count;
  };
  ```

#### `values`

```javascript
this.values = functino() {
  return Object.keys(items);
}

// old browser
this.valueLegacy = function() {
  var keys = [];
  for (var key in items) {
    keys.push(key);
  }
  return keys;
}
```

### 집합 연산

- 합집합 : 두 집합 중 어느 한쪽이라도 포함된 원소로 구성된 집함
- 교집합 : 두 집합 모두 포함되어 있는 원소로 구성된 집합
- 차집합 : 첫 번째 집합에는 있지만 두 번째 집합에는 없는 원소로 구성된 집합
- 부분집합 : 어떤 집합이 다른 집합의 일부인지 확인

#### 합집합

```javascript
this.union = function(otherSet) {
  var unionSet = new Set(); // 리턴될 합집합

  var values = this.value(); // 현재 집합
  for (var i = 0; i < values.length; i++) {
    unionSet.add(values[i]);
  }

  values = otherSet.values(); // 다른 집합
  for (var i = 0; i < values.length; i++) {
    unionSet.add(values[i]);
  }

  return unionSet;
};
```

### 교집합

```javascript
this.intersection = function(otherSet) {
  var intersectionSet = new Set();

  var values = this.values();
  for (var i = 0; i < values.length; i++) {
    if (otherSet.has(values[i])) {
      intersectionSet.add(values[i]);
    }
  }

  return intersectionSet;
};
```

### 차집합

```javascript
this.difference = function(otherSet) {
  var differenceSet = new Set();

  var values = this.values();
  for (var i = 0; i < values.length; i++) {
    if (!otherSet.has(values[i])) {
      differentSet.add(values[i]);
    }
  }
  return differenceSet;
};
```

### 부분집합

```javascript
this.subset = function(otherSet) {
  if (this.size() > otherSet.size()) {
    return false;
  } else {
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        return false;
      }
    }
    return true;
  }
};
```
