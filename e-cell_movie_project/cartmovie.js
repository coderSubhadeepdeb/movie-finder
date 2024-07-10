const wrapper = document.getElementById('cartwrapper');

const favMovie = JSON.parse(sessionStorage.getItem('favMoviesArray'));

function addMovieToFavouritePage() {
    
    for (let i = 0; i < favMovie.length; i++) {
        let poster = favMovie[i].poster;
        let movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `<img class="poster" src=${poster}>`;
        wrapper.appendChild(movieCard);
    }

}

addMovieToFavouritePage();