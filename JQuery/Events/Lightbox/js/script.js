$(function() {
  var galleryItems = $(".gallery").find("img");
  galleryItems.css("width","33%").css("opacity","0.7");

  galleryItems.mouseenter(function(){
    $(this).stop().fadeTo(500, 1);
  });

  galleryItems.mouseleave(function() {
    $(this).stop().fadeTo(500, 0.7);
  });

  galleryItems.click(function() {
    var source = $(this).attr("src");
    var image = $("<img>").attr("src", source).css("width", "100%");
    $(".lightbox").empty().append(image).fadeIn(2000);
  });

  $(".lightbox").click(function() {
    $(this).stop().fadeOut();
  });

  // The crucial point here is the difference between $("img") and $("<img>"). The first one selects all image tags,
  // the second one creates a new image tag



});
