$('.header_burger').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('header_burger_active');
    $('.nav').toggleClass('nav_active');
});
