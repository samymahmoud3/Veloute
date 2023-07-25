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