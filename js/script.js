console.log("hello");
///Menu bar icon on Navigation bar////
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
mainMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}

///For Parallax Scrolling Effect////

window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.slides');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * 1 + 'px)';
});


//For light & dark mode effect//

var layout = document.getElementById('layout');
var contrastBtn = document.getElementById('contrastBtn');
contrastBtn.addEventListener('click', changeTheme);

function changeTheme() {
    if (layout.classList.contains('light')) {

        layout.classList.remove('light');
        layout.classList.add('dark');
    } else {
        layout.classList.remove('dark');
        layout.classList.add('light');
    }
}


//Alert on Subscribe Button//

function subscribe() {
    alert('Thank You for Subscribing!');
}
