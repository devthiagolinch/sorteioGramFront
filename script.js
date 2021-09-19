/* Menu show and hide */
const btMenu = document.getElementById('btMenu');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const navMenu = document.getElementById('menu');

    navMenu.classList.toggle('active');
}

btMenu.addEventListener('click', toggleMenu);
btMenu.addEventListener('touchstart', toggleMenu);
/* Menu popup end */

/* ################################## */

/* Pop-Up Button - begin */
const btPopUp = document.getElementById('tutorialButton');
const btClosePopup = document.getElementById('btClosePopup');

function togglePopUp(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const navPopUp = document.getElementById('tutorialPopup');
     navPopUp.classList.toggle('active');
}

btPopUp.addEventListener('click', togglePopUp);
btPopUp.addEventListener('touchstart', togglePopUp);

function toggleClosePopUp(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const closePopup = document.getElementById('btClosePopup');
    closePopup.classList.toggle('');
}

btClosePopup.addEventListener('click', togglePopUp);
btClosePopup.addEventListener('touchstart', togglePopUp);
/* Tutorial popup end */

/* ######################### */
/* Sort Generators */
// this function create a random number array and select one or more,
//depending on qtNumbers the user want, and return the numbers as a resultNumeros.
function sorteioNumeros() {
const min = document.getElementById("minimo").value;
const max = document.getElementById("maximo").value;
const qtNumeros = document.getElementById("qtNumbers").value;

function getRandom(min,max) {
    return sortNumber = Math.floor(Math.random()*(Math.floor(max) - Math.floor(min) + 1)) + Math.floor(min)
}

let arrayNum = [];
for (let i = 0; i < qtNumeros; i++) {
    arrayNum.push(getRandom(min,max))
}

document.getElementById("resultadoNumeros").innerHTML=arrayNum;
}

/* Names sort generator */
function sorteioNomes(){
const names = document.getElementById("names").value.split('\n');
const qtName = document.getElementById("qtNames").value;

    function getRandomNames(names) {
        return sortName = names[Math.floor(Math.random()*names.length)];
    }

    let arrayNames = [];
    for (let i = 0; i < qtName; i++) {
        arrayNames.push(getRandomNames(names))
    }

    document.getElementById("resultadoNomes").innerHTML=arrayNames;
}