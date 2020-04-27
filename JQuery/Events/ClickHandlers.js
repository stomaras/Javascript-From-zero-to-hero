$(function() {
    //text(), html()
    $("#btn-click").click(function() {
       console.log(event);
       alert("Button was clicked."); 
    });
    
    $(".red-box").click(function() {
        $(this).fadeTo(500, 0.5);
    });
});
