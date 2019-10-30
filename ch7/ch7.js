function Set() {
  var items = {};

  this.has = function(value) {
    return items.hasOwnProperty(value);
  };

  this.add = function(value) {
    if (!this.has(value)) {
      items[value] = value;
      return true;
    }
    return false;
  };

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

  this.size = function() {
    return Object.keys(items).length;
  };

  this.values = function() {
    return Object.keys(items);
  };

  this.union = function(otherSet) {
    var unionSet = new Set(); // 리턴될 합집합

    var values = this.values(); // 현재 집합
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values(); // 다른 집합
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  };

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

  this.difference = function(otherSet) {
    var differenceSet = new Set();

    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };

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
}

// var set = new Set();

// set.add(1);
// console.log(set.values());
// console.log(set.has(1));
// console.log(set.size());

// set.add(2);
// console.log(set.values());
// console.log(set.has(2));
// console.log(set.size());

// set.remove(1);
// console.log(set.values());

// set.remove(2);
// console.log(set.values());

// var setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);

// var setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);

// var unionAB = setA.union(setB);
// console.log(unionAB.values());

var setA = new Set();
setA.add(1);
setA.add(2);

var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

var setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

var intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());

var differenceAB = setA.difference(setB);
console.log(differenceAB.values());

var subsetAB = setA.subset(setB);
console.log(subsetAB);

var subsetAC = setA.subset(setC);
console.log(subsetAC);
