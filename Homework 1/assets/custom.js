$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop != 0) {
        $('.navbar').stop().animate({
            'height': '70px',
            'opacity': '1',
        }, 'fast');
        $('.navbar').find('a').stop().animate({'height': '70px'}, 'fast');
    } else {
        /*console.log('top reached');*/
        $('.navbar').stop().animate({
            'height': '50px',
            'opacity': '0.7'
        }, 'fast');
        $('.navbar').find('a').stop().animate({
            'height': '50px'
        }, 'fast');
    }
});
$(window).on('load', function () {
    $(".se-pre-con").delay(1000).fadeOut("slow");
});
$(function () {
    $('.navbar-brand').on('click', function (e) {
        e.preventDefault();
    });
});
$('.parallax-window').parallax({
    imageSrc: 'assets/header-bg.jpg',
    naturalWidth: 5616,
    naturalHeight: 2040
});