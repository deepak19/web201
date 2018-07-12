$(window).on('load', function () {
    $('.loader').hide()
});
$(document).ready(function () {
    $('button.accordion').click(function () {
        var type = $(this).data('type');
        var itemSelector = '.food__item[data-type="' + type + '"]';
        $(this).toggleClass("collapsed");
        if ($(this).hasClass('collapsed')) {
            //hide section Food
            // $(itemSelector).addClass('hidden3');
            $(itemSelector).slideUp(200);
        } else {
            //show section Food
            //$(itemSelector).removeClass('hidden3');
            $(itemSelector).slideDown(200);
        }
    });


    $('.header__burger').click(function () {


        $('.content').css("margin-left","50px");
        $('.header__menu').css("left","-50px");

    });
    $('.header__menu--close').click(function(){
         $('.header__menu').css("left","-450px");
         $('.content').css("margin-left","0");
    });

});
