$(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
        $('.main__header').css("background-color", "#222222a1");
    } else {
        // $('.main__header').removeClass('change-back');
        $('.main__header').css("background-color", "transparent");

    }



});

