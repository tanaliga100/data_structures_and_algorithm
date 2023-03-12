// COMMON ARRAY METHODS
// .toString() -> returns a string with separated values;
let artist = [
  "The Script",
  "The Corrs",
  "Coldplay",
  "John Mayer",
  "Billy Joel",
];
console.log(artist.toString());
// .join() ->  returns a new string concatenating all of the elements in the array [depending on your choice of symbol]
console.log(artist.join());
// .pop() -> remove the last element in the array and returns the removed element || no argument
console.log(artist.pop());
// .push() -> add one or more element to the ends of the array || it can be array too, an object, string, boolean, number, null || changes the length of an array;
artist.push("Lara", { mostGrammys: "Beyonce" });
console.log(artist);
// .shift() -> remove the first element from the array and returns it || does not take any arguments just like the .pop method;
console.log(artist.shift());
console.log(artist);
// .unshift() -> adds one or more element to the beginning of the array and returns a new array length || it can be array too, an object, string, boolean, number, null
artist.unshift("Ebe");
console.log(artist);
// delete method -> delete operator then name of the resource followed by property name (if using object) || index(if using the array)
// delete artist[5];
console.log(artist);
// .concat method -> concatenate or "joins" two or more arrays and returns a new array containing the joined arrays;
console.log(artist.concat(["rico", "ebe dancel"]));
// .sort method ->  sorts the elements of an array, and overwrites the original array || if the args is string it will sort alphabetically however if the args are number it will not behave properly;
let arr = [1, 2, 3, 4, 5];
console.log(artist.sort());
// .splice method -> adds or removes array elements || can take up to three arguments
// * index = which to start changing the array
// * to delete = the number of element to remove or returns starting at index provided in the first argument || if not provided all the succeeding elements will be removed
// ^ elements to add =  starting at the index || add elements to the array;
// arr.splice(2);
arr.splice(2);
arr.splice(1, 2, 6, 7);
arr.splice(2, 0, 3, 4, 5);
console.log(arr);
