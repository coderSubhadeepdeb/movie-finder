const sliderMovieData = JSON.parse(sessionStorage.getItem('sliderMoviesArray'));
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

 function displayResult(data){

    const movie = data[0];

    result.innerHTML=`<div class = "poster">
        <img class="movie-poster" src = "${movie.poster}" alt = "movie poster">
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title">${movie.title}</h3>
        <ul class = "movie-misc-info">
            <li class = "year"><b>Year:</b> ${movie.year}</li>
            <li class = "rating"><b>Ratings: ${movie.rated}</b></li>
            <li class = "released"><b>Released:</b> ${movie.released}</li>
        </ul>
        <p class = "genre"><b>Genre:</b> ${movie.genre}</p>
        <p class = "director"><b>Director:</b> ${movie.director}</p>
        <p class = "actors"><b>Actors: </b>${movie.actors}</p>
        <p class = "plot"><b>Plot:</b> ${movie.plot}</p>
        <p class = "language"><b>Language:</b> ${movie.language}</p>
        <p class = "awards"><b><i style="color: gold;" class="fas fa-award"></i></b> ${movie.awards}</p>
    </div>`;
 }

 displayResult(sliderMovieData);

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