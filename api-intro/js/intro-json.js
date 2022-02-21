const user = {
	name: "Mohammad Tasib",
	age: 19,
	study: {
		ssc: "Coronation",
		hsc: "omargoni m.e.s",
	},
};

const userStringify = JSON.stringify(user);

console.log("user - ", user);
console.log("stringiry user - ", userStringify);

const userParse = JSON.parse(userStringify);

console.log("user parse - ", userParse);
