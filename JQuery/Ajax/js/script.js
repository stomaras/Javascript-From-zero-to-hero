
// We will learn a function which is specifically designed to retrieve files from your own server very easily and that function is called
// load

$(function() {


    // JQuery function specifically design to retrieve files from your own server very easily and that function is called load.
    // So with this load function you can easily get any type of file from your own server like for example script or HTML files
    // So in html i will add a new element in which i can display that file. => <pre><code id="code"></code></pre> =>.
    // $.load()
    $("#code").load("js/script.js");

    $("#code").load("js/script.js", function(response, status) {
      if (status == "error") {
        alert("Could not find file");
      }
      console.log(response);
      
    });
});
