document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('ready');

  // Initialize Flickity carousel
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false,
    pageDots: false,
    
  });

  var videoCarouselElem = document.querySelector('.video-carousel');
  var videoFlkty = new Flickity(videoCarouselElem, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay: 3000,
    pauseAutoPlayOnHover: false,
    pageDots: false,  
  });


});