function loadPlayer() {
	document.getElementById("players").innerHTML = "";
	document.getElementById("spinner").style.display = "none";
	const searchInput = document.getElementById("search-input");
	const searchText = searchInput.value;

	const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			if (data.player == null) {
				document.getElementById("spinner").style.display = "block";
			} else {
				document.getElementById("spinner").style.display = "none";
				displayPlayer(data.player);
			}
		});

	searchInput.value = "";
}

function displayPlayer(players) {
	const playersContainer = document.getElementById("players");
	for (const player of players) {
		const div = document.createElement("div");
		div.innerHTML = `
      <div class="col">
        <div class="card h-100">
          <img src="${player.strThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${player.strPlayer}</h5>
            <p class="card-text">${
							player.strDescriptionEN?.slice(0, 50) ||
							player.strDescriptionIT?.slice(0, 50) ||
							""
						}</p>
          </div>
          <div class="row mb-3">
            <div class="col-md-6">
              <button type="button" class="btn btn-danger">DELETE</button>
            </div>
            <div class="col-md-6">
              <button type="button" class="btn btn-warning"  onclick="loadDetails('${
								player.idPlayer
							}')">DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    `;
		playersContainer.appendChild(div);
	}
}

function loadDetails(id) {
	const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
	fetch(url)
		.then(response => response.json())
		.then(data => displayPlayerDetails(data.players[0]));
}

function displayPlayerDetails(player) {
	const playerDetailsContainer = document.getElementById("player-details");
	playerDetailsContainer.innerHTML = `
    <div class="card h-100">
      <img src="${player.strThumb}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${player.strPlayer}</h5>
        <p class="card-title">${player.strNationality}</p>
        <p class="card-text">${
					player.strDescriptionEN?.slice(0, 150) ||
					player.strDescriptionIT?.slice(0, 150) ||
					""
				}</p>
      </div>
    </div>
  `;
}
