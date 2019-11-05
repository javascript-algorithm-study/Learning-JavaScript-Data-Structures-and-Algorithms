// function Dictionary() {
//   var items = {};

//   this.has = function (key) {
//     return key in items;
//   };

//   this.set = function (key, value) {
//     items[key] = value;
//   };

//   this.remove = function (key) {
//     if (this.has(key)) {
//       delete items[key];
//       return true;
//     }
//     return false;
//   };

//   this.get = function (key) {
//     return this.has(key) ? items[key] : undefined;
//   };

//   this.values = function () {
//     var values = [];
//     for (var k in items) {
//       if (this.has(k)) {
//         values.push(items[k]);
//       }
//     }
//     return values;
//   };

//   this.clear = function (value) {
//     items = {};
//   };

//   this.size = function () {
//     return Object.keys(items).length;
//   };

//   this.keys = function () {
//     var keys = [];
//     for (var k in items) {
//       if (this.has(k)) {
//         keys.push(k);
//       }
//     }
//     return keys;
//   };

//   this.getItems = function () {
//     return items;
//   };
// }

// var dictionary = new Dictionary();
// dictionary.set("Gandalf1", "gandalf1@gmail.com");
// dictionary.set("Gandalf2", "gandalf2@gmail.com");
// dictionary.set("Gandalf3", "gandalf3@gmail.com");

// console.log(dictionary.has("Gandalf1"));

// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('Gandalf2'));

// console.log(dictionary.remove('Gandalf1'));

// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(typeof dictionary.getItems());

function HashTable() {
  var table = [];

  var loseloseHasCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.put = function (key, value) {
    var position = loseloseHasCode(key);
    console.log(position + ' - ' + key);
    table[position] = value;
  }

  this.get = function (key) {
    return table[loseloseHasCode(key)];
  };

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

// var hash = new HashTable();
// hash.put('Gandalf', 'gandalf@gmail.com');
// hash.put('John', 'john@gmail.com');
// hash.put('Tyrion', 'tyrion@gmail.com');

// console.log(hash.get('Gandalf'));
// console.log(hash.get('Johna'));

// hash.remove('Gandalf');
// console.log(hash.get('Gandalf'));

var hash = new HashTable();
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'Aaron@email.com');
hash.put('Jonathan', 'jonathan@gmail.com');
hash.put('Jamie', 'jamie@gmail.com');
hash.put('Sue', 'sue@gmail.com');

hash.print();