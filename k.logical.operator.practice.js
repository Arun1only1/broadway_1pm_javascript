// Let a=2,b=-3,c=5,d=10,e=9
// (a**c===d AND d===e+a-1) OR d%e!==1

let a = 2;
let b = -3;
let c = 5;
let d = 10;
let e = 9;
let firstCondition = a ** c === d; //false
console.log("firstCondition", firstCondition);

let secondCondition = d === e + a - 1; //true
console.log("secondCondition", secondCondition);

let thirdCondition = d % e !== 1; //false
console.log("thirdCondition", thirdCondition);

let result = (firstCondition && secondCondition) || thirdCondition;
console.log(`result => ${result}`);
