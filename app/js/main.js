$(function(){
    $('.experts__slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        dots:false,
        arrows:true,
        prevArrow: '<img class="experts__slider__prev-img" src="images/slider-left-full.svg">',
        nextArrow: '<img class="experts__slider__next-img" src="images/slider-right-full.svg">'
    });
})