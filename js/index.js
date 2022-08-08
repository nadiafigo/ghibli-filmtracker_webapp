let url = 'https://ghibliapi.herokuapp.com/films'

const divFilmCards = document.getElementById('filmlist-container');
const filmCardTemplate = document.querySelector('[film-card-template]')

const searchInput = document.getElementById('search__input');


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
            const filmDescription = card.querySelector("[film-description]")
            const filmRating = card.querySelector("[star-rating]")
            enlace.setAttribute('href', "./html/film.html?film_id=" + film.id)
            enlace.setAttribute('id', "card" + i)
            picture.setAttribute('src', film.image)
            filmTitle.innerText = film.title
            checkmarkInput.setAttribute('id', "film__checkbox" + i)
            checkmarkLabel.setAttribute('for', "film__checkbox" + i)
            filmYear.innerText = film.release_date
            filmDescription.innerText = film.description
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

    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()
        console.log(value)
        films.forEach(film => {
            let searchItem = ""
            searchItem = film.title.toLowerCase()
            console.log(searchItem)
            if(searchItem.includes(value)) {
                film.element.classList.add('visible')
            } else {
                film.element.classList.add('hide')
            }
        })
    
    })


// fetch(url) 
//     .then((text) => text.json())
//     .then((data) => {
//         let search = ""
//         for(let i = 0; i < data.length; i++) {
//             info = data[i]
//             search = `${search}<a href="./html/film.html?film_id=${info.id}"><option>${info.title}</option></a>`
//             // search = `${search}<option><a href="./html/film.html?film_id=${info.id}">${info.title}</a></option>`
//     }

//     datalistContainer.innerHTML = search

//     })});