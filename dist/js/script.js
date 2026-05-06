const header = document.querySelector('header');
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navLinks = navMenu.querySelectorAll('a');
const fixedNav = header.offsetTop;

const setNavbarState = () => {
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

const closeMenu = () => {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
    hamburger.setAttribute('aria-expanded', 'false');
};

const toggleMenu = () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
};

window.addEventListener('scroll', setNavbarState);
setNavbarState();

hamburger.addEventListener('click', toggleMenu);

navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        closeMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
    }
});
