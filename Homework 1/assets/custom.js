$(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var navbar = $('.navbar');
    if (scrollTop != 0) {
        // Im definetly not in top.
        navbar.stop().animate({
            'height': '70px',
            'opacity': '1'
        }, 'fast');
        navbar.find('a').stop().animate({'height': '70px'}, 'fast');
    } else {
        // Wohoho, we reached top.
        navbar.stop().animate({
            'height': '50px',
            'opacity': '0.7'
        }, 'fast');
        navbar.find('a').stop().animate({
            'height': '50px'
        }, 'fast');
    }
});
$(window).on('load', function () {
    $(".se-pre-con").delay(300).fadeOut("slow");
});