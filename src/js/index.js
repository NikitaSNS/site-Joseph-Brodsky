import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';

$('#exampleModalCenter h2').hide();
$('#exampleModalCenter .btn-secondary').click(() => $('#exampleModalCenter').hide());

$("#contact-us-form").submit(function (event) {

    event.preventDefault();

    let $form = $(this);

    let $inputs = $('#exampleModalCenter').find(".btn-primary, #contact-us-form");

    $inputs.hide();

    let data = $('#email').value;

    $.ajax({
        url: "/feedback.php",
        type: "post",
        data: data,
        success: function (response) {
            $('#exampleModalCenter h2').show();
            console.log(response);
        },
        error: function (response) {
        }
    });
});


$('.modal-footer').click(() => $("#contact-us-form").submit());
