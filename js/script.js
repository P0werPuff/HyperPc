function scrollToContent() {
    $('html, body').animate({
        scrollTop: $("second-content").offset().top
    }, 100);
}