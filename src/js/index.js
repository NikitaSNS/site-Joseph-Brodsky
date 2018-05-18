import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

$('.subscriptions__title--success').hide();

$('form.subscriptions__container').submit(function (event) {

    event.preventDefault();

    let $form = $(this);

    let data = $('.subscriptions__input').val();

    $.ajax({
        url: "/feedback.php",
        type: "get",
        dataType: 'html',
        data: 'email=' + data,
        success: function (response) {
            $('form.subscriptions__container').hide();
            $('.subscriptions__title').hide();
            $('.subscriptions__title--success').show();
            console.log(response);
        },
        error: function (response) {
        }
    });
});


