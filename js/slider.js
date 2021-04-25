$(function() {
    var el;
    $("#slider").change(function() {
        el = $(this);
        el.next("#price").text(el.val());
    }).trigger('change');
});