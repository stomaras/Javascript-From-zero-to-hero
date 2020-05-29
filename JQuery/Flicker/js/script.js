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
  $.getJSON(flickrApiUrl, {
    // options ...
  }).done(function() {
    // success
  }).fail(function() {
    // failure
  })
});