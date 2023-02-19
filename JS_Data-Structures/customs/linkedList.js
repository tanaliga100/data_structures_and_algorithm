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
  append(value) {
    const node = new Node(value); // get the new node
    // IF THE LIST IS EMPTY, it will directly add
    if (this.isEmpty()) {
      this.head = node;
    }
    // IF THE NODE IS NOT EMPTY, it will append in the last index
    // get the 'this.head' as preview and assign it to new value with prev.next
    // now the condition is as long as prev has value it will iterate over
    else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("NO matched value");
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
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
newList.append("Lara is appended");
newList.prepend("Dan is prepended");
newList.print();
newList.insert("Kimmy", 3);
newList.print();
newList.insert("Coldplay", 4);
newList.print();
console.log(newList.removeFrom(10));
newList.print();
console.log(newList.getSize());
console.log(newList.removeValue("Kimmy"));
newList.print(); // Time Complexity || Big O
console.log(newList.search("Coldplay"));

// Prepend = constant conplexity
// Append = linear complexity
