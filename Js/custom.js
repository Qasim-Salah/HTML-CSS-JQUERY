// Golbal $ , alert , console

$(function () {
    'use strict';

    var myNav = $('.navbar'),
        mySlider = $('.bxSlider');
    myNav.height($(window).height());

    $(window).resize(function () {
        myNav.height($(window).height());
        //
        // mySlider.each(function () {
        //     $(this).css('paddingTop', $(window).height() - $('.bxSlider li').height() / 2);
        // });

    });

    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // mySlider.each(function () {
    //     $(this).css('paddingTop', $(window).height() - $('.bxSlider li').height() / 2);
    // });

    mySlider.bxSlider({
        hideControlOnEnd: true,
        pager: false
    });


    $('.links li a').click(function () {
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000)
    });


    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                })
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider()
                });

            }
        });
    }());


    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '10px',
        cursorborder: '1px solid #1abc9c',
        cursorborderradius: '0',
    });
});

