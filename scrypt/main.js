let changeBG = document.querySelector('.button1');
let cube1 = document.querySelector('.cube1');
let cube2 = document.querySelector('.cube2');
let changeInt = document.querySelector('.button2');
let input1 = document.querySelector ('.input1');
let input2 = document.querySelector ('.input2');
let selectLeftdiv = document.querySelector('.button4');
let selectRightdiv = document.querySelector('.button5');
let contsup1 = document.querySelector('.cont-sup1');
let contsup2 = document.querySelector('.cont-sup2');


selectLeftdiv.addEventListener('click', (ev) => {
    contsup1.classList.toggle('cube-changed');
    let selectChanged1 = document.querySelector('.cont-sup1 .cube-changed');
    
    changeBG.addEventListener('click', (ev) => {
       
            cube1.classList.toggle('cube-bg');
        
    })
    changeInt.addEventListener('click', (ev) => {

        let randomInt1 = Math.floor(Math.random() * 100) + 1;
        
        input1.innerHTML = randomInt1;
    })
})
selectRightdiv.addEventListener('click', (ev) => {
    contsup2.classList.toggle('cube-changed');

    let selectChanged2 = document.querySelector('.cont-sup2 .cube-changed');

    changeBG.addEventListener('click', (ev) => {
        
            cube2.classList.toggle('cube-bg');
       
    })
    changeInt.addEventListener('click', (ev) => {

        let randomInt2 = Math.floor(Math.random() * 100) + 1;
    
        input2.innerHTML = randomInt2;
    })
})



