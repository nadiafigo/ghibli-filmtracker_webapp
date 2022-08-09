let url = 'https://ghibliapi.herokuapp.com/films'

const h1FilmTitle = document.getElementById('det_film-title')
const filmYear = document.getElementById('det_year')
const filmDuration = document.getElementById('det_duration')
const filmImg = document.getElementById('film-picture');
const divAudienceStars = document.getElementById('star-rating__audience');
const allStars = document.querySelectorAll('.star');
const description = document.getElementById('film-description');
const moreInfo = document.getElementById('more-info')

let params = new URLSearchParams(document.location.search);
let film_id = params.get("film_id");
console.log(film_id)


fetch(url + "/" + film_id)
.then((text) => text.json())
.then((movie) => {
    h1FilmTitle.innerText = movie.title
    filmYear.innerText = movie.release_date
    filmDuration.innerText = movie.running_time + " min."
    filmImg.setAttribute('src', movie.movie_banner)
    
    audienceScore = ''
    audienceScore = `
    <button class="rated-star">${(movie.rt_score >= 20)? "&#9733" : "&#9734"}</button>
    <button class="rated-star">${(movie.rt_score >= 40)? "&#9733" : "&#9734"}</button>
    <button class="rated-star">${(movie.rt_score >= 60)? "&#9733" : "&#9734"}</button>
    <button class="rated-star">${(movie.rt_score >= 80)? "&#9733" : "&#9734"}</button>
    <button class="rated-star">${(movie.rt_score >= 100)? "&#9733" : "&#9734"}</button>`

    divAudienceStars.innerHTML = audienceScore

    description.innerText = movie.description

    moreInfo.setAttribute('href', "https://ghibli.fandom.com/" + movie.title)
});


allStars.forEach((star, i) => {
    star.onclick = function() {
        let current_star_level = i + 1;
        allStars.forEach((star, j) => {
            if( current_star_level >= j + 1) {
                star.innerHTML = '&#9733';
            } else {
                star.innerHTML = '&#9734';               
            }
        }
        )}
});
