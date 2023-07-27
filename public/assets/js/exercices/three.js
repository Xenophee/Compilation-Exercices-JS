// ---------------------------------------------------------------------------------------
// Déclaration des REGEX

const REGEX_NO_NUMBER = new RegExp('^[a-zA-Z \'\-]*$');
const REGEX_EMAIL = new RegExp('^[a-zA-Z0-9\._\-]+[@][a-zA-Z0-9_\-]*[.][a-zA-Z]{1,5}$');
const REGEX_AGE = new RegExp('^[0-9]{1,3}$');


// ---------------------------------------------------------------------------------------
// Déclaration des variables pour saisir chaque input et le formulaire

const form = document.getElementById('form');

const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const email = document.getElementById('email');
const age = document.getElementById('age');


// ---------------------------------------------------------------------------------------
// Déclaration des variables pour les small contenant les messages d'erreur

const lastnameError = document.getElementById('lastnameError');
const firstnameError = document.getElementById('firstnameError');
const emailError = document.getElementById('emailError');
const ageError = document.getElementById('ageError');

// ---------------------------------------------------------------------------------------
// Déclaration des variables pour saisir le bouton de clonage, le morceau à cloner et établir un compteur

const btn = document.getElementById('more');
const toClone = document.querySelector('.toClone');
let count = 1;


// ---------------------------------------------------------------------------------------
// Création des fonctions de vérification par regexp (expressions régulières)

const checkLastname = () => {

    // La condition à tester peut également être écrite ainsi : 
    // REGEX_NO_NUMBER.test(lastname.value) == false
    if (!REGEX_NO_NUMBER.test(lastname.value)) {
        lastnameError.classList.remove('d-none');
    } else {
        lastnameError.classList.add('d-none');
    };
};

const checkFirstname = () => {
    if (!REGEX_NO_NUMBER.test(firstname.value)) {
        firstnameError.classList.remove('d-none');
    } else {
        firstnameError.classList.add('d-none');
    };
};

const checkEmail = () => {
    if (!REGEX_EMAIL.test(email.value)) {
        emailError.classList.remove('d-none');
    } else {
        emailError.classList.add('d-none');
    };
};

const checkAge = () => {
    if (!REGEX_AGE.test(age.value)) {
        ageError.classList.remove('d-none');
    } else {
        ageError.classList.add('d-none');
    };
};


// ---------------------------------------------------------------------------------------
// Création de la fonction qui permet le clonage de l'input firstname

const cloneFirstname = () => {

    // On crée une copie de l'élément HTML
    let cloned = toClone.cloneNode(true);

    // On modifie l'id du clone
    count++;
    cloned.id = count;

    // On modifie les valeurs indispensables du clone
    let label = cloned.querySelector('label');
    label.setAttribute('for', label.getAttribute('for') + count);
    label.textContent = `Prénom ${count} :`;

    let input = cloned.querySelector('input');
    input.setAttribute('id', input.getAttribute('id') + count);

    let small = cloned.querySelector('small');
    small.setAttribute('id', small.getAttribute('id') + count);

    // On cible l'emplacement ou cloner et on clone
    let firstnamePart = document.getElementById('firstnamePart');
    firstnamePart.append(cloned);

    // Mise en place de l'écouteur d'évènement sur l'élément cloné
    let firstname = document.getElementById('firstname' + count);
    let firstnameSmall = document.getElementById('firstnameError' + count);
    cloned.addEventListener('keyup', () => {
        if (!REGEX_NO_NUMBER.test(firstname.value)) {
            firstnameSmall.classList.remove('d-none');
        } else {
            firstnameSmall.classList.add('d-none');
        };
    });
};


// ---------------------------------------------------------------------------------------
// Création des écouteurs d'évènements au changement de valeur des input

lastname.addEventListener('keyup', checkLastname);
firstname.addEventListener('keyup', checkFirstname);
email.addEventListener('keyup', checkEmail);
age.addEventListener('keyup', checkAge);


// ---------------------------------------------------------------------------------------
// Écouteur d'évènement pour effectuer un clonage du champ firstname

btn.addEventListener('click', cloneFirstname);




