$(function () {
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: {
            prev: '.glider-prev',
            // may also pass element directly
            next: document.querySelector('.glider-next')
        },
        // dots: '.dots',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    //itemWidth: 305,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    //itemWidth: 305,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    //itemWidth: 305,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    //itemWidth: 305,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // itemWidth: 370,
                    dots: '.dots',
                }
            }
        ]
    });

}); // Make sure Document loaded
