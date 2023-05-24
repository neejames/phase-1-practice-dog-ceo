console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

let breeds;
fetch(imgUrl) 
    .then((resp) => resp.json())
    .then((imgData) => appendImages(imgData.message));

function appendImages(dogImg) {
    const imgContainer = document.querySelector("div");
    dogImg.forEach(image => {
        const img = document.createElement('img')
        img.src = image
        img.alt = image
        imgContainer.appendChild(img)
    })
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
    .then((resp) => resp.json())
    .then((breedData) => {
        breeds = Object.keys(breedData.message);
        renderBreed(breeds)});

const ul = document.querySelector("ul");

function renderBreed(breeds) {
    console.log(breeds);
   
    for(let breed of breeds) {
        const li = document.createElement('li');
        li.textContent = breed;
        li.addEventListener("click", (event) => {
            event.target.style.color = 'blue';
        })
        ul.appendChild(li);
    }
}

const dropdown = document.querySelector("select");
dropdown.addEventListener("change", filterBreeds);

function filterBreeds(event) {
    let letter = event.target.value;
    let filterBreed = breeds.filter((breed) => {
        return breed[0] === letter
    });
    console.log(filterBreed);
    ul.innerHTML = "";
    renderBreed(filterBreed);
}