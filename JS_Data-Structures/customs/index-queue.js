// Import LinkedList module
const LinkedList = require("./link-head-tail");

// STACK IMPLEMENTATION USING LINKED LIST
class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }
  // methods in queue
  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
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
const queue = new LinkedListQueue();
console.log("List is empty ?", queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.getSize());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.peek());
