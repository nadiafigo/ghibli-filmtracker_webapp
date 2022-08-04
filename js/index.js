let url = 'https://ghibliapi.herokuapp.com/films'

const divFilmCards = document.getElementById('filmlist-container');
const allStars = document.querySelectorAll('.star');

fetch(url) 
    .then((text) => text.json())
    .then((data) => {
        console.log(data)
        console.log(data.length)
        let card = ""
        for(let i = 0; i < data.length; i++) {
            info = data[i]
            card = `${card}<a class="film" href="./html/film.html?film_id=${info.id}">
            <img class="film-pic" src="${info.image}"/>
            <div class="film-info">
            <div class="film-title">
                <h3 class="title">${info.title}</h3>
                    <input type="checkbox" id="film__checkbox_${i}" class="film__checkbox">
                    <label for="film__checkbox_${i}" class="checkmark">
                        <img class="checked-icon" src="./img/icons/icons8-marca-de-verificación-30.png" alt="checked-icon">
                    </label>
            </div>
            <p class="year">${info.release_date}</p>
            <p class="description">${info.description}</p>
            <div class="star-rating">
                <button class="star">${(info.rt_score >= 20)? "&#9733" : "&#9734"}</button>
                <button class="star">${(info.rt_score >= 40)? "&#9733" : "&#9734"}</button>
                <button class="star">${(info.rt_score >= 60)? "&#9733" : "&#9734"}</button>
                <button class="star">${(info.rt_score >= 80)? "&#9733" : "&#9734"}</button>
                <button class="star">${(info.rt_score >= 100)? "&#9733" : "&#9734"}</button>
            </div>
            </div>
        </a>`
    }
        divFilmCards.innerHTML = card
    });



