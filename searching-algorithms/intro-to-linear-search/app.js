// linear search pseudocode
// create a function that accepts an array and a value
// loop through the array and check if the currenty array element is equal to the value
// if it is found, return the index at which the element is found
// if the value is never fouhd, return -1

function findValue (arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    } else {
      let check =  arr.includes(val)
      if (!check) {
        return -1
      }
    }
  }
}

console.log(findValue([1,2,3], 3))