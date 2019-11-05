const LinkedList = require('./utils')

function HashTable() {
  var table = [];

  var loseloseHasCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;

    this.toString = function () {
      return `[${this.key} - ${this.value}]`
    }
  }

  this.put = function (key, value) {
    var position = loseloseHasCode(key);

    // 원소가 없으면 링크드리스트 만듬
    if (table[position] == undefined) {
      table[position] = new LinkedList();
    }
    // 원소가 있으면 링크드리스트의 append를 사용
    table[position].append(new ValuePair(key, value));
  }

  this.get = function (key) {
    var position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      var current = table[position].getHead();

      while (current.next) {
        if (current.element.key === key) {
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

  this.remove = function (key) {
    return table[loseloseHasCode(key)] = undefined;
  }

  this.print = function () {
    for (var i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ": " + table[i]);
      }
    }
  }
}

var hash = new HashTable();
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'Aaron@email.com');
hash.put('Jonathan', 'jonathan@gmail.com');
hash.put('Jamie', 'jamie@gmail.com');
hash.put('Sue', 'sue@gmail.com');

hash.print();