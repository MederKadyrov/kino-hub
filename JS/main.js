let mainContainer = document.querySelector('.container');
let searchForm = document.getElementById('searchForm')
let search = document.getElementById('search');
let items = document.querySelectorAll('div.item h5');
let backand = fetch('https://www.omdbapi.com/?apikey=b6003d8a&s=All');
let smallData = null;

backand.then((response) => response.json()).then((data) => {
    console.log(data)
    smallData = data.Search;
    smallData.forEach(element => {
        mainContainer.innerHTML += `
    <div class="item">
            <img src="${element.Poster}" alt="">
            <h5>${element.Title}</h5>
            <p>${element.Year}</p>
    </div>
    `
})})

// ! ------ поиск ------
searchForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    mainContainer.innerHTML = '';
    smallData.forEach(element => {
        if (element.Title.toLowerCase().includes(search.value.toLowerCase())) {
            mainContainer.innerHTML += `
            <div class="item">
                    <img src="${element.Poster}" alt="">
                    <h5>${element.Title}</h5>
                    <p>${element.Year}</p>
            </div>
            `
        }
})
})

