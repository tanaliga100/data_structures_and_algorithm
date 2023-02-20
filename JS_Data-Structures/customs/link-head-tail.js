class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
      // if list is empty, connect head and tails to the first node;
      this.head = node;
      this.tail = node;
    } else {
      // if the list is not empty, connect the new node to the head of the existing list;
      node.next = this.head;
      console.log("nodenext", node.next);
      this.head = node;
      console.log("newhead", this.head.value);
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      console.log("tail", this.tail.next);
      this.tail = node;
      console.log("newTail", this.tail);
    }
    this.size++;
  }
  removeFromHead() {
    if (this.isEmpty()) {
      return `No node can be removed`;
    }
    //get the head element and then remove
    const value = this.head.value;
    console.log("curr value", value);
    this.head = this.head.next;
    console.log("new head", this.head);
    this.size--;
    return value;
  }

  removeFromTail() {
    if (this.isEmpty()) {
      console.log(`No node can be removed from tail`);
      return null;
    }
    const value = this.tail.value;
    console.log("last node", value);
    if (this.tail === 1) {
      this.head = null;
      console.log("new head", this.head);
      this.tail = null;
      console.log("new tail", this.tail);
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
        console.log("prev value", prev);
      }
      prev.next = null;
      console.log("next value", prev.next);
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  reverse() {}

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value} -> `;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const list = new LinkedList();
// if empty
// console.log(`List is Empty ? `, list.isEmpty());
// console.log(`List size `, list.getSize());
// list.print();
// list.append("LARA");
// list.print();
// list.append("KIMMY");
// list.print();
// list.append("DAN");
// list.print();
// list.append("INNA");
// list.removeFromHead();
// list.removeFromTail();

// list.print();

module.exports = LinkedList;
