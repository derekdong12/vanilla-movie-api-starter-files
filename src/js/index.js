// function getPkmn() {
//     fetch(`https://pokeapi.co/api/v2/pokemon/ditto`).then((result) => {
//         return result.json();
//     }).then((data) =>{
//         console.log(data);
//     })
// }

const pkmn = "newtwo";
async function getPkmn() {
    try {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}`);
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.log(error);
        alert("did you spell that correctly");
    }
}
getPkmn();


const DOMSelectors = {
    grid: document.querySelector(".movie-grid"),
};

const key = '';

const query = '';

const init = async function() {
    try {
        const response = await fetch(query);
        const data = await response.json();
        data.results.forEach((movie) => {
            DOMSelectors.grid.insertAdjacentHTML("beforehand", `<div class="movie-card">
            <div class="movie-card-front">
              <img
                src="https://image.tmdb.org/t/p/w300/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"
                alt=""
                class="poster"
              />
            </div>
            <div class="movie-card-back">
              <h3 class="movie-card-header">The Dark Knight</h3>
              <div class="score-box">
                <p class="user-score">Community Score</p>
                <p class="user-score">8.4</p>
              </div>
    
              <div class="release-box">
                <p class="release-date">Released</p>
                <p class="release-date">2020-06-12</p>
              </div>
    
              <div class="movie-genres">
                <li class="movie-genre">Sci-Fi</li>
                <li class="movie-genre">Fantasy</li>
                <li class="movie-genre">Horror</li>
              </div>
            </div>
          </div>`);
        });
    } catch (error) {
        console.log(error);
    }
}
init();