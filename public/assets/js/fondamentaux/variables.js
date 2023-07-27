// -------------------------------------------------------------------
// Exercice 1

let message = 'oui';

console.log(message);


// -------------------------------------------------------------------
// Exercice 2

let firstPart = 'Je suis';
let lastPart = 'un gros naze';

console.log(firstPart + ' ' + lastPart);


// ------------------------------------------------------------------
// Exercice 3

let firstname = 'Toupille';
let age = 12;
let city = 'Sagemine';

console.log(`Bonjour, je m'apelle ${firstname}, j'ai ${age} ans et j'habite à ${city}`);
// Ce type de concaténation est ce qu'on appelle les littéraux de gabarits

console.log('Bonjour, je m\'appelle ' + firstname + ', j\'ai ' + age + ' ans et j\'habite à ' + city);
// Avec la concaténation de base (IMBUVABLE)


// --------------------------------------------------------------------
// Exercice 4 

let num = 43;
let txt = '7';
let sum = num + Number(txt);
// On peut utiliser la commande parseInt pour convertir un entier ou parseFloat pour un décimal à la place de Number qui prends tout en compte 

console.log(`L'addition de 7 et 43 donne ${sum}`);