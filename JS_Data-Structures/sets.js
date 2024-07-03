function mySet() {
  // holds the collection of set
  let collection = [];

  // this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== 1;
  };

  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  // this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from a set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this returns the size of an element
  this.size = function () {
    return collection.length;
  };

  // this method will return the union of two sets
  this.union = function (otherSet) {
    let unionSet = new Set();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };
}

const newSet = mySet();
