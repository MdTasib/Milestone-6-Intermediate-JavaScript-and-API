// Use bind to borrow method from another object
const student1 = {
	name: "Tasib",
	age: 19,
	balance: 1000,
	getName() {
		console.log(this.name, "is good");
	},
	countBalance(tk) {
		console.log("previos balance - ", this.balance);
		this.balance += tk;
		console.log("new balance - ", this.name, this.balance);
	},
};

const student2 = {
	name: "Rafi",
	age: 22,
	balance: 500,
};

const student3 = {
	name: "Rakib",
	age: 18,
	balance: 100,
};

// student1.getName();
// student1.countBalance(500);

const student2BindName = student1.getName.bind(student2);
// student2BindName();
// student1.countBalance.call(student2, 500); // call
// student1.countBalance.apply(student2, [1000]); // apply

const student3BindName = student1.getName.bind(student3);
// student3BindName();
// student1.countBalance.call(student3, 100); // call
// student1.countBalance.apply(student3, [200]); // apply
