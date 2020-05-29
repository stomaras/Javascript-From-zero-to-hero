
// We will learn a function which is specifically designed to retrieve files from your own server very easily and that function is called
// load

$(function() {

    // $.load()
    $("#code").load("js/script.js");

    $("#code").load("js/script.js", function(response, status) {
      if (status == "error") {
        alert("Could not find file");
      }
      console.log(response);
    });
});
