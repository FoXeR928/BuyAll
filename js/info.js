$(function(){
    $('.form-send__button').click(function(evt){
        evt.preventDefault();
        var name=$('input[name="name"]').val();
        var number=$('input[name="number"]').val();
        if (name.length>0 && number.length>0){
            $('.dialog-conteiner').show()
            $('.dialog-askbutton').click(function(){
                $('.dialog-conteiner').hide()
            })
        } 
    });
});