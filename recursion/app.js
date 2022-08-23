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
function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(4)

// return 4 + sumRange(3)
// return 3 + sumRange(2)
// return 2 + sumRange(1)
// return 1