let Stack = function () {
  this.count = 0;
  this.storage = {};

  // ADDS A VALUE ONTO THE END OF THE STACK
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.unshift = function (value) {
    // shift all the elements one position up
    for (let i = this.count; i > 0; i--) {
      this.storage[i] = this.storage[i - 1];
      console.log("unshift index", [i]);
    }
    // insert the new value at the first position
    this.storage[0] = value;
    this.count++;
  };

  // REMOVES AND RETURNS A VALUE AT THE END OF THE STACK
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  // RETURN THE VALUE AT THE END OF THE STACK
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};
let myStack = new Stack();
myStack.push("one");
myStack.push("two");
myStack.unshift("start");
console.log(myStack.storage);
console.log(myStack.peek());
// console.log(myStack.pop());
