const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarNav = document.getElementById('navbar-nav');

document.addEventListener("DOMContentLoaded", function() {

    hamburgerMenu.addEventListener('click', function(event) {
        event.preventDefault();
        navbarNav.classList.toggle('active');
    });
});

// klik diluar side bar untuk menghillangkan menu

const removeNav=document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!removeNav.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})
