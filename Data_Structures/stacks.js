// STACKS USING ARRAY
// functions: push, pop, peek, length
const { count } = require("console");

const letters = []; // can think of it as a stack
let words = "racecar";
let rword = "";

// let us push the letters into the letters array
for (let i = 0; i < words.length; i++) {
  // console.log("iterator", i, words[i]);
  letters.push(words[i]);
}
console.log("WORDS: " + letters);

// pop off the stack in reverse the order
for (let i = 0; i < words.length; i++) {
  console.log(rword);
  rword = rword + letters.pop();
}
// check if it is palindrome
if (words === rword) {
  console.log(words + "is a palindrome");
} else {
  console.log(words + " is not a palindrome");
}

// STACKS IN CLASS
console.log("STACKS IN CLASS");
let Stack = function () {
  this.count = 0;
  this.storage = {};
  // adds values to the end of the stack
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };
  // removes and returns the value at the end of the stack
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };
  // identifies the length of the storage;
  this.size = function () {
    return this.count;
  };
  // returns the value at the end of the stack
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};
var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push("Dan");
myStack.push("Lara");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.storage);
