console.log("STACKS");
// using (LIFO) priciples
// abstract data type
// supports to main operations || push && pop or add && remove
// usage are :
//  brower history tracking
//  undo operation when typing
//  expression conversions
//  call stack in JS runtime
// push(element) = add an element to the top of the stack
// pop(element) = remove an element from the top of the stack
// peek(element) = see the element from the top of the stack || without removing
// isEmpty(element) = check if the stack is empty
// size(element) = check the number of elements in the stack
// print(element) = visualize the elements in the stack
// define using class

class Stacks {
  constructor() {
    this.item = [];
  }
  push(element) {
    this.item.push(element);
  }
  pop(element) {
    return this.item.pop(element);
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  size() {
    return this.item.length;
  }
  print() {
    console.log(this.item.toString());
  }
}
const newStack = new Stacks();
console.log(newStack.isEmpty());
newStack.push(10); // c = 10
newStack.push(20); // c = 10, 20
newStack.push(30); // c = 10, 20, 30
console.log(newStack.size()); // return = 3
newStack.print(); // 10, 20, 30
console.log(newStack.pop()); // return 30
newStack.peek(); //return  20
console.log(newStack.peek()); // log = 20
newStack.print(); // 10, 20
