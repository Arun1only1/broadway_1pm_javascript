// Write a function that checks if the provided number is odd or even.

// const checkIfOddOrEven = (num) => {
//   const rem = num % 2;

//   let result;

//   if (rem === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }

//   return result;
// };

// const result = checkIfOddOrEven(4);
// console.log(result);

// WAF that calculates the factorial of a number.

const calculateFactorial = (num) => {
  let factorial = 1;

  if (num === 0 || num === 1) {
    return factorial;
  }

  for (i = 2; i <= num; i++) {
    factorial = factorial * i;
  }

  return factorial;
};

const factorialResult = calculateFactorial(10);
console.log(factorialResult);
