// object

// const firstName = "Benjin";
// const lastName = "Lama";
// const location = "Bouddha";
// const phoneNumber = "9849521236";
// const isMarried = false;
// const isGraduate = true;

// const firstName1 = "Dipen";
// const lastName1 = "Shrestha";
// const location1 = "Lalitpur";
// const phoneNumber1 = "9849521236";
// const isMarried1 = false;
// const isGraduate1 = true;

// ?object => grouping of similar characteristics
// key and value pair
// object is complex data type
// const person1 = {
//   firstName: "Benjin",
//   lastName: "Lama",
//   location: "Bouddha",
//   phoneNumber: "9845632145",
//   isMarried: false,
//   isGraduate: true,
// };

// const person2 = {
//   firstName: "Dipen",
//   lastName: "Shrestha",
//   location: "lalitpur",
//   phoneNumber: "9845632145",
//   isMarried: false,
//   isGraduate: true,
// };
// console.log(person1);

// CRUD
// Create/Add
// two ways
// 1. dot operator (max use)
// 2. square bracket( cannot ignore)

// person1.collegeName = "Kantipur City College";
// person1["currentSemester"] = 7;

// Retrieve/Read/Get
// we have dot operator and square operator
// console.log(person1.firstName);
// console.log(person1["lastName"]);
// Update/Edit
// *Upsert => Update  or Insert
// person1.firstName = "Benzema";
// person1["lastName"] = "Khadka";

// Delete/Remove

// delete person1.isMarried;
// delete person1.phoneNumber;
// console.log(person1);

// 2.Create an object named myHouseDetails and add following properties
// numberOfRooms
// numberOfMembers
// colorOfHouse
// builtYear
// numberOfStorey

// A.Delete numberOfMembers property
// B.Update numberOfRooms by new value
//             C.Add a  new property called estimatedPriceOfHouse
// D.Print out all properties on the console like “I have a green coloured house
//        with 9 rooms where 10 people are  living. The house is 3 storey and was built in
//         2011 with an estimated budget of 2 crores.”

// const myHouseDetails = {
//   numberOfRooms: 9,
//   numberOfMembers: 4,
//   colorOfHouse: "orange",
//   builtYear: 2000,
//   numberOfStorey: 3,
// };

// console.log(myHouseDetails);
// delete myHouseDetails.numberOfMembers;
// myHouseDetails.numberOfRooms = 11;
// myHouseDetails.estimatedPriceOfHouse = "2crore";
// console.log(myHouseDetails);

// console.log(
//   `I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} people are living.`
// );
