document.getElementById("search-btn").addEventListener("click", async () => {
	const searchFiled = document.getElementById("search-field");
	const searchValue = searchFiled.value;
	searchFiled.value = "";

	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

	const res = await fetch(url);
	const data = await res.json();
	displayFood(data.meals);

	// fetch(url)
	// 	.then(response => response.json())
	// 	.then(data => displayFood(data.meals));
});

const displayFood = foods => {
	const searchResult = document.getElementById("search-result");
	searchResult.textContent = "";
	foods.forEach(food => {
		const div = document.createElement("div");
		div.classList.add("col");
		div.innerHTML = `
          <div onclick="loadDetail(${food.idMeal})" class="card">
						<img src="${food.strMealThumb}" class="card-img-top" alt="..." />
						<div class="card-body">
							<h5 class="card-title">${food.strMeal}</h5>
							<p class="card-text">${food.strInstructions.slice(0, 100)}</p>
						</div>
					</div>
    `;
		searchResult.appendChild(div);
	});
};

const loadDetail = async mealId => {
	const res = await fetch(
		`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
	);
	const data = await res.json();
	displayDetail(data.meals[0]);

	// fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
	// 	.then(response => response.json())
	// 	.then(data => displayDetail(data.meals[0]));
};

function displayDetail(meal) {
	const mealDetail = document.getElementById("meal-details");
	mealDetail.textContent = "";
	const div = document.createElement("div");
	div.classList.add("card");
	div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
    </div>
  `;
	mealDetail.appendChild(div);
}
