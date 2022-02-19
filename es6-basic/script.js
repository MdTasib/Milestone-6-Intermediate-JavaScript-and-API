// template string
const firstName = "Mohammad";
const lastName = "Tasib";
const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

const number = 10;
// console.log(`Number is : ${number}`);

// function
function add(num1, num2) {
	return num1 + num2;
}

const result = add(5, 5);
// console.log(result);

// arrow function
const addTwoNumber = (num1, num2) => num1 + num2;
const result2 = addTwoNumber(6, 6);
// console.log(result2);

// spread operator
const numbers = [1, 2, 3, 4];
// console.log(numbers);
// console.log(...numbers);

const copyNumbers = [...numbers];
// console.log(copyNumbers);
numbers.push(5);
console.log(numbers);
console.log(copyNumbers);
