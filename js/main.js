const   menu        =   document.querySelector('.l-main-menu');
//var     items       =   document.querySelectorAll('.secHome', '.secWorks', '.secServices', '.secAbout', '.secContact');
//items.addEventListener('click', e => {
//    menu.classList.toggle('open');
//});
document.querySelectorAll('.nav-hamburger').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
        menu.classList.toggle('open');
    });
    
});




