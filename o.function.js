// function
// reusable block of code
// DRY => Do not repeat yourself

// function

// let x = 10;
// let y = 11;
// let z = 2;
// let a = 1;

// let sum = x + y;
// let sumOfZAndA = z + a;

// console.log(sumOfZAndA);
// console.log(sum);

// let firstName = "Rohan";
// let lastName = "Bhandari";

// let secondPersonFirstName = "Dipen";
// let secondPersonLastName = "Shrestha";

// let fullName = `${firstName} ${lastName}`;
// // let fullName = firstName + " " + lastName; //string concatenation
// console.log(fullName);

// let secondPersonFullName = secondPersonFirstName + " " + secondPersonLastName;
// console.log(secondPersonFullName);

//? to reduce repetition of logic implementation

// syntax
// function  function_name(){
// some code here
// }

// function add(x, y) {
//   const sum = x + y;
//   console.log(`${x} + ${y} = ${sum}`);
// }

// add(10, 15);
// add(25, 35);

// write a function to calculate product of two numbers

// function product(x, y) {
//   return x * y;
// }

// const total = product(5, 6);

// console.log(total);

// ?Write a function that checks if the provided number is odd or even.

// function checkIfOddOrEven(num) {
//   const remainder = num % 2;

//   let result;

//   if (remainder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }

//   return result;
// }

// const result = checkIfOddOrEven(2550);
// console.log(result);

// ?Write a function that takes a number as a parameter and
// ?returns a sum from 0 to that number.
// ? E.g if number is 5 then function should return 0+1+2+3+4+5=15

// function getSum(num) {
//   let sum = 0;

//   let i = 1;
//   while (i <= num) {
//     sum = sum + i; //NaN
//     i++;
//   }

//   return sum;
// }
// const total = getSum(10);
// console.log(`sum is ${total}`);

// function without name is anonymous function
//  => //arrow function

// const getSum = (x, y) => {
//   let sum = x + y;
//   return sum;
// };

// const total = getSum(2, 3); //function call/invoke
// console.log(`total = ${total}`);

// ??WAF that converts dollars into cents.
// 1 dollar = 100 cent

// const convertDollarToCent = (dollar) => dollar * 100;

// const cents = convertDollarToCent(5);
// console.log(`cents => ${cents}`);

// ?WAF that calculates whether the student has passed or not
// ? having threshold score to be 45 out of 100

//   ternary
// condition ?true_code:false_code
// const checkScore = (score) => {
//   let result;

//   score < 45 ? (result = "could not pass") : (result = "pass");

//   return result;
// };

// const result = checkScore(65);
// console.log(result);

// ?function default value

// const getSum = (a, b = 6) => {
//   return a + b;
// };

// const result = getSum(20, 5);
// console.log(result);
