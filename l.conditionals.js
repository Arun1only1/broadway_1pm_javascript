// conditionals
// normal program execution flow => sequential

// let firstName = "Prasanna";
// let location = "Thamel";

// console.log(`My name is ${firstName} and I am from ${location}.`);

// conditionals
// => breaks sequential flow of program

let firstName = "Prasanna";
let location = "Thamel";
// console.log(`My name is ${firstName} and I am from ${location}.`);

// if
// if(condition){
// some code here
// }

// condition always result in true or false
// if (2 + 3 === 5) {
//   console.log("Condition is true");
// } else {
//   console.log("Condition is false");
// }

// ?Find the largest of two numbers.
// let num1 = 15;
// let num2 = 7;

// if (num1 > num2) {
//   console.log("Num1 is greater");
// } else {
//   console.log("Num2 is greater");
// }

// ?Check if input variable is a number or not

// let input = true;

// let dataType = typeof input;
// console.log("dataType", dataType);

// if (dataType === "boolean") {
//   console.log("Input is a number.");
// } else {
//   console.log("Input is not a number.");
// }

// ?? Check if a number is odd or even
// const num = 1000011;
// first calculate remainder by dividing by 2
// if remainder is equals to 0, number is even(jodi)
// otherwise number is odd(bi-jodi)

// let remainder = num % 2; //0

// if (remainder === 0) {
//   console.log("Number is even.");
// } else {
//   console.log("Number is odd.");
// }

// ? Find the largest of three numbers.

// let x = 1;
// let y = 20;
// let z = 71;

// if (y > x && y > z) {
//   console.log("y is greatest number.");
// } else if (z > x && z > y) {
//   console.log("z is greatest number.");
// } else {
//   console.log("x is greatest number.");
// }

// switch
// syntax
// switch(variable){
// case value:{
// ?somecode here
// break;
// }
// }

// let dayNumber = 2;

// switch (dayNumber) {
//   case 1: {
//     console.log("Sunday");
//   }

//   case 2: {
//     console.log("Monday");
//     break;
//   }
//   case 3: {
//     console.log("Tuesday");

//     break;
//   }

//   case 4: {
//     console.log("Wednesday");
//     break;
//   }

//   case 5: {
//     console.log("Thursday");
//     break;
//   }

//   case 6: {
//     console.log("Friday");
//     break;
//   }

//   case 7: {
//     console.log("Saturday");
//     break;
//   }

//   default: {
//     console.log("Invalid day number");
//   }
// }

// if (dayNumber === 1) {
//   console.log("Sunday");
// } else if (dayNumber === 2) {
//   console.log("Monday");
// } else if (dayNumber === 3) {
//   console.log("Tuesday");
// } else if (dayNumber === 4) {
//   console.log("Wednesday");
// } else if (dayNumber === 5) {
//   console.log("Thursday");
// } else if (dayNumber === 6) {
//   console.log("Friday");
// } else if (dayNumber === 7) {
//   console.log("Saturday");
// } else {
//   console.log("Invalid day number");
// }

// ? switch on string

// let randomString = "scissorfddhjafdajk";

// switch (randomString) {
//   case "rock": {
//     console.log("Rock");
//     break;
//   }
//   case "scissor": {
//     console.log("Scissor");
//     break;
//   }
//   case "paper": {
//     console.log("Paper");
//     break;
//   }

//   default: {
//     console.log("Invalid string...");
//   }
// }

// add/subtract/multiply/divide/power

// const option = "power";
// let num1 = 7;
// let num2 = 2;
// let result = 0;

// switch (option) {
//   case "add": {
//     result = num1 + num2;
//     break;
//   }
//   case "subtract": {
//     result = num1 - num2;
//     break;
//   }
//   case "multiply": {
//     result = num1 * num2;
//     break;
//   }
//   case "divide": {
//     result = num1 / num2;
//     break;
//   }
//   case "power": {
//     result = num1 ** num2;
//     break;
//   }
//   case "remainder": {
//     result = num1 % num2;
//     break;
//   }

//   default: {
//     console.log("Invalid option");
//   }
// }

// console.log(`${num1} ${option} ${num2} = ${result}`);
