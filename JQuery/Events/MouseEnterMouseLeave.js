$(function() {
    // :hover
    $("#btn-hover").hover(function() {
        alert("Button was hovered.");
    });
    
    $(".green-box").hover(function() {
        $(this).text("I was hovered");
    });
    
    var blueBox = $(".blue-box");
    /*blueBox.mouseenter(function() {
       $(this).stop().fadeTo(500, 0.7); 
    });
    blueBox.mouseleave(function() {
        $(this).stop().fadeTo(500, 1);
    });*/
    
    // hover(handlerIn, handlerOut)
    blueBox.hover(function() {
        $(this).stop().fadeTo(500, 0.7);
    }, function() {
        $(this).stop().fadeTo(500,1);
    });
});
