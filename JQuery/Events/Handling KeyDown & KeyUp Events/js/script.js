$(function() {

    // Key down event fires immediately when the user presses a key on the keyboard and there is also a key up event 
    // which is similar to the mouse up event. Now there is also a function which is called key press or an event which is called key press
    // Better not use the keypress() event but stick to the key down event instead. So keypress() is kind of evil because sometimes 
    // the key codes are missing and it's also just not predictable what's going to happen especially not in cross-browser cases.
    // Now those key codes that i just mentioned are the way you can actually find out which key was pressed on the keyboard. So each key
    // is represented by an integer value and you can easily find out which values assigned to each key by logging it to the console.
    // Now most of the time of course you want to get that key code because well you want to do different things depending on which key 
    // was pressed.

    // Let's create a quick event handler here that's gonna lock all the event key codes you need to differentiate between 
    // the different keys that the user actually pressed.

    // Now there is a field assigned to the event object which we need in this case, so we are going to pass that into function
    // as well which is called which. So this will tell you which key ws pressed.
    // offered by JQuery which is important because this is cross browser compatible.

    // Note !!! all the above may not work when you use the key press.(Not Cross Browser Compatible)

    $("html").keydown(function(event) {
        console.log(event.which);
    });

    var ARROW_RIGHT = 39;
    $("html").keydown(function(event) {
        if(event.which == ARROW_RIGHT) {
            $(".blue-box").stop().animate({
                marginLeft: "+=10px"
            }, 50);
        }
    });

    var ARROW_LEFT = 37;
    $("html").keydown(function(event) {
        if(event.which == ARROW_LEFT) {
            $(".blue-box").stop().animate({
                marginLeft: "+10px"
            }, 50);
        }
    });













});