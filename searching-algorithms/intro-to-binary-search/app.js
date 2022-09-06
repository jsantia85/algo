// Binary Search Exercise
// write a function that accepts a sorted array and a value
//create a left pointer at the start of the array, and a right pointer at the end of the array
// while the left pointer comes before the right pointer 
  // create a pointer in the middle
  // if you find the value you want, return the index
  // if the value is too small, move the left pointer up
  // if the value is too large, move the right pointer down
// if you never find the value, return -1

function binarySearch (arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle;

  while (start <= end) {
    middle = Math.floor((end + start) / 2);
    if (arr[middle] === val) {
      return middle
    } else if (arr[middle] < val) {
      start = middle + 1;
    } else {
      start = middle - 1;
    }
  }

  return -1 
}

console.log(binarySearch([1, 2, 3, 4, 5], 10))