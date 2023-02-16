console.log("SETS");
// holds a collection of values however it must be unique
// contain a mix of data types [string, number, boolean, objects]
// dynamically sized
// do not maintain an insertion order
// iterables
// can not contain duplicate values || will not give an error but it will ignore duplicates
// define using a constructor

const set = new Set([12, 10, 23]);
set.add({ name: "lara" });
console.log(set.has(12));
console.log(set.size);
// set.has
// set.size
// set.create
// set.delete
for (let item of set) {
  console.log("item", item);
}
