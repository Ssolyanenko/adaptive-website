$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__left" src="./images/left.svg" alt="arrow-left">',  
        nextArrow: '<img class="slider__arrow slider__right" src="./images/right.svg" alt="arrow-right" >',
        responsive: [
          {
            breakpoint: 481,
            settings: {
              arrows:false
            }
          },
         
        ]
    });

$('.menu-btn').on('click', function(){
  $('.menu__list').toggleClass('active');
  });

});