$(document).ready(function() {
    $('body.visibility-hidden').addClass('visibility-shown');

    const slider = $('#slider');

    if (slider.length) {
        slider.slick({
            autoplay: true
        });
    }
});
