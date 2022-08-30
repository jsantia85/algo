// Coding Exercise 10: power 

// function power(b, e) {
//   if (e === 0){
//     return 1;
//   } else {
//     return b * power(b, e - 1)
//   }
// }

// console.log(power(5,5))

// Coding Exercise 11: factorial

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1)
}

console.log(factorial(4))