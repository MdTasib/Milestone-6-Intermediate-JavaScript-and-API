// Use bind to borrow method from another object
const student1 = {
	name: "Tasib",
	age: 19,
	getName() {
		console.log(this.name, "is good");
	},
};

const student2 = {
	name: "Rafi",
	age: 22,
};

const student3 = {
	name: "Rakib",
	age: 18,
};

student1.getName();

const student2BindName = student1.getName.bind(student2);
student2BindName();

const student3BindName = student1.getName.bind(student3);
student3BindName();
