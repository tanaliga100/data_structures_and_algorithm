console.log("OBJECTS");
// unordered collections of key-value pairs;
// the key must be a string or symbol and the value must be of any type;
// to retrieve a value you can use the corresponding key. It can be achieved either with dot(.) notation or bracket [] notation
// object is not iterable. but the exception is for-in loop;

const obj = {
  name: "lara",
  age: 23,
  "key-three": true,
  sayMyName: function () {
    console.log(`Hello, ${this.name}`);
  },
};
console.log(obj.name);
console.log(obj["key-three"]); // should be a string
obj["hobby"] = ["coding"];
obj.hobby.push("playing instruments");
obj.status = { gender: "male" };
delete obj.hobby.shift();
obj.sayMyName();

console.log(obj);

// has also built-in methods like =  Object.keys || Object.values || Object.entries

// Objects Big-O time complexity
// insert/remove = O(1)
// access = O(1)
// search = O(n) = linear because you have to traverse through the elements
// Object.keys = O(n)
// Object.values = O(n)
// Object.entries; = O(n)
