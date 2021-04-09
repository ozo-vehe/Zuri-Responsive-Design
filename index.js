let hamburger = document.querySelector('.nav-hamburger');
let navLinks  = document.querySelector('.nav-links');

/**********Add Click Event To The Hamburger**********/
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('dropdown');
})