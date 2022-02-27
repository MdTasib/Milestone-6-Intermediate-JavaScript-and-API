function loadMeals(mealName) {
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
		.then(response => response.json())
		.then(data => displayMeals(data.meals));
}

loadMeals("fish");

function displayMeals(meals) {
	const mealsContainer = document.getElementById("meals");
	mealsContainer.textContent = "";
	for (const meal of meals) {
		const div = document.createElement("div");
		div.innerHTML = `
      <img width="80%" src="${meal.strMealThumb}"/>
      <h3>${meal.strMeal}</h3>
      <p>${meal.strInstructions.slice(0, 200)}</P>
    `;

		mealsContainer.appendChild(div);
	}
	showSpeinner("none");
	showContent("block");
}

// search food btn handler
function searchFood() {
	const searchInput = document.getElementById("search-input");
	const searchText = searchInput.value;
	showSpeinner("block");
	showContent("none");
	loadMeals(searchText);
	searchInput.value = "";
}

// speinner handle
function showSpeinner(isShow) {
	document.getElementById("speinner").style.display = isShow;
}

function showContent(isShow) {
	document.getElementById("meals").style.display = isShow;
}
