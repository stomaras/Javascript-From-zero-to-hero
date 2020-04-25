$(function(){
    // attr(), prop(), val()
    
    //var specialLink = $("#special-link");
    //console.log(specialLink.attr("href"));
    //console.log(specialLink.attr("title"));
    
    //specialLink.attr("href","http://petersommerhoff.com");
    
    //var checkbox = $("input:checkbox");
    //console.log(checkbox.prop("checked"));
    
    var textInput = $("input:text");
    textInput.val("Peter Somenth");
    console.log(textInput.val());
    
    var rangeInput = $("input[type='range']");
    console.log(rangeInput.val());
});
