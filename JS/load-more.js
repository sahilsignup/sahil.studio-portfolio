$(function () {
    $(".card").slice(0, 4).addClass('display');
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".card:hidden").slice(0, 4).addClass('display');
        if ($(".card:hidden").length == 0) {
           $("#loadMore").remove();
        } else {
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        }
    });
});