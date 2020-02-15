// HAMBURGER NAV
const   hamburger   =   document.querySelector('.hamburger');
const   menu        =   document.querySelector('.l-main-menu');


hamburger.addEventListener('click',(event) => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');

});