const API_KEY = 'api_key=9693b75e323039775751775ecdc14a55';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

fetch(API_URL)
    .then(res => res.json())
    .then(res => {
        const list = res.results;
        list.map((item) => {
            const name = item.title;
            const poster = item.poster_path;
            const movie = `<div class="movieinfo"><div class="poster"><img id="image" src="${IMG_URL}${poster}"></div>
            <div class="title"><h2 id="heading">${name}</h2></div></div>`
            document.querySelector('.images').innerHTML += movie;
        })
    })
    .catch(err => console.error(err))

const formE1 = document.querySelector("form")
const inputE1 = document.getElementById("text1")
const images = document.querySelector(".images")

let inputData = ""


async function searchMovie() {
    inputData = inputE1.value
    const url = `https://api.themoviedb.org/3/search/movie?query=${inputData}&${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    const list = data.results
    images.innerHTML = ""

    list.map((item) => {

        const name = item.title;
        const poster = item.poster_path;
        const overview = item.overview;
        const rating = item.vote_average
        const release_date = item.release_date
        const lang = item.original_language
        const movie = `<div class="movieinfo">
                <div class="poster"><img id="image" src="${IMG_URL}${poster}"></div>
                <div class="title"><h2 id="heading">${name}</h2></div>
                <div class="overview"><p> overview : ${overview}</p></div>
                <div class="rating"><h4> Vote_average : ${rating}</h4></div>
                <div class="release_date"><h4>Release date : ${release_date}</h4></div>
                <div class="lang"><h4 id="heading"> Original language : ${lang}</h4></div></div>`
        document.querySelector('.images').innerHTML += movie;

    })

}

formE1.addEventListener("submit", (event) => {
    event.preventDefault()
    searchMovie()
})