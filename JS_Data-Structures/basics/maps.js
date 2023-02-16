console.log("MAPS");
// ordered collections of key-value pairs
// to retrieve you can use the corresponding key
// maps are iterables. they can be used with a for-loop
// use a map constructor to create a new map

const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set("c", 3);
console.log(map.has("a")); // to check
map.delete("c"); // to delete
console.log(map.size); // size of the map
map.clear();
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
console.log(map);
