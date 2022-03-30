'use strict';

let cart = document.querySelector('.img_cart'),
    cartBlock = document.querySelector('.cart__box'),
    cartBox = document.querySelector('.your__cart'),
    cartBoxCopy = document.querySelector('.your__cart__copy'),
    cartBoxClosed = document.querySelector('p'),
    btnMinus = document.querySelector('.minus'),
    btnPlus = document.querySelector('.plus'),
    input = document.querySelector('input'),
    addToCart = document.querySelector('.add_to_cart'),
    resultAll = document.querySelector('.result-all'),
    cost  = document.querySelector('.cost'),
    clearCart = document.querySelector('.delete'),
    productBlock = document.querySelectorAll('.tab-img'),
    imgParent = document.querySelector('.product'),
    tabsContent = document.querySelectorAll('.product-tape-img'),
    tabParent = document.querySelector('.product-tape'),
    tabParentContent = document.querySelectorAll('.product-tape-img'),
    cartCount = document.querySelector('.cart__count'),
    toggle = document.querySelector('.toggle'),
    toggleMenu = document.querySelector('.toggle-menu'),
    closeMenu = document.querySelector('.close'),
    body = document.querySelector('.transparent'),
    dollor = '$';
    input.value = 0;

let bodyBg = document.querySelector('.popup'),
    closePopUp = document.querySelector('.xmark'),
    next = document.querySelector('.next'),
    popupImg = document.querySelectorAll('.imgBlock'),
    popupImgType = document.querySelectorAll('.image-type'),
    popupParent = document.querySelector('.popup-img-type');

    console.log(popupImg); 

cart.addEventListener('click' , function(){
    cartBox.style.display = 'block';
});

cartBoxClosed.addEventListener('click' , function(){
    cartBox.style.display = 'none';
});

btnPlus.addEventListener('click' , function(){
    input.value = parseInt(input.value) + 1;
});

btnMinus.addEventListener('click' , function(){
    if(Number(input.value) > 0){
        input.value = parseInt(input.value) - 1;
    }
});

addToCart.addEventListener('click' , function(){
    cartBoxCopy.style.display = 'block';
    cartBox.style.display = 'none';
    cost.innerHTML = `${ dollor + 125}.00 x ${input.value}`;
    resultAll.innerHTML = `${dollor}${input.value * 125}.00`;
    cartCount.innerHTML = `${input.value}`;
});

clearCart.addEventListener('click' , function(){
    cartBoxCopy.style.display = 'none';
});

//tabs content start

function hideTabs(){
    productBlock.forEach((item) =>{
        item.classList.add('product-img-hide');
        item.classList.remove('product-img-show');
    });
    

    tabsContent.forEach((item) =>{
        item.classList.remove('opacity');
    });
}

function showTabs(i=0){
    productBlock[i].classList.remove('product-img-hide');
    productBlock[i].classList.add('product-img-show');
    tabsContent[i].classList.add('opacity');
}

hideTabs();
showTabs();

tabParent.addEventListener('click', function(e){
    if(e.target && e.target.classList.contains('product-tape-img')){
        tabsContent.forEach((item, i) =>{
            if(e.target == item){
                hideTabs();
                showTabs(i);
            }
        });
    }
});

toggle.addEventListener('click' , () => {
    toggleMenu.style.display = 'block';
    body.style.display = 'block';
});

closeMenu.addEventListener('click' , () => {
    toggleMenu.style.display = 'none';
    body.style.display = 'none';
});

//popup start

imgParent.addEventListener('click' , () =>{
    bodyBg.style.display = 'block';
});

closePopUp.addEventListener('click' , () =>{
    bodyBg.style.display = 'none';
});

//start slayder

let dots = document.getElementsByClassName('image-type'),
    dotsArea = document.getElementsByClassName('popup-img-type')[0],
    slides = document.getElementsByClassName('imgBlock'),
    prevBtn = document.getElementById('back'),
    nextBtn = document.getElementById('next'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if(n < 1) {
        slideIndex = slides.length;
    }else if(n > slides.length){
        slideIndex = 1;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(let i = 0; i < dots.length; i++){
        dots[i].classList.remove('opacity');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('opacity');
}

function mobilCurrentSlide (n) {
    showSlides(slideIndex = n);
}

function addSlides(n){
    showSlides(slideIndex += n);
}

prevBtn.addEventListener('click' , () =>{
    addSlides(-1);
});
nextBtn.addEventListener('click' , () =>{
    addSlides(1);
});

dotsArea.addEventListener('click' , (e) =>{
    for(let i = 0; i < dots.length + 1; i++) {
        if(e.target == dots[i - 1] && e.target.classList.contains('image-type')){
            mobilCurrentSlide(i);
        }
    }
});

//mobil slayder

let mobilSlades = document.querySelectorAll('.tab-img'),
    mobilPrevBtn = document.querySelector('#mobil-prev'),
    mobilNextBtn = document.querySelector('#mobil-next'),
    mobilSlideIndex = 1;

mobilShowSlides(mobilSlideIndex);

function mobilShowSlides(n){
    if(n < 1){
        mobilSlideIndex = mobilSlades.length;
    }else if(n > mobilSlades.length){
        mobilSlideIndex = 1;
    }
    for(let i = 0; i < mobilSlades.length; i++){
        mobilSlades[i].style.display = 'none';
    }
    for(let i = 0; i < dots.length; i++){
        tabParentContent[i].classList.remove('opacity');
    }
    mobilSlades[mobilSlideIndex - 1].style.display = 'block';
    tabParentContent[mobilSlideIndex - 1].classList.add('opacity');
}

function currentSlide (n) {
    mobilShowSlides(mobilSlideIndex = n);
}

function mobilAddSlides(n){
    mobilShowSlides(mobilSlideIndex += n);
}

mobilPrevBtn.addEventListener('click' , () =>{
    mobilAddSlides(-1);
});
mobilNextBtn.addEventListener('click' , () =>{
    mobilAddSlides(1);
});

tabParent.addEventListener('click' , (e) =>{
    for(let i = 0; i < tabParentContent.length + 1; i++) {
        if(e.target == tabParentContent[i - 1] && e.target.classList.contains('product-tape-img')){
            currentSlide(i);
        }
    }
});