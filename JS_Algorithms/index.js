const summation = (n) => {
  let sum = 0; // once
  for (let i = 0; i <= n; i++) {
    sum += n; // 4 times
    console.count(i);
  }
  return sum; // once
};
const res = summation(10);

// BIG - O || Simulation using Objects
// = insert  = O(1)
// = remove = O(1)
//  = access = O(1)
// = search = O(n) || linear
// Object.keys() = O(n) = return an array of all the keys in objects
// Object.values() = O(n) = return an array of all the values in objects
// Object.entries() = O(n) = return an array of all the elements in the object [key, value]

// BIG - O || Simulation using Arrays
// = insert  = O(1)
// = remove at the end of an array = O(1)
// = remove at the beginning of the array = O(n) linear because index has to be reset
// = access = O(1)
// = searching = O(n)
// = pop/push = O(1)
// = shift/unshift/concat/splice/slice = O(n)
// = forEach/map/filter/reduce =  O(n)
