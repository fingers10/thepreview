$(function () {
    var scrolloffset = 50; //variable for menu height

    // When Scrollspy Detects a change
    $(window).on('activate.bs.scrollspy', function () {
        var hash = $('.site-nav')
            .find('a.active')
            .attr('href');

        if (hash !== '#page-hero') {
            $('header nav').addClass('inbody');
        } else {
            $('header nav').removeClass('inbody');
        }

        // Animate Media Layout when it passes scroll
        // $('#page-media .animated-group').css(
        //     'visibility: hidden;'
        // );

        // Animate Events Layout when it passes scroll
        $('#page-events .animated-group').css(
            'visibility: hidden;'
        );

        // if (hash === '#page-media') {
        //     $('#page-media .animated-group').addClass(
        //         'animated fadeInRight'
        //     );
        // }

        if (hash === '#page-events') {
            $('#page-events .animated-group').addClass(
                'animated zoomIn'
            );
        }
    });

    // Modifies modal and injects high resolution image
    $('#site-modal').on('show.bs.modal', function (event) {
        $(this)
            .find('.modal-content img')
            .attr('src', $(event.relatedTarget).data('highres'));
    });

    //Use smooth scrooling when clicking on brand
    $('.navbar-brand').click(
        function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    )

    //Use smooth scrolling when clicking on navigation
    $('.site-footer a.nav-link, .navbar-nav a:not(.dropdown-toggle)').click(
        function () {
            if (
                location.pathname.replace(/^\//, '') ===
                this.pathname.replace(/^\//, '') &&
                location.hostname === this.hostname
            ) {
                var target = $(this.hash);
                target = target.length
                    ? target
                    : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate(
                        {
                            scrollTop: target.offset().top - scrolloffset
                        },
                        500
                    );
                    return false;
                } //target.length
            } //click function
        }
    ); //smooth scrolling

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    }); // scroll to top
}); // Make sure Document loaded
