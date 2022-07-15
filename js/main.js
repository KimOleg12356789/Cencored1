

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});


const burger2 = document.querySelector('.burger2');
const navbar2 = document.querySelector('.mt-mobile2');


burger2.addEventListener('click', () => {
    navbar2.classList.toggle('nav-open');
    burger2.classList.toggle('burger-open');
    
});


const burger3 = document.querySelector('.burger3');
const navbar3 = document.querySelector('.mt-mobile3');


burger3.addEventListener('click', () => {
    navbar3.classList.toggle('nav-open');
    burger3.classList.toggle('burger-open');
    
});



 var swiper = new Swiper(".mySwiper", {
        //何枚のスライドを表示させるか
        slidesPerView: 1,
        //スライドとスライドの間の距離（余白）を指定。間隔50pxなら「50」
        spaceBetween: 30,
        //何枚単位で遷移するか
        // slidesPerGroup: 3,
        //無限ループ
        loop: true,
        loopFillGroupWithBlank: true,
   
        pagination: {
          // originalの記述
          el: ".swiper-pagination",
          clickable: true,
        },
   
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
   
      });

$(document).ready(function(){


});





