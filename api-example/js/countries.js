/* const loadCountries = () => {
	fetch("https://restcountries.com/v3.1/all")
		.then(response => response.json())
		.then(data => displayCountries(data));
};
loadCountries();

const displayCountries = countries => {
	const countriesContainer = document.getElementById("countries");

	countries.forEach(countrie => {
		const div = document.createElement("div");
		div.classList.add("countrie");

		div.innerHTML = `
			<h3>Name : ${countrie.name.common}</h3>
			<p>${countrie.capital}</P>
			<button onclick="loadDetail('${countrie.name.common}')">DETAILS</button>
		`;

		countriesContainer.appendChild(div);
	});
};

function loadDetail(name) {
	const url = `https://restcountries.com/v3.1/name/${name}`;
	fetch(url)
		.then(response => response.json())
		.then(data => displayCountrieDetail(data));
}

function displayCountrieDetail(countrie) {
	const countrieDetail = document.getElementById("countrie-details");
	countrieDetail.innerHTML = `
	<p>Area : ${countrie.area}</P>
	<img src="${countrie.flags.svg}"/>
	`;
}
 */
