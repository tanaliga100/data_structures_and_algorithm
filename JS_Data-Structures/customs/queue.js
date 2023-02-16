console.log("QUEUE");
// = sequential collections of elements
// = follow the FIFO principles
// = the first element that is inserted is the first element to be removed
// = abstract data types
// = supports to main operations || enqueue && dequeue
// = enqueue adds an element to the tail/rear of the collection
// = dequeue removes an element from the head/front of the collection
// = usage are : callback || js runtime

// peek(element) = see the element from at the front of the queue || without removing
// isEmpty(element) = check if the queue is empty
// size(element) = check the number of elements in the queue
// print(element) = visualize the elements in the queue

class Queue {
  constructor() {
    this.items = [];
  }
  // add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }
  // remove an element from the top of the queue
  dequeue(element) {
    return this.items.shift(element);
  }
  //check if the element is empty
  isEmpty() {
    return this.items.length === 0;
  }
  // return the element at front of the queue || without removing it
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }
  // return the number of elements in the queue
  size() {
    return this.items.length;
  }
  // visualize what's inside tht queues
  print() {
    console.log("print", this.items.toString());
  }
}
const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());
