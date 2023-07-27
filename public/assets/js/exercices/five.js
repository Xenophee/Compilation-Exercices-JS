// ---------------------------------------------------------------------------------------
// Saisie de l'emplacement où les images vont apparaitre

const wall = document.querySelector('.wall');


// ---------------------------------------------------------------------------------------
// Fonction qui permet l'obtention d'un nombre random

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};


// ---------------------------------------------------------------------------------------
// Fonction d'affichage des images qui se déclenche en bas de page

const wallIt = () => {

    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    let starter = 200;

    if (currentScroll + starter > documentHeight) {
        wall.innerHTML += '<img src="https://picsum.photos/300/200?random=' + getRandomInt(1, 200000) + '">';
    };
};


// ---------------------------------------------------------------------------------------
// Déclaration de l'évènement au scroll

document.addEventListener('scroll', wallIt);


// ---------------------------------------------------------------------------------------
// Initialisation du mur avec 10 images

for (let i = 0; i <= 10; i++) {
    wall.innerHTML += '<img src="https://picsum.photos/300/200?random=' + getRandomInt(1, 200000) + '">';
};





