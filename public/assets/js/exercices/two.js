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
// Création des fonctions de vérification par regexp (expressions régulières)
const checkLastname = () => {
    
    // La condition à tester peut également être écrite ainsi : 
    // REGEX_NO_NUMBER.test(lastname.value) == false
    if(!REGEX_NO_NUMBER.test(lastname.value)){
        lastnameError.classList.remove('d-none');
    } else {
        lastnameError.classList.add('d-none');
    }
}

const checkFirstname = () => {
    if(!REGEX_NO_NUMBER.test(firstname.value)){
        firstnameError.classList.remove('d-none');
    } else {
        firstnameError.classList.add('d-none');
    }
}

const checkEmail = () => {
    if(!REGEX_EMAIL.test(email.value)){
        emailError.classList.remove('d-none');
    } else {
        emailError.classList.add('d-none');
    }
}

const checkAge = () => {
    if(!REGEX_AGE.test(age.value)){
        ageError.classList.remove('d-none');
    } else {
        ageError.classList.add('d-none');
    }
}


// ---------------------------------------------------------------------------------------
// Création des écouteurs d'évènements au changement de valeur des input
lastname.addEventListener('keyup', checkLastname);
firstname.addEventListener('keyup', checkFirstname);
email.addEventListener('keyup', checkEmail);
age.addEventListener('keyup', checkAge);