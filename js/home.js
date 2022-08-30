
let url = 'https://ghibliapi.herokuapp.com/films'

const divFilmCards = document.getElementById('filmlist-container');
const filmCardTemplate = document.querySelector('[film-card-template]');

const searchInput = document.getElementById('search__input');

const sortFilter = document.getElementById('sort-by');
const orderFilter = document.getElementById('order')



let films = []

fetch(url)
    .then((text) => text.json())
    .then((data) => {
        films = data.map ((film, i) => {
            const card = filmCardTemplate.content.cloneNode(true).children[0]
            const enlace = card.querySelector("[film-card]")
            const picture = card.querySelector("[img-card]")
            const filmTitle = card.querySelector("[film-title]")
            const checkmarkInput = card.querySelector("[checkmark-input]")
            const checkmarkLabel = card.querySelector("[checkmark-label]")
            const filmYear = card.querySelector("[film-year]")
            const filmDuration = card.querySelector("[duration]")
            // const filmDescription = card.querySelector("[film-description]")
            const filmRating = card.querySelector("[star-rating]")
            enlace.setAttribute('href', "../html/film.html?film_id=" + film.id)
            enlace.setAttribute('id', "card" + i)
            picture.setAttribute('src', film.image)
            filmTitle.innerText = film.title
            checkmarkInput.setAttribute('id', film.id)
            checkmarkInput.addEventListener('click', filmTracking)
            checkmarkLabel.setAttribute('for', film.id)
            filmYear.innerText = film.release_date
            filmDuration.innerText = film.running_time + " min"
            // filmDescription.innerText = film.description
            filmRating.innerHTML = `<button class="h_star">${(film.rt_score >= 20)? "&#9733" : "&#9734"}</button>
            <button class="h_star">${(film.rt_score >= 36)? "&#9733" : "&#9734"}</button>
            <button class="h_star">${(film.rt_score >= 56)? "&#9733" : "&#9734"}</button>
            <button class="h_star">${(film.rt_score >= 76)? "&#9733" : "&#9734"}</button>
            <button class="h_star">${(film.rt_score >= 96)? "&#9733" : "&#9734"}</button>`
            divFilmCards.append(card)
            return {id: film.id, title: film.title, year: film.release_date, audienceScore: film.rt_score, duration: film.running_time, element: card}
        })
    }


    );

// FILMS CHECKING FUNCTION

import {saveCheckedFilm, getCheckedFilms} from "../js/firebase.js";
    
const checkedFilms = getCheckedFilms()
window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot = await getCheckedFilms()

    querySnapshot.forEach(doc => {
        console.log(doc)
    })
})

function filmTracking(e) {
    const filmChecked = e.target

        const checkmarkID = filmChecked.id
        const checkmarkStatus = filmChecked.checked

        console.log(checkmarkID, checkmarkStatus)
        saveCheckedFilm(checkmarkID, checkmarkStatus)
}





// FILMS SEARCHING FUNCTION

    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()
        console.log(value)
        films.forEach(film => {
            let searchItem = ""
            searchItem = film.title.toLowerCase()
            searchItem.includes(value) ? film.element.classList.remove('hide') : film.element.classList.add('hide');
        })

    })


// FILMS FILTERING FUNCTION

function Filter(sortSelected, orderSelected) {
    if(sortSelected == "Duration") {
        films.sort((a, b) => {
            if(orderSelected == "Descendant") {
                return b.duration - a.duration;
            }
            return a.duration - b.duration;
    })
    }

    if(sortSelected == "Year") {
        films.sort((a, b) => {
            if(orderSelected == "Descendant") {
                return b.year - a.year;
            }
            return a.year - b.year;
    })
    } 

    if(sortSelected == "Audience Score") {
        films.sort((a, b) => {
            if(orderSelected == "Descendant") {
                return b.audienceScore - a.audienceScore;
            }
            return a.audienceScore - b.audienceScore;
    })} 

    divFilmCards.innerHTML = "";
    films.forEach(film => {
        divFilmCards.append(film.element)})
}


    sortFilter.addEventListener("change", (e) => {
        orderSelected = orderFilter.value
        sortSelected = e.target.value
        Filter(sortSelected, orderSelected)
    });

    orderFilter.addEventListener("change", (e) => {
        sortSelected = sortFilter.value
        orderSelected = e.target.value
        Filter(sortSelected, orderSelected)
    });
