document.getElementById("search-btn").addEventListener("click", function () {
	const searchFiled = document.getElementById("search-field");
	const searchValue = searchFiled.value;
	searchFiled.value = "";

	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
	fetch(url)
		.then(response => response.json())
		.then(data => displayFood(data.meals));
});

function displayFood(foods) {
	const searchResult = document.getElementById("search-result");
	foods.forEach(food => {
		const div = document.createElement("div");
		div.classList.add("col");
		div.innerHTML = `
          <div class="card">
						<img src="${food.strMealThumb}" class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">${food.strMeal}</h5>
							<p class="card-text">${food.strInstructions.slice(0, 100)}</p>
						</div>
					</div>
    `;
		searchResult.appendChild(div);
	});
}
