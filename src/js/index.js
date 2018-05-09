import $ from 'jquery';

$('#exampleModalCenter h2').hide();
$('#exampleModalCenter .btn-secondary').click(() => $('#exampleModalCenter').hide());

$("#contact-us-form").submit(function (event) {

    event.preventDefault();

    let $form = $(this);

    let $inputs = $('#exampleModalCenter').find(".btn-primary, #contact-us-form");

    let serializedData = $form.serialize();

    $inputs.hide();

    $.ajax({
        url: "/index.html",
        type: "get",
        data: serializedData,
        success: function (response) {
            $('#exampleModalCenter h2').show();
            console.log(response);
        },
        error: function (response) {
        }
    });
});


$('.modal-footer').click(() => $("#contact-us-form").submit());
