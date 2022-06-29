function mudaCor(){
    mudaClasse();

}

function mudaClasse(){
    body.classList.toggle(darkMode);
    h1.classList.toggle(darkMode);
    button.classList.toggle(darkMode);
    main.classList.toggle(darkMode);
    span.classList.toggle(darkMode);
    circle.classList.toggle(darkMode);
}

const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementsByTagName('h1')[0];
const button = document.getElementById('buttonDarkMode');
const main = document.getElementsByTagName('main')[0];
const span = document.getElementsByTagName('span')[0];
const circle = document.getElementsByClassName('circle');
const darkMode = 'dark-mode';

button.addEventListener('click', mudaCor);
