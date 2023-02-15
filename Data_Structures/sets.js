// SETS

function mySet() {
  // this will hold the sets
  let collections = [];
  lement;
  // will check for the presence of an element and return true of false
  this.has = function (element) {
    return collections.indexOf(element) !== -1;
  };
  // this method will return all the values in the set
  this.values = function () {
    return collections;
  };
  // this method will add an element to the set
  this.add = function (val) {
    if (!this.has(val)) {
      collections.push(val);
      return true;
    }
    return false;
  };

  // this method will remove an element from a set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collections.indexOf(element);
      collections.splice(index, 1);
    }
  };
  // return the size of the collections
  this.size = function () {
    return collections.length;
  };
  //
}
