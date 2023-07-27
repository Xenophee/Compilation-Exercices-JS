// ---------------------------------------------------------
// Exercice 1 

let students = ['Tim', 'Bill', 'Jeff', 'Marc', 'Sundar'];

console.log(students);


// ----------------------------------------------------------
// Exercice 2 

console.log(students[3]);


// ---------------------------------------------------------
// Exercice 3 

// Solution rapide et simple
students[3] = 'Mark';

// splice() prends trois arguments : la position dans le tableaux, le nombre d'élément à modifier, et la valeur
students.splice(3,1,'Mark');

console.log(students);


// --------------------------------------------------------
// Exercice 4

students.push('Elon');

// Autre possibilité pour afficher un tableau dans la console
console.table(students);


// ---------------------------------------------------------
// Exercice 5

students.sort();
console.log(students);



