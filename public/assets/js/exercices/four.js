// ---------------------------------------------------------------------------------------
// Déclaration des variables
let inputs = document.querySelectorAll('input[type=number]');
let form = document.querySelector('form');
let result = document.getElementById('result');


// ---------------------------------------------------------------------------------------
// Déclaration de la fonction pour calculer la moyenne et afficher le message

function averageCalc (event) {

    event.preventDefault();
    let sum = 0;

    // On fait une boucle pour additionner toutes les notes
    inputs.forEach(input => {
        sum += Number(input.value);
    });

    // On divise le tout par le nombre d'input
    let average = sum / inputs.length;
    let message;

    // Message particulier à l'utilisateur pour la moyenne donnée
    if (average > 20) {
        message = `La moyenne de l'élève est de ${average} /20. C'était Dieu ? Ou c'est juste du troll ? Bouffon !`
    } else if (average >= 15) {
        message = `Félicitation ! La moyenne de l'élève est de ${average} /20. On tient notre futur Montaigne !`;
    } else if (average >= 12) {
        message = `La moyenne de l'élève est de ${average}/20. Il n'y aura pas de hontoscope à Noël, l'honneur est sauf !`;
    } else if (average >= 10) {
        message = `La moyenne de l'élève est de ${average}/20. Va falloir faire mieux ou un petit tour chez Brigitte va s'imposer !`;
    } else {
        message = `La moyenne de l'élève est de ${average}/20. Au gnouf !`;
    }

    result.textContent = message;
};


// ---------------------------------------------------------------------------------------
// Déclaration de l'évènement

form.addEventListener('submit', averageCalc);










