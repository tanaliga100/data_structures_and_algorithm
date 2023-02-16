console.log("ARRAYS");
// hold a collection of values
// contain a mix of data types [string, number, boolean, objects]
// resizable
// zero-indexed || order is maintained
// iterable ex. for-of
// has built-in methods like =  map, filter, concat, slice, splice
const arr = [1, 2, 3, 4, 5, "lara", { name: "dan" }];
console.log(arr[6]);
arr.unshift("first");
arr.push("last");
arr.shift();
arr.pop();
for (let item of arr) {
  console.log("loop", item);
}
console.log(arr);

// Array Big-O time complexity
// insert / remove from end = O(1)
// insert / remove from beginning = O(n) *because the index has to be reset
// access = O(1)
// searching = O(n) * as element can be the last one
// push/pop = constant O(1)
// shift/unshift/concat/slice/splice = O(n) *because index has to be reset
// forEach/map/filter/reduce = O(n) || these are all linear because the callback function would     contain for-loop
