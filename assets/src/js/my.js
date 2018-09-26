$(document).ready(function () {
    let btn = $('.button');

    setTimeout(function () {
        btn.addClass('show');
    }, 1500);

    btn.on('click', function () {

        $(this).toggleClass('active');
        $('body').toggleClass('hide');
        $('.checkbox').toggleClass('checked');

    });
});