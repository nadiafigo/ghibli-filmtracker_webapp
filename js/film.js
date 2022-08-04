let url = 'https://ghibliapi.herokuapp.com/films'

const h1FilmTitle = document.getElementById('film-title')
const filmYear = document.getElementById('year')
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
    console.log(movie)
    h1FilmTitle.innerText = movie.title
    filmYear.innerText = movie.release_date
    filmImg.setAttribute('src', movie.image)
    
    audienceScore = ''
    audienceScore = `
    <button class="star">${(movie.rt_score >= 20)? "&#9733" : "&#9734"}</button>
    <button class="star">${(movie.rt_score >= 40)? "&#9733" : "&#9734"}</button>
    <button class="star">${(movie.rt_score >= 60)? "&#9733" : "&#9734"}</button>
    <button class="star">${(movie.rt_score >= 80)? "&#9733" : "&#9734"}</button>
    <button class="star">${(movie.rt_score >= 100)? "&#9733" : "&#9734"}</button>`

    divAudienceStars.innerHTML = audienceScore

    description.innerText = movie.description

    moreInfo.setAttribute('href', movie.url)
});
