
$(document).ready(function(){
    $('.sliderbox').slick({
        arrows: true,
        slidesToScroll:3,
        slidesToShow:3,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            }
        ]
        
     });

     
  });