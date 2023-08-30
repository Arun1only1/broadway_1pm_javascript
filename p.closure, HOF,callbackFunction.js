// ?HOF=> Higher order function => function returning function,callback function
// function inside function => nested function
// ?closure
// ?function inside function

// let firstName = "Rohan";

// const printName = () => {
//   console.log(`Name is ${firstName}`);
// };

// const sum = 2 + 3;
// console.log(sum);

// firstName = "Prasanna";
// printName();

// firstName = "Sarita";
// printName();

// function inside function

// const outerFunction = (lastName) => {
//   const innerFunction = (firstName) => {
//     console.log(`Hello ${firstName} ${lastName}`);
//   };

//   return innerFunction;
// };

// const output = outerFunction("Lama");
// output("Ram");

// const getSum = (y) => {
//   const calculateSum = (x) => {
//     return x + y;
//   };

//   return calculateSum;
// };

// const total = getSum(5);

// const result = total(2);

// const result = getSum(5)(2);
// console.log(result);

// ?callback function
// function passed as argument to another function

// const calculateSum = (x, y) => {
//   return x + y;
// };

// const calculateProd = (x, y) => {
//   return x * y;
// };

// const getSum = (calcFunction, a, b) => {
//   const total = calcFunction(a, b);

//   console.log(total);
// };

// getSum(calculateProd, 5, 6);
