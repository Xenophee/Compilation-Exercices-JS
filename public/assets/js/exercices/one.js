// ---------------------------------------------------------------------------------------
// On cible le formulaire, ainsi que les 2 input 'password'
let form = document.querySelector('form');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');


// ---------------------------------------------------------------------------------------
// création d'une fonction de vérification des mots de passe
const checkPassword = (event) => {
    event.preventDefault();

    password.classList.remove('border-success', 'border-danger');
    confirmPassword.classList.remove('border-success', 'border-danger');

    if(password.value == confirmPassword.value){
        password.classList.add('border-success');
        confirmPassword.classList.add('border-success');
    } else {
        password.classList.add('border-danger');
        confirmPassword.classList.add('border-danger');
    }
}


// ---------------------------------------------------------------------------------------
// Création d'un écouteur d'évènement à l'envoi du formulaire qui fait référence à la fonction checkPassword
form.addEventListener('submit', checkPassword);


