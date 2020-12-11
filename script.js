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
}
// Анимация текстов
// let animSection1 = document.getElementsByClassName('section1');
//     animSection1[0].style.opacity = "0";
//     animSection1[0].style.transform = "translateX(-125px)";
//     animSection1[0].style.transition = "transform 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s, opacity 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s";
    
// let animSection2 = document.getElementsByClassName('section2');
//     animSection2[0].style.opacity = "0";
//     animSection2[0].style.transform = "translateX(-125px)";
//     animSection2[0].style.transition = "transform 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s, opacity 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s";

// let animSection3 = document.getElementsByClassName('section3');
//     animSection3[0].style.opacity = "0";
//     animSection3[0].style.transform = "translateX(-125px)";
//     animSection3[0].style.transition = "transform 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s, opacity 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s";

// let animSection4 = document.getElementsByClassName('section4');
//     animSection4[0].style.opacity = "0";
//     animSection4[0].style.transform = "translateX(-125px)";
//     animSection4[0].style.transition = "transform 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s, opacity 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s";

// let animSection5 = document.getElementsByClassName('section5');
//     animSection5[0].style.opacity = "0";
//     animSection5[0].style.transform = "translateX(-125px)";
//     animSection5[0].style.transition = "transform 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s, opacity 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s";
    
//     let pos = pageYOffset; // Переменная получает значение Y
    
//     if(pos > -50){
//         animSection1[0].style.opacity = "1";
//         animSection1[0].style.transform = "translateX(0)";
//         animSection1[0].style.transition = "transform 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s, opacity 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s";
//         }
// window.onscroll = function(){
    
//     let pos = pageYOffset; // Переменная получает значение Y при прокрутке
    
//     if(pos > 500){
//         animSection2[0].style.opacity = "1";
//         animSection2[0].style.transform = "translateX(0)";
//         animSection2[0].style.transition = "transform 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s, opacity 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s";
//     }
//     if(pos > 1000){
//         animSection3[0].style.opacity = "1";
//         animSection3[0].style.transform = "translateX(0)";
//         animSection3[0].style.transition = "transform 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s, opacity 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s";
//     }
//     if(pos > 1500){
//         animSection4[0].style.opacity = "1";
//         animSection4[0].style.transform = "translateX(0)";
//         animSection4[0].style.transition = "transform 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s, opacity 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s";
//     }
//     if(pos > 2000){
//         animSection5[0].style.opacity = "1";
//         animSection5[0].style.transform = "translateX(0)";
//         animSection5[0].style.transition = "transform 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s, opacity 0.85s cubic-bezier(0.455,  0.030, 0.515, 0.955) 0.2s";
//     }

// }
