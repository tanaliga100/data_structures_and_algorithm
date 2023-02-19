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

// this node will be added to the list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// WILL serve as the list
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
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node; // add this new Node if the list is empty
      // in this case TRUE || empty;
    } else {
      node.next = this.head; // it will swap the to the second node
      this.head = node; // now the 'this.had' will now be on the second index
    }
    this.size++; // and then increment;
  }
  print() {
    if (this.isEmpty()) {
      console.log("THE LIST IS EMPTY... Please add one");
    } else {
      let curr = this.head;
      let listValues = [];
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}
const newList = new LinkedList();
console.log(`List is empty`, newList.isEmpty());
console.log(`List size`, newList.getSize());
newList.print();
newList.prepend(10);
newList.print();
newList.prepend(20);
newList.print();
newList.prepend(30);
newList.print();
