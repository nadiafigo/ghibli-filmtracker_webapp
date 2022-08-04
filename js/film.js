let url = 'https://ghibliapi.herokuapp.com/films'

const divFilmTitle = document.getElementById('filmheader');
const divFilmImg = document.getElementById('film-picture');
const divAudienceStars = document.getElementById('star-rating__audience');
const allStars = document.querySelectorAll('.star');
const divDescription = document.getElementById('film-description');


fetch(url)
.then