const loadUser = () => {
	fetch("https://randomuser.me/api/?results=5")
		.then(response => response.json())
		.then(data => displayUser(data));
};
loadUser();

const displayUser = data => {
	const users = data.results;
	const userContainer = document.getElementById("users");

	for (const user of users) {
		const p = document.createElement("p");
		p.innerText = `Name : ${user.name.title} ${user.name.first} ${user.name.last} - Email : ${user.email}`;
		userContainer.appendChild(p);
	}
};
