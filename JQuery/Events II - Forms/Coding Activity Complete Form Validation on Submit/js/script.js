$(function() {

    var form = $("#form");
    enableFastFeedback(form);


    $("#form").submit(function(event) {
        var name = $("#name").val();
        var password = $("#password").val();
        var message = $("#message").val();
        var checked = $("#checkbox").is(":checked");

        validateNameField(name, event);
        passwordValidationField(password, event);
        validateMessageField(message, event);
        validateCheckboxField(checked, event);
    });
});

function enableFastFeedback(formElement) {

    var nameInput = formElement.find("#name");
    var passwordInput = formElement.find("#password");
    var messageInput = formElement.find("#message");
    var checkboxInput = formElement.find("#checkbox");

    nameInput.blur(function(event) {
        var name = $(this).val();
        validateNameField(name, event);

        if(!isValidName(name)) {
            $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
        } else {
            $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
        }
    })

    passwordInput.blur(function(event) {
        var password = $(this).val();
        passwordValidationField(password, event);

        if(!isValidPassword(password)) {
            $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
        } else {
            $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
        }
    })

    messageInput.blur(function(event) {
        var message = $(this).val();
        validateMessageField(message, event);

        if(!isValidMessage(message)) {
            $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
        } else {
            $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
        }
    })

    checkboxInput.change(function(event) {
        var isChecked = $(this).is(":checked");
        validateCheckboxField(isChecked, event);

        if(!isChecked) {
            $(this).add("label[for='cb']").css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
        } else {
            $(this).add("label[for='cb']").css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
        }
    });

}

// Now in order to make this submit event handler not get to very long 

// I am going ahead and modularize the code so i am going to write functions to validate each of those
// fields outside here and then i am going to call them inside the event handler.


//---------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------- Name Validation -------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
function validateNameField(name, event) {
    if (!isValidName(name)) {
        $("#name-feedback").text("Please enter at least two characters name!");
        event.preventDefault();
    } else {
        $("#name-feedback").text("");
    }
}


// You could of course improve this validation by for example checking that it's actually on the characters
// and not numbers or something like that are just spaces. But for the purposes of this code along i don't want to go too
// complicated on this.

function isValidName(name) {
    return name.length >= 2;
}


//-----------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------- Password Validation -----------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------
function passwordValidationField(password, event){
    if(!isValidPassword(password)) {
        $("#password-feedback").text("The password should have at least 6 characters and contain a number");
        event.preventDefault();
    } else {
        $("#password-feedback").text("");
    }
}

function isValidPassword(password) {
    return password.length >= 4 && /.*[0-9].*/.test(password);
}

//-----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------- Message Validation --------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------
function validateMessageField(message, event){
    if(!isValidMessage(message)) {
        $("#message-feedback").text("Please enter a message");
        event.preventDefault();
    } else {
        $("#message-feedback").text("");
    }
    
}

function isValidMessage(message) {
    return message.trim() != "";
}

//----------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------ Validate Checkbox ---------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------

function validateCheckboxField(isChecked, event) {
    if(!isChecked){
        $("#checkbox-feedback").text("Please agree to this");
        event.preventDefault();
    } else {
        $("#checkbox-feedback").text("");
    }
}