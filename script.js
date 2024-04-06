const URL = "https://dog.ceo/api/breeds/image/random";
const URLBreeds = "https://dog.ceo/api/breeds/list/all";
const place = document.querySelector('p');
let tab = [];
const selectDog = document.querySelector('select');
const img = document.querySelector('img');
const refreshBtn = document.querySelector('button');
let breedName = '';
const info = document.querySelector('.info');

const appLi = (liItemText) => {
    const liItem = document.createElement('li');
    liItem.innerHTML = liItemText;
    list.appendChild(liItem);
}

const createDogBreeds = (liItemText) => {
    const listOption = document.createElement('option');
    listOption.setAttribute('value', liItemText);
    listOption.innerHTML = liItemText;
    selectDog.appendChild(listOption);
}

const displayImage = (breedName) => {
    console.log(breedName);
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
        .then(res => res.json())
        .then(data => {
            img.setAttribute('src', data.message)
        })
        .catch(err => console.error(err));
}

fetch(URLBreeds)
    .then(res => res.json())
    .then(data => {
        for (let key in data.message) {
            createDogBreeds(key);
        }
    })
    .catch(err => console.error(err));

const showInfo = () => {
    //dać klasę active na okienko które będzie na środku
    console.log("info")
}
selectDog.addEventListener('change', (e) => {
    breedName = e.target.value;
    displayImage(breedName);
})
refreshBtn.addEventListener('click', () => { displayImage(breedName) });
info.addEventListener('click', showInfo);