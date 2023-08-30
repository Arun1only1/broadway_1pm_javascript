// callback

// const getSum = (a, b, callbackFn) => {
//   const sum = a + b;
//   let error = true;
//   if (error === true) {
//     callbackFn("Something went wrong.", null);
//   } else {
//     callbackFn(null, sum);
//   }
// };

// getSum(2, 3, (error, result) => {
//   console.log(result);
//   console.log(error);
// });

// promise

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     let sum = 2 + 3;

//     if (error === true) {
//       reject("Something went wrong");
//     } else {
//       resolve(sum);
//     }
//   }, 1000);
// });

// promise should be resolved

// promise1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ??async await

// const getData = async () => {
//   try {
//     const value = await promise1;
//     console.log(value);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData();

// ? api hit,image processing, for loop 1 billion time

// for (let i = 0; i <= 10000000; i++) {
//   console.log(i);
// }
// console.log("HI");
