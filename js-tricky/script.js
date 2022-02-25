// /////////////////// Data Types
/* console.log(typeof 333); // number
console.log(typeof "tasib"); // string
console.log(typeof true); // boolen
console.log(typeof undefined); // undefined
 */

// Callback function and pass different functions

function goodMessage(name, good) {
	good(name);
}

function goodMorning(name) {
	console.log("Good Morning", name);
}

goodMessage("Tasib", goodMorning);
goodMessage("Rafi", goodMorning);
