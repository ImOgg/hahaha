const lessontitle = $('#LessonLs .lesson__title');
lessontitle.click(function () {
    $(this).siblings('.city_type').stop(true, false).slideToggle();
    $(this).parent().siblings()
    .find('.city_type').stop(true,false)
    .slideUp();
});
