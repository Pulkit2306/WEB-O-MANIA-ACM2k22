$(document).ready(function() {
    $('#login').click(function() {
        $('.login_form').addClass('popup');
    });
    $('.login_form form .fa-times').click(function() {
        $('.login_form').removeClass('popup');
    });
});