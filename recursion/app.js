// function countDown(num) {
//   if (num<= 0) {
//     console.log('All done!');
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num)
// }

// countDown(10)

// second case 
// function sumRange(num) {
//   if(num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// sumRange(4)

// return 4 + sumRange(3)
// return 3 + sumRange(2)
// return 2 + sumRange(1)
// return 1

// return 4 + 3 + 2 + 1 = 10

// factorial 
function factorial (num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i
  }
  return total
}

factorial(5)