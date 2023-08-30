// loop => repetition
// for
// while
// do..while

// console.log("Hello mom");

// for
// syntax
// for (initial_value;condition;increment/decrement){
// some code here
// }

// let i = 0; //initial value/start value

// for (let i = 2; i < 3; i=i+1) {
//   console.log("Hello mom", i);
// }

// for (let i = 5; i > 0; i = i - 1) {
//   console.log(i);
// }

// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

// for (let i = 12; i <= 24; i++) {
//   console.log(i);
// }

// for (let i = 100; i >= 50; i = i - 1) {
//   console.log(i);
// }

// ?Write a JS code to print  square of numbers from 1 to n

// let n = 7;

// for (i = 1; i <= n; i++) {
//   const square = Math.pow(i, 2);
//   console.log(`square of ${i} = ${square}`);
// }

//? WAP to add numbers from 0 to n using for loop.

// let n = 10;

// let sum = 0;

// for (let i = 0; i <= 10; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// ?while loop

// syntax

// initial value
// while(condition){
// some code here
// increment/decrement
// }

// let i = 1;

// while (i <= 10) {
//   console.log(i);

//   i++;
// }
//123
// ? find whether the numbers are odd or even  from 1 to n

// let i = 1;
// let n = 100;

// while (i <= n) {
//   const rem = i % 2;

//   if (rem === 0) {
//     console.log(`${i} => even`);
//   } else {
//     console.log(`${i} => odd`);
//   }

//   i++;
// }

// find sum of digits in a number

// let n = 2456; //1+2+3=6

// let sum = 0;

// while (n > 0) {
//   const rem = n % 10;
//   sum = sum + rem;
//   n = Math.floor(n / 10);
// }

// ?do..while
// syntax
// initial value
// do{
// some code

// increment/decremnet
// }while(condition)

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// while (i > 10) {
//   console.log(i);
//   i++;
// }

// Write a JS code to print whether a given number is prime or not

// let n = 27;
// let prime = true;

// for (i = 2; i < n; i++) {
//   let rem = n % i;

//   if (rem === 0) {
//     prime = false;
//     break;
//   }
// }

// if (prime === true) {
//   console.log(`Number ${n} is prime`);
// } else {
//   console.log(`Number ${n} composite`);
// }

// Write a js code to decide whether number is prime or composite from 1 to n
// 2 is prime
// 3 is prime
// 4 is composite
// 5 is prime
