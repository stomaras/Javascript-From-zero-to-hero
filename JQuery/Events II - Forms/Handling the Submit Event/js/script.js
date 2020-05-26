// There is another essential event that we have not talk about which is the submit event. So when you actually submit the form as a whole you 
// can still perform the final form validation for example to check on the client side whether all the inputs are correct before actually
// sending any data to the server. So that's also part of providing fast feedback to the user and avoiding page reload at all.
// Let's say you want to check the textarea input and make sure that's actually something in there and there's not just whitespace or anything like that.
// So first will go and select the form element which i also gave an ID and I just called it form and then i am going to handle the 
// submit event

// you can use preventDefault() function whenever you want some default event to stop for executing like form submissions or links 
// taking you somewhere else. These are two most common examples!!!

$(function() {
    $("#form").submit(function(event){
        var textarea = $("#message");
        if(textarea.val().trim() == ""){
            textarea.css("box-shadow", "0 0 4px #811");
            event.preventDefault();
        } else {
            // form will be submitted.
        }
    });
});