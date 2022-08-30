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
// function factorial (num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i
//   }
//   return total
// }

// factorial(5)

// function factorial(num) {
//   if (num === 1) return 1;
//   return num * factorial(num - 1);
// }

// factorial(5)

// Helper method recursion 
// function collectOddValues(arr){
    
//   let result = [];

//   function helper(helperInput){
//       if(helperInput.length === 0) {
//           return;
//       }
      
//       if(helperInput[0] % 2 !== 0){
//           result.push(helperInput[0])
//       }
      
//       helper(helperInput.slice(1))
//   }
  
//   helper(arr)

//   return result;
// }

// collectOddValues([1,2,3,4,5,6,7,8,9])

// Pure recursion
// function collectOddValues(arr){
//   let newArr = [];
  
//   if(arr.length === 0) {
//       return newArr;
//   }
      
//   if(arr[0] % 2 !== 0){
//       newArr.push(arr[0]);
//   }
      
//   newArr = newArr.concat(collectOddValues(arr.slice(1)));
//   return newArr;
// }

// Coding Exercise 10: power 

function power(b, e) {
  // power is the product of multiplying a number by itself
  // the base number tells what number is being multiplied
  // the exponent, tells how many times the base is being multiplied
  // base case: if e < 0 { return result or p assuming }
  // when e is b return b when e is 0 return 1
  if (e === 0){
    return 1;
  } else {
    return b * power(b, e - 1)
  }

  // try to use recursion
  // equation essentially p = b ^ e or p = b * power(e - 1)

}

console.log(power(5,5))