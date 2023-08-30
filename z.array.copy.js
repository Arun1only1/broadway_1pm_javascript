// const num = [2, 5, 3, 4, 6, 11];

// copy array
// const num2 = num;
// this copies reference of num array to num2 variable

// console.log(num);

// num2.push(100, 200, 300);
// console.log(num);

// ?if reference copy is happening, it is called shallow copy

// ?if value is being copied, it is called deep copy

// copy using spread operator

// const num1 = [2, 5, 3, 4, 6, 11];

// const num2 = [...num1];

// num2.pop();

// console.log(num1);

// structuredClone (available from node version 17)
// structured clone is used for deep copy

// const num1 = [2, 5, 3, 4, 6, 11];

// const num2 = structuredClone(num1);

// num2.push(500);

// console.log(num1);
