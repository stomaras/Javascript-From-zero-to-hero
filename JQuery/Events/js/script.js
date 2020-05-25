$(function () {

  // .on("click", function() {...})
  // Now what you can do with the on function you can actually assign the same event handler for multiple event types
  // So as the first parameter here you pass in a string in which you specify all the event types like click, hover e.t.c
  $("html").on("click keydown", function(){
    console.log("Mouse was clicked or key was pressed.");
  });

  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];
  var i=0;
  $(".gallery").find("img").on("click", function() {
    i = (i + 1) % images.length;
    $(this).fadeOut(function() {
      $(this).attr("src", images[i]).fadeIn();
    });
  });


  // Click handler can be attached by passing a callback function to the click()
  // function. Whatever code you write into the callback function is then
  // executed whenever the user clicks the element.
  // You can add a parameter to the callback to retrieve additional info about
  // the event. Accordingly, we call the parameter "event".
  $("#btn-click").click(function(event){
    console.log(event);
    alert("Button was clicked");
  });

  $('.green-box').hover(function(){
    $(this).text(" I was hovered ");
  });

  // When the mouse leaves the element again you want to undo all the changes you did when the mouse entered the element and then that's
  // going to be more like the hover selector and css
  // the bluebox should fade out a little bit so let's say 70 percent opacity when the mouse is on the bluebox and then it should 
  // fade back to its original state when you unhover the element so when the mouse leaves again
  // fadeTo(500,0.7) 500 miliseconds and 0.7 percent opacity

  //--------------------------1st way-------------------------------------
  /*
  
  blueBox.mouseenter(function() {
    $(this).stop().fadeTo(500, 0.7);
  });
  blueBox.mouseleave(function() {
    $(this).stop().fadeTo(500,1);
  })*/

  //--------------------------2nd way-----------------------------------------
  // hover(handlerIn, handlerOut)
  var blueBox = $(".blue-box");
  blueBox.hover(function() {
    $(this).stop().fadeTo(500, 0.7);
  }, function() {
    $(this).stop().fadeTo(500, 1);
  });




  $(".red-box").click(function() {
    $(this).fadeTo(500, 0.5);
  })
  $(".red-box").click();

  $("#btn-hover").hover(function() {
    alert("Button was hovered");
  });

});
