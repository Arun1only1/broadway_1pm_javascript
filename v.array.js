// array is collection of multiple data
// array is also complex data type
// array can be collection of mixed data types

// syntax []

// const num = [1, 2, 3, 4, 5, "arun", true, { roll: 25 }, null, undefined]; //bad practice

// good practice=> always keep data of only one type in a array

// const scores = [2, 3, 4, 5, 6];

// const students = ["Dipen", "Benjin", "Prasanna", "Rohan"];

// const isMarried = [true, false, true, true];
// console.log(isMarried);

// create an array named countries and add values
// const countries = ["Nepal", "Japan", "S.Korea", "Australia"];
// items inside array are arrange in an order called index

// length gives total number of items in array
// console.log(countries.length);
// console.log(countries[countries.length - 1]);

// string is array of character
// const country = "Nepal"; //["N","e","p","a","l"]
// console.log(country.length);
// console.log(country[0]);

// CRUD in array
const products = ["Laptop", "Mouse", "Keyboard", "Router"];

// ?to add item to end of array
// ?push
// products.push("Monitor");
// products.push("Earphone", "Glass");

// ?to remove last item
// ?also returns removed item
// ?pop
// const lasProduct = products.pop();
// console.log(lasProduct);

// console.log(products);

// use for loop in array items to iterate
// for (i = 0; i <= products.length - 1; i++) {
//   console.log(products[i], i);
// }

// ?map => returns new array

// 90% times we use map and filter
// const newProducts = products.map((item, index, self) => {
//   return item.toUpperCase();
// });

// console.log(newProducts);

// const friendList = ["Prasanna", "Benjin", "Dipen"];
// friendList.push("Samriddhi");

// friendList.map((item, index, self) => {
//   console.log(item, index, self);
// });
// console.log(friendList);

// const priceList = [200, 100, 500, 650];
// return array has same length as original array
// increase every price by 50
// const newPriceList = priceList.map((item, index, self) => {
//   const newPrice = item + 50;
//   return newPrice;
// });

// console.log(newPriceList);

// const priceList = [200, 100, 500, 650];
// filter => to remove unwanted items from array
// => returns new array

// const newPriceList = priceList.filter((item, index, self) => {
// if (item > 900) {
//   return item;
// }

//   return item > 300;
// });

// console.log(newPriceList);

// filter => array size can reduce
// map=> array size is same

// const scores = [-2, 5, 15, 6, -11, -50];

// only positive scores
// const positiveScores = scores.filter((item) => {
//   if (item > 0) {
//     return item;
//   }
// });

// console.log(positiveScores);

//? find returns  first element that satisfies the condition
// find is performant than filter
// filter runs for every item
// find runs until the item with condition is encountered
// find and filter gives same performance if item is at last index
// const friendList = ["Arun", "Rajeev", "Salon", "Minal", "Salon"];

// const friend = friendList.find((item, index, self) => {
//   if (item === "Salon") {
//     return item;
//   }
// });

// console.log(friend);

// ?findIndex returns index of first element that satisfies the condition

// ?shift
// ?unshift
// const letters = ["a", "b", "c", "d", "e"];
// letters.push("f", "g");
// letters.pop();
// shift
// letters.shift();
// letters.unshift("z", "x");
// console.log(letters);

// ?slice
const letters = ["a", "b", "c", "d", "e"];

// syntax
// slice(startIndex)
// slice(startIndex,endIndex)
// console.log(letters.slice(3));
console.log(letters.slice(1, 3));
