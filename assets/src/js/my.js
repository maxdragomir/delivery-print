$(document).ready(function () {
    let btn = $('.button'),
        title = $('.blank-title');

    setTimeout(function () {
        btn.addClass('show');
    }, 1500);

    btn.on('click', function () {
        $(this).toggleClass('active');
        $('body').toggleClass('hide');
        $('.checkbox').toggleClass('checked');
    });

    title.on('click', function () {
       $(this).next().slideToggle();
       $(this).children('.title-number').toggleClass('animate');
    });

});