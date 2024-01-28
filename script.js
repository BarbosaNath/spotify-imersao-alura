const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artists");
const resultPlaylist = document.getElementById("result-playlist");

function requestApi(searchInput) {
  const url = `http://localhost:3000/artists?name_like=${searchInput}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

function displayResults(results) {
  resultPlaylist.classList.add("hidden");

  let resultHTML = "";

  results.forEach((element) => {
    resultHTML += `
      <div class="artist-card">
        <div class="card-img">
          <img class="artist-img" src="${element.urlImg}"/>
          <div class="play">
            <span class="fa fa-solid fa-play"></span>
          </div>
        </div>

        <div class="card-text">
          <a title="${element.name}" class="vst" href=""></a>
          <span class="artist-name" id="artist-name">${element.name}</span>
          <span class="artist-categorie">Artista</span>
          </a>
        </div>
      </div>
    `;
  });

  resultArtist.innerHTML = resultHTML;
  resultArtist.classList.remove("hidden");
}

document.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  if (searchTerm === "") {
    resultPlaylist.classList.remove("hidden");
    resultArtist.classList.add("hidden");
    return;
  }
  requestApi(searchTerm);
});
