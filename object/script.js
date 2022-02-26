// objects method
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
console.log(student);
