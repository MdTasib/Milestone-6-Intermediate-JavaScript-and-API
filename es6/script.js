// Destructuring Object to extract values to variables
const student = {
	name: "Mohammad Tasib",
	profession: "Student",
	ssc: {
		school: "Fatickchari Coronation Modle High School",
		gpa: 3.67,
	},
	hsc: {
		collage: "Omargoni MES Collage Chattogong",
		gpa: 4.17,
	},
};

// console.log(student);
// console.log(student.name);
// console.log(student.ssc.school);

// destructuring
const { name, profession } = student;
console.log(name, profession);

const { school, gpa } = student.ssc;
console.log(school, gpa);
