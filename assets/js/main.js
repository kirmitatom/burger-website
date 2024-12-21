/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
/*=============== SHOW SCROLL UP ===============*/ 

const scrollup = () => {
    const scrollup = document.getElementById("scroll-up")
    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                        : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal ({
    origin:'top',
    distance:'60px',
    duration: 1200,
    delay: 300,
})

sr.reveal('.home__data, .footer')
sr.reveal('.home__dish',{delay: 500, distance: '100px',origin: 'bottom'})
sr.reveal('.home__burger',{delay: 1200, distance: '100px',duration:150})
sr.reveal('.home__ingredient',{delay: 1600, interval:100})
sr.reveal('.recipe__img, .delivery__img, .contact__image',{origin:'left'})
sr.reveal('.recipe__data, .delivery__data, .contact__data',{origin:'right'})
sr.reveal('.popular__card',{interval:100})