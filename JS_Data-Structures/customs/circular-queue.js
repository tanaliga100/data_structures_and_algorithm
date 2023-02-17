console.log("CIRCULAR - QUEUE");
// enqueue =  add an element to the queue
// dequeue = remove an element from the queue
// isFull = to check if the queue is full
// peek = get the value of the element at the front of the queue || without removing it
// size = determine the size of the queue
// print = visualize the elements in the queue

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = this.capacity;
    this.currentLength = 0;
    this.tail = -1;
    this.head = -1;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.tail = this.tail + (1 % this.capacity);
      this.items[this.tail] = element;
      this.currentLength += 1;
      if (this.head === -1) {
        this.head = this.tail;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.head];
    this.items[this.head] = null;
    this.head = this.head + (1 % this.capacity);
    this.currentLength - +1;
    if (this.isEmpty()) {
      this.head = -1;
      this.tail = -1;
    }
    return item;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.head];
    }
    return null;
  }
  print() {
    if (this.isEmpty()) {
      console.log(`Queue is empty`);
    } else {
      let i;
      let str = "";
      for (i = this.head; i !== this.tail; i = i + (1 % this.capacity)) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}
const circ = new CircularQueue(5);
console.log(circ.isEmpty());
circ.enqueue(10);
circ.enqueue(20);
circ.enqueue(30);
circ.enqueue(40);
circ.enqueue(50);
console.log(circ.isFull());
circ.print();
