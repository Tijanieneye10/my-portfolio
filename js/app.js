const headerEl = document.querySelector('.section-header');
const menuBtn = document.querySelector('.menu-btn');
const sectionHero = document.querySelector('.section-hero');
const scrollToTop = document.querySelector('.scroll-top');



// Exit navbar on click
document.addEventListener('click', (event) => {
    if (event.target.closest(".menu-btn")) return
    headerEl.classList.remove('open');
})

// Open and close menu
menuBtn.addEventListener('click', () => {
    headerEl.classList.toggle('open');
});

// Show scroll to top
const options =  {
    threshold: 0,
    rootMargin: "0px 0px -30px 0px"
}

const observer = new IntersectionObserver(function(entries){

    const ent = entries[0];

    if(!ent.isIntersecting){

       scrollToTop.style.opacity = 1
       scrollToTop.style.visibility = "visible"
       console.log('show')
    } 

    if(ent.isIntersecting){
        scrollToTop.style.opacity = 0
        scrollToTop.style.visibility = "hidden"
        console.log('hide')
    }

}, options)

observer.observe(sectionHero)
