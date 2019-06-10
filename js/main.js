$(document).ready(function() {
    $('body.visibility-hidden').addClass('visibility-shown');

    const slider = $('#slider');

    if (slider.length) {
        slider.slick({
            autoplay: true
        });
    }

    document.getElementById('mobile-menu-input').onclick = function() {
        if (this.checked) {
            document.body.classList.add('overflow');
        } else {
            document.body.classList.remove('overflow');
        }
    }
});
