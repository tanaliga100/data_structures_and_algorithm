console.log("LINKED LIST");
// LINKED LIST
// = consist of linear data structures includes serries of connected nodes
// = has a pointer that connects tot he next nodemon
// = can be easily inserted or removed
// = random of access of elements is not feasible
// = Insertion > add at the beginning || or at the given index in the LIST
// = Deletion > remove an item in a given index
// = Search > find an element given its values
// = A real world application of STACKS || QUEUES

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
}
const newList = new LinkedList();
console.log(`List is empty`, newList.isEmpty());
console.log(`List size`, newList.getSize());
