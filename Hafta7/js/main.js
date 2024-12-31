(function (){
    'use strict';

    var camera = new Swiper('#camera .swiper', {
        speed: 600,
        spaceBetween: 12,
        navigation: {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev',
        }


    });

    var photos = GLightbox({
        selector: '#photos .photo'
    })    
    
    var comment = new Swiper('#comments .swiper', {
        pagination : {
            el : '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        }
    });
}) ();

