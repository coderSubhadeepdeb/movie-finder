const searchBox = document.getElementById('search-input-text');
const searchList = document.getElementById('search-list');
const result = document.getElementById('result');
const addToCart = document.querySelector('#add-to-cart');
const subscription= document.querySelectorAll('.ottinner')


// event listener for subscription

subscription.forEach(platform=>{
    platform.addEventListener('mouseenter',()=>{
        platform.children[1].style.display='flex';
        
    });
    platform.addEventListener('mouseleave',()=>{
        platform.children[1].style.display='none';
    });
    
});


// Function to find movies
function getMovies() {
    let title = (searchBox.value).trim();
    if (title.length > 0) {
        searchList.classList.remove('hide-search-list');
        loadMovies(title);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

// Function to get movies from OMDB API
async function loadMovies(title) {
    const URL = `https://www.omdbapi.com/?apikey=8d771bf2&s=${title}&page=1`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    if (data.Response == "True") showDropDownMovie(data.Search);
}

// Function to display movie in search list
function showDropDownMovie(movies) {
    searchList.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
        let dropItem = document.createElement('div');
        dropItem.dataset.id = movies[i].imdbID; // setting movie id in  data-id
        dropItem.classList.add('search-list-item');
        if (movies[i].Poster != "N/A")
            moviePoster = movies[i].Poster;
        else
            moviePoster = "folder 1/Brahmaputra-River.jpg";

        dropItem.innerHTML = `
        <div class = "thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[i].Title}</h3>
            <p>${movies[i].Year}</p>
        </div>
        `;
        searchList.appendChild(dropItem);
    }
    loadResult();
}

// Function to get movie details from OMDB API
function loadResult() {
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async () => {
            searchList.classList.add('hide-search-list');
            searchBox.value = "";
            const result = await fetch(`https://www.omdbapi.com/?i=${movie.dataset.id}&apikey=8d771bf2`);
            const movieDetails = await result.json();
            displayResult(movieDetails);
        });
    });
}

// Function to display movie info
function displayResult(details) {
    result.innerHTML = `
    <div class = "poster">
        <img class="movie-poster" src = "${(details.Poster != "N/A") ? details.Poster : "folder 1/Brahmaputra-River.jpg"}" alt = "movie poster">
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title">${details.Title}</h3>
        <ul class = "movie-misc-info">
            <li class = "year"><b>Year:</b> ${details.Year}</li>
            <li class = "rating"><b>Ratings: ${details.Rated}</b></li>
            <li class = "released"><b>Released:</b> ${details.Released}</li>
        </ul>
        <p class = "genre"><b>Genre:</b> ${details.Genre}</p>
        <p class = "director"><b>Director:</b> ${details.Director}</p>
        <p class = "actors"><b>Actors: </b>${details.Actors}</p>
        <p class = "plot"><b>Plot:</b> ${details.Plot}</p>
        <p class = "language"><b>Language:</b> ${details.Language}</p>
        <p class = "awards"><b><i style="color: gold;" class="fas fa-award"></i></b> ${details.Awards}</p>
    </div>
    `;
}

// store cart

const favMovieInLocal = JSON.parse(sessionStorage.getItem('favMoviesArray')) || [];

addToCart.addEventListener('click', function(){
    console.log('Added');
    
    const favMovieTitle = document.querySelector('.movie-title').innerText;
    const favMoviePoster = document.querySelector('.movie-poster').src; 
    const favMovie = {
        title: favMovieTitle,
        poster: favMoviePoster
    }
     
    favMovieInLocal.push(favMovie);
    sessionStorage.setItem('favMoviesArray', JSON.stringify(favMovieInLocal));
});


window.addEventListener('click', (event) => {
    if (event.target.className != "searchBox") {
        searchList.classList.add('hide-search-list');
    }
});