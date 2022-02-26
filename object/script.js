/* // objects method
const student = {
	name: "Tasib",
	age: 19,
	balance: 5000,

	// method - first way decleare object method
	getBalance: function () {
		console.log(`${this.name} have ${this.balance} money`);
	},

	// method - second way decleare object method
	expensesMoney(money) {
		console.log("expenses money - ", money);

		// const newBalance = this.balance - money;
		// this.balance = newBalance;

		// this.balance = this.balance - money;

		this.balance -= money;
	},
};

student.getBalance();
console.log(student);
student.expensesMoney(1000);
console.log(student); */

// keys, values, entries, delete, seal, freeze
const phone = {
	name: "Realme 9i",
	price: 19500,
	cemera: 16,
	isNice: true,
};

// console.log(Object.keys(phone));
// console.log(Object.values(phone));
// console.log(Object.entries(phone));

// delete
/* console.log(phone);
delete phone.isNice;
console.log(phone); */

// seal
/* console.log(phone);
Object.seal(phone);
delete phone.isNice;
phone.price = 19000;
console.log(phone); */

// freeze
/* console.log(phone);
Object.freeze(phone);
delete phone.isNice;
phone.price = 19000;
console.log(phone); */

// Loop through an object using for in, for of, object entries
const student = {
	name: "Tasib",
	age: 19,
	isGood: true,
};

// 1
for (const propaty in student) {
	// console.log(propaty);
	// console.log(propaty, student[propaty]);
}

// 2
const studentKeys = Object.keys(student);
// console.log(studentKeys);
for (const propaty of studentKeys) {
	// console.log(propaty);
	// console.log(propaty, student[propaty]);
}

// 3
const studentEntries = Object.entries(student);
// console.log(studentEntries);
for (const propaty of studentEntries) {
	// console.log(propaty[0], student[propaty[0]]);
}

// destructuring way - 1
const destructuringStudent = Object.entries(student);
// console.log(studentEntries);
for (const [key, value] of destructuringStudent) {
	// console.log(key, value);
}

// destructuring way - 2
for (const [key, value] of Object.entries(student)) {
	// console.log(key, value);
}
