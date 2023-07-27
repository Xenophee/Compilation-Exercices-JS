// ----------------------------------------------
// Exercice 1 

let age = 18;

if (age >= 18) {
    console.log('Vous êtes majeur');
} else {
    console.log('Vous êtes mineur');
}

// --------------------------------------------
// Exercice 2 

let num = 3;

if (num %2 == 0) {
    console.log('Le nombre est pair');
} else {
    console.log('Le nombre est impair');
}


// --------------------------------------------
// Exercice 3 

let mark = 15;


if (mark >= 0 && mark <= 3) {
    console.log('Mauvais');
} else if (mark >= 4 && mark <= 5) {
    console.log('Moyen');
} else if (mark >= 6 && mark <= 7) {
    console.log('Assez bien');
} else if (mark >= 8 && mark <= 9) {
    console.log('Bien');
} else {
    console.log('Excellent');
}


// ----------------------------------------------
// Exercice 4 

let day = 5;
let displayDay;

switch (day) {
    case 1 :
        displayDay = 'Lundi';
        break;
    case 2 :
        displayDay = 'Mardi';
        break;
    case 3 :
        displayDay = 'Mercredi';
        break;
    case 4 :
        displayDay = 'Jeudi';
        break;
    case 5 :
        displayDay = 'Vendredi';
        break;
    case 6 :
        displayDay = 'Samedi';
        break;
    default :
        displayDay = 'Dimanche';
}

console.log(displayDay);


// ----------------------------------------------
// Exercice 5 

let value = true;
console.log(`Ceci est un ${typeof(value)}`);

value = parseInt(value);
console.log(`Ceci est un ${typeof(value)}`);

value = value.toString();
console.log(`Ceci est un ${typeof(value)}`);


// Variante
console.log(`Ceci est un ${typeof(value)}, ceci est un ${typeof(Number(value))}, et ceci est un ${typeof(value.toString())}`);


// Petit bonus si on veut convertir une chaîne en booléen 
let maChaine = 'false';
let monBooleen = JSON.parse(maChaine);
console.log(`Ma chaîne contient maintenant la valeur ${maChaine} et est de type ${typeof(monBooleen)}`);

