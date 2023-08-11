let changeBG = document.querySelector('.button1');
let cube = document.querySelector('.cube');
let changeInt = document.querySelector('.button2');
let input = document.querySelector ('.input');


changeBG.addEventListener('click', (ev) => {
    cube.classList.toggle('cube-changed')
})

changeInt.addEventListener('click', (ev) => {

    let randomInt = Math.floor(Math.random() * 10) + 1;

    input.innerHTML = randomInt;
})