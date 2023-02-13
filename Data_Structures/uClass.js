// how stacks works

var Stack = function () {
  this.count = 0;
  this.storage = {};
  // add value to the instance {count and storage}
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };
  // remove and return the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  // calc the size
  this.size = function () {
    return this.count;
  };
  // return the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log("length of", myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log("length of", myStack.size());

// strings
myStack.push("tanaliga100");
console.log("length of", myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
