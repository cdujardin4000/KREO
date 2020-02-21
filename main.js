document.querySelectorAll('.nav-hamburger').forEach(btn => {
    btn.addEventListener('click', e => {
        btn.classList.toggle('active');
    });
});