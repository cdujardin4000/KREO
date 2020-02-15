// HAMBURGER NAV
const   nav         =   document.querySelector('.nav-hamburger');
const   menu        =   document.querySelector('.l-main-menu');
const   breaker     =   document.querySelector('.hambreaker');
var     delay       =   500; //1 second

nav.addEventListener('click',(event) => {
    nav.classList.toggle('broken');
    menu.classList.toggle('open');
    setTimeout(function() {
            breaker.classList.toggle('unvisible');
    }, delay);
});





