// ------------------------------------------------------------------------
// Exercice 1

let textToDisplay = 'Comment devenir un AS en JS';

document.getElementById('title').innerHTML = textToDisplay;


// ------------------------------------------------------------------------
// Exercice 2

let title = document.getElementById('title');
let description = document.querySelector('.description');
let elements = document.querySelectorAll('#languagesList > li');

console.log(title.textContent);
console.log(description.textContent);

elements.forEach(element => {
    console.log(element.textContent);
});


// ------------------------------------------------------------------------
// Exercice 3

let liSelect = document.querySelectorAll('#languagesList > li');

liSelect.forEach((element, index) => {
    let modif = `${index +1} - ${element.textContent}`;
    element.textContent = modif;
});


// --------------------------------------------------------------------------
// Exercice 4

let img = document.getElementById('picture');
let input =  document.getElementById('src_image');

input.value = img.src;


// --------------------------------------------------------------------------
// Exercice 5

let span = document.querySelector('.description > span');
span.classList.add('important');

// On peut utiliser la methode setAttribute qui permet d'ajouter du style mais à éviter
span.setAttribute('style', 'fontWeight:bold');

// Autre méthode pour ajouter un attribut
span.style.fontWeight = 'bold';


// --------------------------------------------------------------------------
// Exercice 6

let javascript = document.querySelector('#languagesList > li:nth-of-type(4)');

javascript.classList.add('red');





// =================================================================================
// ---------------------------------------------------------------------------------
// Affiche le résultat des exercices

showResult.addEventListener('click', () => {
    let resultContainer = document.querySelector('.result-container');
    resultContainer.classList.toggle('d-none');
});