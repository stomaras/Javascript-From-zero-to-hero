// Focus are triggered when you go into a text input for example here and then when you go in there 
// when you click on it for example, then it's going to be focused and when you press tab or go into another text input then it's going to be 
// Blur.

$(function() {
    var inputFields = $("input:text, input:password, textarea");

    inputFields.focus(function() {
        $(this).css("box-shadow", "0 0 4px #666");
    });

    inputFields.blur(function() {
        $(this).css("box-shadow", "none");
    });

    $("#name").blur(function() {
        var text = $(this).val();
        if(text.length < 3){
            $(this).css("box-shadow", "0 0 4px #811");
        } else {
            $(this).css("box-shadow", "0 0 4px #181");
        }
    });
});