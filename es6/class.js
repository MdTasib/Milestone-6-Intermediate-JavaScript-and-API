// class Student {
// 	name;
// 	age;

// 	profession() {
// 		console.log(this.name, "is a student");
// 	}
// }

// const tasib = new Student();
// console.log(tasib);

class Student {
	name;
	age;

	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	profession() {
		console.log(this.name, "is a student");
	}
}

const tasib = new Student("Tasib", 19);
console.log(tasib);
console.log(tasib.name);

const rafi = new Student("Rafi", 22);
console.log(rafi);
