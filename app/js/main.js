$(function(){
    $('.experts__slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        dots:false,
        arrows:true,
        prevArrow: '<img class="experts__slider__prev-img" src="images/slider-left-full.svg">',
        nextArrow: '<img class="experts__slider__next-img" src="images/slider-right-full.svg">'
    });
   
    
    $('.market__content-baritem-1').on('click',function() {
        if ($('.market__content-baritem-1').hasClass('market__content-baritem-1-active'))
        {
            $('.market__content-baritem-1').removeClass('market__content-baritem-1-active')
            $('.market__content-inner-1').css('opacity','0');
            $('.market__content-inner-1').css('z-index','-1');
         }
          else 
         {
            $('.market__content-baritem-1').addClass('market__content-baritem-1-active')
            $('.market__content-inner-1').css('opacity','1');
            $('.market__content-inner-1').css('z-index','1');
         }
         if ($('.market__content-baritem-2').hasClass('market__content-baritem-2-active'))
            {
                $('.market__content-baritem-2').removeClass('market__content-baritem-2-active')
                $('.market__content-inner-2').css('opacity','0');
                $('.market__content-inner-2').css('z-index','-1');
            }
            if ($('.market__content-baritem-3').hasClass('market__content-baritem-3-active'))
            {
                $('.market__content-baritem-3').removeClass('market__content-baritem-3-active')
                $('.market__content-inner-3').css('opacity','0');
                $('.market__content-inner-3').css('z-index','-1');
            }    
            if ($('.market__content-baritem-4').hasClass('market__content-baritem-4-active'))
            {
                $('.market__content-baritem-4').removeClass('market__content-baritem-4-active')
                $('.market__content-inner-4').css('opacity','0');
                $('.market__content-inner-4').css('z-index','-1');
            }
            
        
    });
    $('.market__content-baritem-2').on('click',function() {
            if ($('.market__content-baritem-2').hasClass('market__content-baritem-2-active'))
            {
                $('.market__content-baritem-2').removeClass('market__content-baritem-2-active')
                $('.market__content-inner-2').css('opacity','0');
                $('.market__content-inner-2').css('z-index','-1');
             }
              else 
             {
                $('.market__content-baritem-2').addClass('market__content-baritem-2-active')
                $('.market__content-inner-2').css('opacity','1');
                $('.market__content-inner-2').css('z-index','1');
            }
            if ($('.market__content-baritem-1').hasClass('market__content-baritem-1-active'))
            {
                $('.market__content-baritem-1').removeClass('market__content-baritem-1-active')
                $('.market__content-inner-1').css('opacity','0');
                $('.market__content-inner-1').css('z-index','-1');
            }
            if ($('.market__content-baritem-3').hasClass('market__content-baritem-3-active'))
            {
                $('.market__content-baritem-3').removeClass('market__content-baritem-3-active')
                $('.market__content-inner-3').css('opacity','0');
                $('.market__content-inner-3').css('z-index','-1');
            }    
            if ($('.market__content-baritem-4').hasClass('market__content-baritem-4-active'))
            {
                $('.market__content-baritem-4').removeClass('market__content-baritem-4-active')
                $('.market__content-inner-4').css('opacity','0');
                $('.market__content-inner-4').css('z-index','-1');
            }
            
    });
    $('.market__content-baritem-3').on('click',function() {
            if ($('.market__content-baritem-3').hasClass('market__content-baritem-3-active'))
            {
                    $('.market__content-baritem-3').removeClass('market__content-baritem-3-active')
                    $('.market__content-inner-3').css('opacity','0');
                    $('.market__content-inner-3').css('z-index','-1');
            }
            else 
            {
                $('.market__content-baritem-3').addClass('market__content-baritem-3-active')
                $('.market__content-inner-3').css('opacity','1');
                $('.market__content-inner-3').css('z-index','1');
            }
            if ($('.market__content-baritem-2').hasClass('market__content-baritem-2-active'))
            {
                $('.market__content-baritem-2').removeClass('market__content-baritem-2-active')
                $('.market__content-inner-2').css('opacity','0');
                $('.market__content-inner-2').css('z-index','-1');
            }
            if ($('.market__content-baritem-1').hasClass('market__content-baritem-1-active'))
            {
                $('.market__content-baritem-1').removeClass('market__content-baritem-1-active')
                $('.market__content-inner-1').css('opacity','0');
                $('.market__content-inner-1').css('z-index','-1');
            }    
            if ($('.market__content-baritem-4').hasClass('market__content-baritem-4-active'))
            {
                $('.market__content-baritem-4').removeClass('market__content-baritem-4-active')
                $('.market__content-inner-4').css('opacity','0');
                $('.market__content-inner-4').css('z-index','-1');
            }
                
    });
    $('.market__content-baritem-4').on('click',function() {
        if ($('.market__content-baritem-4').hasClass('market__content-baritem-4-active'))
        {
                $('.market__content-baritem-4').removeClass('market__content-baritem-4-active')
                $('.market__content-inner-4').css('opacity','0');
                $('.market__content-inner-4').css('z-index','-1');
        }
        else 
        {
            $('.market__content-baritem-4').addClass('market__content-baritem-4-active')
            $('.market__content-inner-4').css('opacity','1');
            $('.market__content-inner-4').css('z-index','1');
        }
        if ($('.market__content-baritem-2').hasClass('market__content-baritem-2-active'))
        {
            $('.market__content-baritem-2').removeClass('market__content-baritem-2-active')
            $('.market__content-inner-2').css('opacity','0');
            $('.market__content-inner-2').css('z-index','-1');
        }
        if ($('.market__content-baritem-3').hasClass('market__content-baritem-3-active'))
        {
            $('.market__content-baritem-3').removeClass('market__content-baritem-3-active')
            $('.market__content-inner-3').css('opacity','0');
            $('.market__content-inner-3').css('z-index','-1');
        }    
        if ($('.market__content-baritem-1').hasClass('market__content-baritem-1-active'))
        {
            $('.market__content-baritem-1').removeClass('market__content-baritem-1-active')
            $('.market__content-inner-1').css('opacity','0');
            $('.market__content-inner-1').css('z-index','-1');
        }
            
});
$('.moduls__item-close-1').on('click',function() {
    if ($('.moduls__open-1').hasClass('moduls__open-active'))
        {
            $('.moduls__open-1').removeClass('moduls__open-active')
            $('.moduls__item-arrow-1').attr('src', 'images/akselerator-arrow.png');
        }
        else 
        {
            $('.moduls__open-1').addClass('moduls__open-active')
            $('.moduls__item-arrow-1').attr('src', 'images/akselerator-arrow-open.png');
        }
});
$('.moduls__item-close-2').on('click',function() {
    if ($('.moduls__open-2').hasClass('moduls__open-active'))
        {
            $('.moduls__open-2').removeClass('moduls__open-active')
            $('.moduls__item-arrow-2').attr('src', 'images/akselerator-arrow.png');
        }
        else 
        {
            $('.moduls__open-2').addClass('moduls__open-active')
            $('.moduls__item-arrow-2').attr('src', 'images/akselerator-arrow-open.png');
        }
});
$('.moduls__item-close-3').on('click',function() {
    if ($('.moduls__open-3').hasClass('moduls__open-active'))
        {
            $('.moduls__open-3').removeClass('moduls__open-active')
            $('.moduls__item-arrow-3').attr('src','images/akselerator-arrow.png');
        }
        else 
        {
            $('.moduls__open-3').addClass('moduls__open-active')
            $('.moduls__item-arrow-3').attr('src', 'images/akselerator-arrow-open.png');
        }
});
$('.moduls__item-close-4').on('click',function() {
    if ($('.moduls__open-4').hasClass('moduls__open-active'))
        {
            $('.moduls__open-4').removeClass('moduls__open-active')
            $('.moduls__item-arrow-4').attr('src', 'images/akselerator-arrow.png');
        }
        else 
        {
            $('.moduls__open-4').addClass('moduls__open-active')
            $('.moduls__item-arrow-4').attr('src', 'images/akselerator-arrow-open.png');
        }
});
$('.moduls__item-close-5').on('click',function() {
    if ($('.moduls__open-5').hasClass('moduls__open-active'))
        {
            $('.moduls__open-5').removeClass('moduls__open-active')
            $('.moduls__item-arrow-5').attr('src','images/akselerator-arrow.png' );
        }
        else 
        {
            $('.moduls__open-5').addClass('moduls__open-active')
            $('.moduls__item-arrow-5').attr('src', 'images/akselerator-arrow-open.png');
        }
});
$('.moduls__item-close-6').on('click',function() {
    if ($('.moduls__open-6').hasClass('moduls__open-active'))
        {
            $('.moduls__open-6').removeClass('moduls__open-active')
            $('.moduls__item-arrow-6').attr('src', 'images/akselerator-arrow.png');
        }
        else 
        {
            $('.moduls__open-6').addClass('moduls__open-active')
            $('.moduls__item-arrow-6').attr('src','images/akselerator-arrow-open.png' );
        }
});
$('.moduls__item-close-7').on('click',function() {
    if ($('.moduls__open-7').hasClass('moduls__open-active'))
        {
            $('.moduls__open-7').removeClass('moduls__open-active')
            $('.moduls__item-arrow-7').attr('src', 'images/akselerator-arrow-open.png');
        }
        else 
        {
            $('.moduls__open-7').addClass('moduls__open-active')
            $('.moduls__item-arrow-7').attr('src', 'images/akselerator-arrow.png');
        }
});
$('.moduls__item-close-8').on('click',function() {
    if ($('.moduls__open-8').hasClass('moduls__open-active'))
        {
            $('.moduls__open-8').removeClass('moduls__open-active')
            $('.moduls__item-arrow-8').attr('src', 'images/akselerator-arrow.png');
        }
        else 
        {
            $('.moduls__open-8').addClass('moduls__open-active')
            $('.moduls__item-arrow-8').attr('src','images/akselerator-arrow-open.png' );
        }
});
$('.moduls__item-close-9').on('click',function() {
    if ($('.moduls__open-9').hasClass('moduls__open-active'))
        {
            $('.moduls__open-9').removeClass('moduls__open-active')
            $('.moduls__item-arrow-9').attr('src', 'images/akselerator-arrow.png');
        }
        else 
        {
            $('.moduls__open-9').addClass('moduls__open-active')
            $('.moduls__item-arrow-9').attr('src','images/akselerator-arrow-open.png' );
        }
});
})
