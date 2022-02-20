const numbers = [2, 3, 4, 5, 6];

// 1
// const dubbleIt = number => number * 2;

// const dubble = numbers.map(dubbleIt);
// console.log(dubble);

// 2
const dubble = numbers.map(number => number * 2);
// console.log(dubble);

// 3
const friends = ["Rafi", "Rakib", "Walid"];
const friendNameLength = friends.map(friend => friend.length);
// console.log(friendNameLength);

// 4
const students = [
	{ name: "Tasib", age: 19 },
	{ name: "Rafi", age: 22 },
	{ name: "Rakib", age: 18 },
];

const studentName = students.map(student => student.name);
console.log(studentName);
