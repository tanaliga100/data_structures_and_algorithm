// Import LinkedList module
const LinkedList = require("./link-head-tail");

// STACK IMPLEMENTATION USING LINKED LIST
class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }
  // methods in stack
  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFromHead();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}
const stack = new LinkedListStack();
console.log("List is empty ?", stack.isEmpty());
stack.push("KIMMY");
stack.push("LARA");
stack.push("JENN");
console.log(stack.getSize());
stack.print();
console.log(stack.pop());
console.log(stack.peek());
