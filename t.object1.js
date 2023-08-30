// ?nested object, destructuring

// ?Nested object
// object inside object

// const person1 = {
//   firstName: "Prasanna",
//   lastName: "Acharya",
//   location: {
//     temporary: "Balkhu",
//     permanent: "Lalitpur",
//   },
// };

// const student = {
//   name: "Rahul Sharma",
//   location: {
//     temporary: "Delhi",
//     permanent: "Mumbai",
//   },
//   contact: {
//     email: "rahul@gmail.com",
//     mobile: 1234567,
//     telephone: 14464031,
//   },
// };

// CRUD
//? Read
// dot operator
// console.log(student.location.temporary);
// square bracket
// console.log(student["contact"]["email"]);

// ADD/UPDATE
// student.location.temporary = "Kolkata";
// student.location.vacationAddress = "Goa";
// student["location"]["vacationAddress"] = "Punjab";

// DELETE
// delete student.contact.telephone;
// console.log(student);

// ?Object Destructure

// const careerStats = {
//   goals: 700,
//   redCard: 10,
//   yellowCard: 30,
// };
// const goals = 300;
// const player = {
//   name: "Lionel Messi",
//   age: 37,
//   hasWorldCup: true,
//   ballonDor: 8,
//   stat: careerStats,
// };

// Lionel Messi has won worldCup and got 700 career goals at age of 37.
// console.log(
//   `${player.name} has won worldcup and got ${player.stat.goals} career goals at age of ${player.age} `
// );

// destructure the object
// const {
//   name,
//   age,
//   hasWorldCup,
//   ballonDor,
//   stat: { goals: messiGoal },
// } = player;

// console.log(
//   `${name} has won worldcup and got ${messiGoal} career goals at age of ${age} `
// );

// personal info
// add fields name , age, college, temporary and permanent location
// print like below
// My name is Rishav Acharya and my age is 18.
// I am in Caribbean college and live in Balkhu.
// My permanent address is Biratnagar.

// const personalInfo = {
//   name: "Nischal Dhungel",
//   age: 21,
//   college: "Orchid",
//   location: {
//     temporary: "Ktm",
//     permanent: "Pokhara",
//   },
// };

// console.log(`My name is ${personalInfo.name} and my age is ${personalInfo.age}.I am in

// ${personalInfo.college} college and live in ${personalInfo.location.temporary}.My permanent address is ${personalInfo.location.permanent}`);

// destructure
// const {
//   name,
//   age,
//   location: { temporary, permanent },
//   college,
// } = personalInfo;

// console.log(`My name is ${name} and my age is ${age}.I am in

// ${college} college and live in ${temporary}.My permanent address is ${permanent}`);
