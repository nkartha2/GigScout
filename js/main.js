$(document).ready(function(){



// http://perishablepress.com/3-ways-preload-images-css-javascript-ajax/
  var images = [];
  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      images[i] = new Image();
      images[i].src = preload.arguments[i];
    }
  }
  preload(
    "img/mapselected.png",
    "img/speakerselected.png",
    "img/ticketsselected.png",
    "img/carselected.png",
    "img/phone-map.png",
    "img/phone-speaker.png",
    "img/phone-tickets.png",
    "img/phone-car.png",
    "img/slide1.jpg",
    "img/slide2.jpg",
    "img/slide3.jpg"
  );


$('.bxslider').bxSlider({
  preloadImages: 'all',
  touchEnabled: true,
  controls: false,
  infiniteLoop: true,
  auto:true,
  useCSS: false,
  pause:4500
});

$('#bxslider1').bxSlider({
  minSlides: 3,
  maxSlides: 5,
  slideWidth: 300,
  slideMargin: 10,
  moveSlides: 1,
  pager:false
});


$('.feature').mouseenter(
    function(){
      var phone = $('#phone'),
          newImg= "img/phone-"+ this.id +".png";
      phone.attr('src', newImg);
    }
);


//responsive menu

$(".mobile-nav").click(function(){
  $(".responsive-menu").slideToggle("slow");
  });

$('.menu-btn').on('click', function(event){
  if($(event.target).is('.responsive-menu')) $(this).children('li').toggleClass('is-visible');


});


});