// -------------------------------------------------------------------------
// Exercice 1

const user1 = {
    lastname : 'Musk',
    firstname : 'Elon',
    age : 51,
    phone : '0422521010',
    birthdate : '1971-06-28'
};

console.table(user1);

// On peut aussi créer l'objet grêce à un constructeur puis une instanciation en utilisant l'opérateur new.
let userObject = new Object();
userObject.lastname = "musk";
userObject.firstname = "elon";
userObject.age = 51;
userObject.phone = '0422521010';
userObject.birthdate = '1971-06-28';


// -------------------------------------------------------------------------
// Exercice 2

user1.phone = '415-222-9670';
console.table(user1);


// -------------------------------------------------------------------------
// Exercice 3

user1.age = '';
console.table(user1);


// --------------------------------------------------------------------------
// Exercice 4

delete user1.age;
console.table(user1);


// ---------------------------------------------------------------------------
// Exercice 5

const childrens = ['Nevada', 'Vivian', 'Griffin', 'Kai', 'Saxon', 'Damian', 'Exa'];

// Méthode simple
user1.children = childrens;

// Object.defineProperty() permet de définir une nouvelle propriété ou de modifier une propriété existante, directement sur un objet. 
// La méthode renvoie l'objet modifié.
Object.defineProperty(user1, 'children', {
    value: childrens 
});

// Autre méthode
user1['children'] = childrens;

console.log(user1);


// ----------------------------------------------------------------------------
// Exercice 6

function getFullName() {
    return this.firstname + ' ' + this.lastname;
};

user1.getFullName = getFullName;

console.log(user1);


// ---------------------------------------------------------------------------
// Exercice 7

let user2 = {
    lastname : 'LeMagicien',
    firstname : 'Géhonte',
    age : 133,
    phone : '08562763536',
    birthdate : '1900-08-30',
    children: ['Toupille', 'Hontoscope'],
    getFullName: getFullName
};

let users = [user1, user2];

console.log(users);


// ------------------------------------------------------------------------------
// Exercice 8

users.forEach(user => {
    let childrens = '';
    user.children.forEach((child, index) => {
        if (index == user.children.length -1) {
            childrens += child;
        } else {
            childrens += child + ' - ';
        }
    });
    console.log(`${user.getFullName()} (${childrens})`);
});
