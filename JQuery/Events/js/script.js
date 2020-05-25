$(function () {

  //$("p").click(function() {
  //  $(this).slideUp();
  //});
  //$("#content").append("<p>This is a dynamically added paragraph</p>");

  //-----------------------------------------------Passing Additional Data To Events / Section 8 --------------------------------------//


  // Imagine the user login and you want to handle that event by welcoming the user and for this event you want to pass in 
  // as additional information the name of the user or example or any other information about the user. 
  // So i am going to reuse my button click. So the click on that button means the same as logging in 
  // All the data we pass here is user: "Peter", we will pass the data into greetUser method
  // User and domain are parts of the event.data. The event.data you can pass into all functions you have here 
  // You can choose which data you can pass where


    $("#btn-click").click({
      user: "Peter",
      domain: "sptom.com"
    }, function(event) {
      greetUser(event.data);
    });

    function greetUser(userdata) {
      username = userdata.user || "Anonymous";
      domain = userdata.domain || "example.com";

      alert("Welcome back " + username + "from " + domain + "!");
    }
    


  //----------------------------------------- End of Passing Additional Data To Events / Section 8 ------------------------------------//







  //---------------------------------------------------- Delegated Events / Section 7 -------------------------------------------------//
  // Delegated Events
  // Meaning: Now what this means is that you basically define your event handler on some parent element which will
  //          always be on the page and then that parent element once that event actually occurs well then delegate that event to be 
  //          handled by its children or descendants. So for example you can go ahead and at the event handler to the content div
  //          and then tell the content div to delegate any event handling to the p tags or ul tags or anything like that.
  //          those events only will be handled if those child elements that you defined like for example all p tags have been clicked
  //          now is the content div which is always on the page. Sometimes is most efficient to use deligated events on parent element. 
  
  $("#content").on("click","p", function() {
    $(this).slideUp();
  });
  $("#content").append("<p>This is a dynamically added paragraph</p>");

  $("body").on("mouseenter", "li", function() {
    $(this).css("color","#666");
  });

//------------------------------------------------------- Delegated Events End / Section 7  -----------------------------------------------//
  
  // .on("click", function() {...})
  // Now what you can do with the on function you can actually assign the same event handler for multiple event types
  // So as the first parameter here you pass in a string in which you specify all the event types like click, hover e.t.c
  $("html").on("click keydown", logEvent);

  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];
  var i=0;
  var galleryImage = $(".gallery").find("img");
  galleryImage.on("click", switchToNextImage);

  function  switchToNextImage() {
    i = (i + 1) % images.length;
    galleryImage.fadeOut(function() {
      galleryImage.attr("src", images[i]).fadeIn();
    });
  }

  // Click handler can be attached by passing a callback function to the click()
  // function. Whatever code you write into the callback function is then
  // executed whenever the user clicks the element.
  // You can add a parameter to the callback to retrieve additional info about
  // the event. Accordingly, we call the parameter "event".
  //$("#btn-click").click(function(event){
  //  console.log(event);
  //  alert("Button was clicked");
  //});

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

function logEvent(){
  console.log("Mouse was entered or key was pressed.");
}
