$(function() {
  // JSON
  // We eill do an API call , with $.getJSON() function which provides by JQuery
  // So this function that makes easier to make such calls for JASON API instead of using the AJAX Function directly.
  // ?jsoncallback=? this will allow you to make actually that request to the flickr domain server
  // That will allow you to retrieve data from other server in this case flickr.com
  var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  
  // Now we will make that request with the getJSON() method 
  // This call is asynchronous so you will nedd an event handler that's will be called once this request is finished.
  // So once you request was handled by Flickr.com and Flickr.com actually come back with all the data you requested, you can handle that event 
  // and work with that data.So this is also an event handler and you can put that after this call here by using done function
  // which is gone defined your event handler function for when the request was successfully finished. So you can put in a function here that's going to execute 
  // for a success. After that you can also call the fail function which will be called when something went wrong.
  // format: "json" // this is really important for you because you want to retrieve json data and you are using the getjson function,
  // so you want the API to know that you are expecting Jason data as your format. Now another similar format should be XML but in this case
  // we are gonna go with JSON file. So now done function get a parameter which is the data that the server came back with.
  // Now the way i like to do things is to actually take a look at the data in the console first. So i am gonna say console log data
  // and then that's going to allow me to see what kind of object I am getting back and which fields I can actually access and that data
  // we are gonna iterate in each of th given items and we will get the media that . First of all we are gonna the JQUery function which 
  // it makes it really easy to iterate over such arrays or also over objects and that's called each so you just call dollar .each() and then 
  // you put in the array all the object you want to iterate over. In this case we have an array which is accessed by data.items.
  // So this is the array with 20 items that we just saw on the console. and then we pass a function here which is going to be executed
  // for each of those items. Now in this case you put an array as first parameter this function is going to first get the index and then 
  // the value. So the index here will be 0 1 2 3 and so on and the value is going to be each of those items.
  // So this is the way you can browse through your data basically to get a good idea of what you are working with and how you can 
  // access which properties. So for now I'm just going to use the media .m object which is going to give me the URL to the actual image 
  // file.
  // $.each() function the way this works is actually that once you return false, on one of those iterations then the whole call to this
  //          each loop here will terminate.
  //          So that's just a specification about JQuery function when you return false, it's gonna stop all future iterations!
  $.getJSON(flickrApiUrl, {
    tags: "sun, beach",
    tagmode: "any",
    format: "json" 
  }).done(function(data) {
    console.log(data);
    $.each(data.items, function(index, item) {
      console.log(item);
      $("<img>").attr("src", item.media.m).appendTo("#flickr");

      if (index == 4) {
        return false;
      }
    });
  }).fail(function() {
    alert("Ajax call failed.");
  });
});