// ---------------------------------------------------------------------------------
// Exercice 1

for (let year = 2020; year < 2031; year++) {
    console.log(year);
};


// -------------------------------------------------------------------------------
// Exercice 2

for (let number = 0; number <= 100; number++) {
    if (number %7 == 0) {
        console.log(`${number} est un multiple de 7`);
    } else {
        console.log(number);
    };
};


// ---------------------------------------------------------------------------------
// Exercice 3

const languages = ['Javascript', 'Python', 'PHP', 'Java', 'SQL' ];

// Utiliser la boucle forEach pour les tableaux
languages.forEach(language => {
    console.log(language);
});


// ----------------------------------------------------------------------------------
// Exercice 4

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

days.forEach((day, index) => {
    console.log(`Jour ${index +1} : ${day}`);
});


// -----------------------------------------------------------------------------------
// Exercice 5

let randomDay = Math.floor(Math.random()*365) +1;
let startDay = 1;

while (startDay < randomDay) {
    console.log(`Jour ${startDay} de l'année`);
    startDay++;
};

console.log(`Le jour ${randomDay} est atteint`);


// -------------------------------------------------------------------------------------
// Exercice 6

// Ne pas mettre 1 pour firstNumber sinon boucle infinie
let firstNumber = 5; 
let secondNumber = 7;

while (firstNumber * secondNumber < 250) {
    console.log(`Le résultat est ${firstNumber * secondNumber}`);
    secondNumber = firstNumber * secondNumber;
};


