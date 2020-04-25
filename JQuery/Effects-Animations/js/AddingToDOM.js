$(function() {
    /*$("ul ul:first").append("<li>I'm gonna ve the last sub-item");
    $("<li>I'm gonna the last item</li>").appendTo($("ul ul:first"));
    $("ul ul:first").prepend("<li>I'm gonna be the first sub-item</li>");
    $("ul ul").prepend("<li>I'm gonna be the first sub-item</li>");
    
    $(".red-box").after("<div class='red-box'>Another Red</div>");
    $(".blue-box").before("<div class='blue-box'>Blue Friend</div>");
*/
/*    $(".blue-box").before(function(){
        return "<div class='blue-box'>Blue 2</div>";
    });
    */
    
    $(".blue-box").before($(".red-box"));
    
    $("p").after($("#list"));
});
