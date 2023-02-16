// Insertion Sort
// first element is sorted and the remaining elements are not sorted

function inserttionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}
const arr = [8, 20, -2, 4, -6];
inserttionSort(arr);
console.log("sorted", arr);
