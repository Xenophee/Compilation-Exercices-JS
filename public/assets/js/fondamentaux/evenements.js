// -------------------------------------------------------------------------------
// Exercice 1

let button = document.getElementById('clickMe');

button.addEventListener('click', () => {
    console.log('Click');
});

// Autre possibilité mais à éviter
button.onclick = () => {
    console.log('click onclick');
};

// -------------------------------------------------------------------------------
// Exercice 2

let picture = document.getElementById('picture');

picture.addEventListener('mouseover', () => {
    console.log(picture.getAttribute('src'));
}) ;


// -------------------------------------------------------------------------------
// Exercice 3

// keyCode est déprécié
document.addEventListener('keydown', (value) => {
    console.log(`${value.keyCode} --> '${value.key}'`);
});


// -------------------------------------------------------------------------------
// Exercice 4

let allLi = document.querySelectorAll('li');

allLi.forEach(li => {
    li.addEventListener('click', element => {
        console.log(element.target.textContent);
    });
});

// Possibilité similaire
allLi.forEach(li => {
    li.addEventListener('click', () => {
        console.log(li.innerHTML);
    });
});


// ------------------------------------------------------------------------------
// Exercice 5

let form = document.querySelector('form');
let inputsForm = document.querySelectorAll('input[type=text]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputsForm.forEach((input) => {
        console.log(input.value);
    });
});


// ------------------------------------------------------------------------------
// Exercice 6

let inputs = document.querySelectorAll('.form-control');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('focusField');
    });
});

inputs.forEach(input => {
    input.addEventListener('blur', () => {
        input.classList.remove('focusField');
    });     
});

// input.style.backgroundColor= ''; Possibilité d'utiliser cette méthode également mais à éviter

// ---------------------------------------------------------------------------------
// Exercice 7

let select = document.querySelector('select');

select.addEventListener('change', (event) => {
    console.log(event.target.value);
});



// =================================================================================
// ---------------------------------------------------------------------------------
// Affiche le résultat des exercices

showResult.addEventListener('click', () => {
    let resultContainer = document.querySelector('.result-container');
    resultContainer.classList.toggle('d-none');
})
