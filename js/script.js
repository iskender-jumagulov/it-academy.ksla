// JavaScript для навигационнго меню
// Автор: Бекташов Бекназар
let navHide = document.getElementsByClassName('nav-logo');
let navFix = document.getElementsByClassName('nav-bar');

window.onscroll = function(){
    let pos = pageYOffset; // Переменная получает значение Y при прокрутке
    if(pos > 10){
        navFix[0].style.top = "0px";
        navHide[0].style.top = "-50px";
        navFix[0].style.position = "fixed";
        navHide[0].style.position = "fixed";
        navFix[0].style.zIndex = "1";

    }else if(pos < 10){
        navFix[0].style.top = "50px";
        navHide[0].style.top = "0px";
        navFix[0].style.position = "static";
        navHide[0].style.position = "static";
    }
};

//Слайдер

let slidesPartners = document.getElementsByClassName('slide');
let slidesArrow = document.getElementsByClassName('slides-arrow');

let a = 1;
let b = 0;
let c;

slidesPartners[0].style.display = 'flex';
let timeId = setInterval(slidesArrow[1].onclick = function(){
    slidesPartners[b].style.display = 'none';
    slidesPartners[a].style.display = 'flex';
    c = b;
    b = a;
    a = c;
}, 4000);

slidesArrow[0].onclick = function(){
    slidesPartners[a].style.display = 'none';
    slidesPartners[b].style.display = 'flex';
    c = b;
    b = a;
    a = c;
};