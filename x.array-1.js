// Make an array of numbers and return array with doubled number.

// const num = [200, 400, 700, 11];
// [400,800,1400,22]

// Make an array of numbers and print whether the numbers are odd or even.
// Make an array of numbers and filter out even numbers

// const numbers = [2, 7, 8, 9, 11, 21, 35, 45];

// ?forEach
// numbers.forEach((item) => {
//   const rem = item % 2;

//   if (rem === 0) {
//     console.log("even", item);
//   } else {
//     console.log("odd", item);
//   }
// });

// const newNumbers = numbers.map((item, index, self) => {
//   return item + 5;
// });

// console.log(newNumbers);

// array of objects
// const laptops = [
//   {
//     name: "Macbook pro",
//     price: 1800,
//   },
//   {
//     name: "Asus TUF 15",
//     price: 1400,
//   },
//   {
//     name: "MSI GF63",
//     price: 1400,
//   },
//   {
//     name: "Acer Helios 300",
//     price: 1650,
//   },
// ];

// find laptop whose price is 1400
// const laptop = laptops.filter((item, index, self) => {
//   if (item.price === 1400) {
//     return item;
//   }
// });

// console.log(laptop.length);
// const newLaptops = laptops.map((item, index, self) => {
//   const newPrice = item.price + 200;

//   const newItem = { ...item, price: newPrice };

//   return newItem;
// });

// const laptopsAbove1600 = laptops.filter((item, index, self) => {
//   if (item.price > 1600) {
//     return item;
//   }
// });

// const newLaptopList = laptops.map((item, index, self) => {
//   if (item.name === "Asus TUF 15") {
//     const newPrice = item.price - 200;
//     const newItem = { name: item.name, price: newPrice };

//     return newItem;
//   }

//   return item;
// });

// change name of laptop Acer Helios 300 to Acer Helios 150
// console.log(laptops, newLaptopList);

// const updatedLaptopList = laptops.map((item, index, self) => {
//   if (item.name === "Acer Helios 300") {
//     const newName = "Acer Helios 150";
//     return { ...item, name: newName };
//   }

//   return item;
// });

// console.log(laptops);

// console.log(updatedLaptopList);

// ?slice, splice, sort, reverse, every,some

// const fruits = ["apple", "orange", "banana", "pineapple", "guava"];

// ?slice => piece
// const slicedFruits = fruits.slice(1, 4);
// console.log(slicedFruits);
// console.log(fruits);
// fruits.slice()

// ?sort,toSorted
// fruits.sort();

// console.log(fruits);

// const numList = [1, 55, 11, 2, 38, 39, 11111]; //dictionary
// numList.sort();// sort umList as if it is an array of string

// numList.sort((a, b) => a - b); //ascending sort
// numList.sort((a, b) => b - a); //descending sort

// console.log(numList);

// ?reverse
// const priceList = [23, 12, 34, 56];

// priceList.reverse();

// console.log(priceList);

// const names = ["Prasanna", "Arun", "Dipen", "Benjin"];
// ascending sort
// names.sort();

// descending sort
// names.sort().reverse();

// console.log(names);

//? every  => true/false
// const ageList = [10, 28, 38, 17, 18];
// to be adult=> age must be greater than or equals to 18
// const isAdultGroup = ageList.every((item, index, self) => {
//   return item >= 18;
// });

// console.log(isAdultGroup);

// ?some=> testing condition should be satisfied by at least one item
// ?returns true/false
// const numList = [2, 3, 4, 45];
// const hasOddNumber = numList.some((item, index, self) => {
//   if (item % 2 !== 0) {
//     return item;
//   }
// });

// console.log(hasOddNumber);

// ?splice
// const month = ["Jan", "Mar", "Apr", "May"];

// month.splice(1, 0, "Feb");

// console.log(month);

// const fruits = ["apple", "orange", "banana", "pineapple", "guava"];
// fruits.splice(2, 1, "JackFruit");
// console.log(fruits);

// ?join
// const random = ["hello", "hi", "john"];
// const result = random.join("-");
// console.log(result);

// ?concat
// add two arrays
// const arr1 = [2, 4, 6];
// const arr2 = [1, 3, 5];

// const arr3 = arr1.concat(arr2);
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// ?includes => check if item is there or not and returns true or false

// const pets = ["cat", "dog", "horse"];

// const result = pets.includes("cat");
// console.log(result);

// const name = "Benjin"; //["B","e","n","j","i","n"]
// const result = name.includes("J");
// const route = "/home/product/add";

// const result = route.includes("product");

// console.log(result);

// ?find
// const names = ["Washing machine", "Mobile", "TV", "Radio", "Clock"];
// const hasTV = names.includes("TV");
// console.log(hasTV);

// const value = names.find((item, index, self) => {
//   if (item === "TV") {
//     return item;
//   }
// });

// console.log(value);
