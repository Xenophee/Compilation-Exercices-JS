// -----------------------------------------------------------------------------------
// Exercice 1

function helloWorld() {
    return 'Bonjour les petits développeurs ! Je sais que vous adorez déjà JS !';
};

let hello = helloWorld();
console.log(hello);


// -----------------------------------------------------------------------------------
// Exercice 2

function helloYou(firstname) {
    return `Bonjour ${firstname} ! (Ah non ! C'était pas lui en fait)`;
};

let helloName = helloYou('Géhonte');

console.log(helloName);


// -------------------------------------------------------------------------------------
// Exercice 3 

let numberOne = 3;
let numberTwo = 7;

function average(firstNumber, secondNumber) {
    let sum = Number(firstNumber) + Number(secondNumber);
    return sum / 2;
};

let result = average(numberOne, numberTwo);

console.log(`On calcule la moyenne des deux nombres en additionnant ${numberOne} et ${numberTwo} qu'on divise ensuite par deux, ce qui donne ${result}, c'est incroyable !`);


// ----------------------------------------------------------------------------------------
// Exercice 4

const getLength = (string) => {
    let result = `Pour écrire "${string}", il faut ${string.length} caractères.`;
    return result;
};

let stringLength = getLength('Quelle douille cette fonction !');

console.log(stringLength);


// ----------------------------------------------------------------------------------------------
// Exercice 5

function howAreYou (firstname) {
    return `Bonjour, ${firstname}! Comment vas-tu ?`;
};

let message = howAreYou('Yvres');

console.log(message);


// -----------------------------------------------------------------------------------------------
// Exercice 6

let averagePlus = (firstNumber, secondNumber) => {
    let sum = Number(firstNumber) + Number(secondNumber);
    return sum / 2;
};

let averageResult = averagePlus(5, 9);

console.log(`La moyenne des deux nombres donne ${averageResult}, c'est incroyable !`);

