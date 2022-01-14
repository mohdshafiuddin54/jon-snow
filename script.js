'use strict'

const menuBtn = document.querySelector('.menu-container');
const nav = document.querySelector('.nav-wrapper');
const closeBtn = document.querySelector('.nav-close');
const arrow1 = document.querySelector('.arrow-1');
const arrow2 = document.querySelector('.arrow-2');
const navList = document.querySelector('.nav');
const checkBoxes = document.querySelectorAll('.opinion-toggle input');
// const allImages = document.querySelector('[class=]




const showHiddenOpinion = function(event){
    let num = (this.classList.value.split('-')[1]);
    if(this.checked){
        // console.log('Box is checked');
        document.querySelector(`.opinion-display-${num}`).classList.add('hidden-opinion');
        document.querySelector(`.hidden-opinion-${num}`).classList.remove('hidden-opinion');
    }
    else{
        document.querySelector(`.opinion-display-${num}`).classList.remove('hidden-opinion');
        document.querySelector(`.hidden-opinion-${num}`).classList.add('hidden-opinion');
        
    }
}

const scrollFunction = function(event){
    // console.log(event.target.nodeName);
    if(event.target.nodeName !== 'LI')
        return;

    const section = (event.target.classList.value.split(' ')[1].split('-').slice(1).join('-'));
    // console.log(section);
    document.querySelector(`.${section}`).scrollIntoView({behavior:"smooth"});
    nav.classList.add('nav-hidden');
}
let carouselItemNo = 1;
const changeCarouselItem = function(event){
    const elem = event.target.closest('.arrow-2') || event.target.closest('.arrow-1');
    // console.log(elem);
    document.querySelector(`.carousel-item-${carouselItemNo}`).classList.remove('carousel-item-active');
    if(elem.classList.contains('arrow-1'))
    carouselItemNo--
    else
    carouselItemNo++
    if(carouselItemNo == 0)
    carouselItemNo = 4;
    if(carouselItemNo > 4)
    carouselItemNo = carouselItemNo % 4;
    document.querySelector(`.carousel-item-${carouselItemNo}`).classList.add('carousel-item-active');
    
    // setTimeout(changeCarouselItem({target:arrow1}), 2000);
}

const previousCarouselItem = function() {
    
}
checkBoxes.forEach(item => item.addEventListener('click', showHiddenOpinion));
menuBtn.addEventListener('click', event => {
    const bool = nav.classList.contains('nav-hidden');
    if(bool)
    nav.classList.remove('nav-hidden');
})

closeBtn.addEventListener('click', () => {
    nav.classList.add('nav-hidden');
})

navList.addEventListener('click', scrollFunction)
arrow2.addEventListener('click', changeCarouselItem);
arrow1.addEventListener('click', changeCarouselItem);