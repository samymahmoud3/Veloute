const hamburger = document.querySelector('#hamburger__menu');
const header = document.querySelector('.header');
const header__menu = document.querySelector('.header__menu');
const fadeElements = document.querySelectorAll('.has-fade'); 
const body = document.querySelector('body');

hamburger.addEventListener("click", ()=>{

    if(header.classList.contains("open")) {//close hamburger toggle
        body.classList.remove('noScroll');
        header.classList.remove('open');
        
        fadeElements.forEach((e)=>{
            e.classList.add('fade-out');
            e.classList.remove('fade-in');
        })

    } else { //open hamburger toggle
        body.classList.add('noScroll');
        header.classList.add('open');
        fadeElements.forEach((e)=>{
            e.classList.add('fade-in');
            e.classList.remove('fade-out');
        })
    }
})


//class active for desktop links
const header__links = document.querySelectorAll('.header__links a');
header__links.forEach(function(ele){

    ele.onclick = function(){

        header__links.forEach(function(ele){
            ele.classList.remove('active');
        });

        this.classList.add('active');
    };

});
//class active for mobile links
const header_menu = document.querySelectorAll('.header__menu a');
header_menu.forEach(function(e){

    e.onclick = function() {

        header_menu.forEach(function(e){
            e.classList.remove('active');
        });

        this.classList.add('active');

    };
});

// focus when click on icon search
function focusSearch() {
    document.querySelector('input[name="search_icon"]').focus();
}

// --------swiper__cards-------------------//
const swiper__indicators = Array.from(document.querySelectorAll('.swiper__indicators > span'));
const swiper__cards = document.querySelector('.swiper__cards');
const swiper__card = document.querySelector('.swiper__card');

//button next prev 
const swiper__prev = document.querySelector('.swiper__prev');
const swiper__next = document.querySelector('.swiper__next');

let current = 0;

swiper__next.addEventListener('click', () => {
    swiper__cards.scrollBy(380, 0);
    swiper__prev.classList.add('active');
    current += 1;

    if (current > 2) {
        swiper__next.classList.add('disable');
        swiper__next.classList.remove('active')
        current = 2;
    } else {
        swiper__prev.classList.remove('disable');
        swiper__next.classList.add('active')
        swiper__indicators.forEach((ind) => {
            ind.classList.remove('active');
            swiper__indicators[current].classList.add('active');
        })
    }
    
});

swiper__prev.addEventListener('click', () => {
    swiper__cards.scrollLeft -= 380;
    swiper__next.classList.add('active');

    if (current <= 0) {
        swiper__prev.classList.add('disable');
        swiper__prev.classList.remove('active');
    } else {
        current -= 1;
        swiper__next.classList.remove('disable');
        swiper__indicators.forEach((ind) => {
            ind.classList.remove('active');
            swiper__indicators[current].classList.add('active');
        })
    }

    
});

