// ARRAYS
// methods can accepts multiple arguments
const names = ["lara", "dan", "inna", "kim"];
console.log(names.length);
for (const n of names) {
  console.log(n);
}
const dan = names.findIndex((el) => el === "dan");
console.log(dan);
names.splice(1, 2);
console.log(names);

// SETS
// methos can accepts only one argument at any instance
const ids = new Set();
ids.add("chris");
ids.add("abc");
ids.add(1);
ids.add(1);

ids.add(2);

for (const id of ids) {
  console.log(ids);
}
const hasAbc = ids.has("abc");
console.log(hasAbc);
ids.delete(1);
console.log(ids);

// OBJECTS
// iterable only using for-in loop
// mush have unique per element
// element acces via key [property name]
const person = {
  name: "dan",
  age: 20,
  hobs: ["coding", "playing ints"],
  greet() {
    console.log(`Hi I Am , ${this.name}`);
  },
};
person["status"] = "single";
console.log(person);
delete person["status"];
person["greet"]();

// MAPS
// key values are ordered
// access el by key
// iterable || can use for-of
// pure data storage

const resultData = new Map();
resultData.set("average", 99.9);
resultData.set("lastRes", null);

console.log(resultData);

for (const el of resultData) {
  console.log(el);
}
resultData.set("anything", 131);
console.log(resultData);

// LINKED LIST
// custom data structure || a bit like an array
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  // methods
  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }
  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }
  find(value) {
    if (!this.head) {
      return `No item to find`;
    }
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return currNode;
      }
      currNode = currNode.next;
    }
    return `Nothing found`;
  }

  delete(value) {
    console.log("to be deleted", value);
    if (!this.head) {
      return `No item to delete`;
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currNode = this.head;
    while (currNode.next) {
      if (currNode.next.value === value) {
        currNode.next = currNode.next.next;
      } else {
        currNode = currNode.next;
      }
    }
    if (this.tail.value === value) {
      this.tail = currNode;
    }
  }
  toArray() {
    const elements = [];
    let currNode = this.head;
    while (currNode) {
      elements.push(currNode);
      currNode = currNode.next;
    }
    return elements;
  }
}
const linkedList = new LinkedList();
console.log(" FOR LINKED LISTS");
linkedList.append(1);
linkedList.append("hello there");
linkedList.append("dan");
linkedList.append("dan");

linkedList.append({ name: "anna" });
linkedList.prepend("first value");
console.log(linkedList.toArray());
linkedList.delete("dan");
linkedList.delete("first value");
console.log(linkedList.toArray());
console.log(linkedList.find("dan"));
console.log(linkedList.find("hello there"));
