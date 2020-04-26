$(function() {
    //text(), html()
    var firstPar = $("p:first");
    console.log(firstPar.text());
    console.log(firstPar.html());
    
    firstPar.text("<strong>Hello</strong> World!");
    firstPar.html("<strong>Hello</strong> World!");
    
    firstPar.html(firstPar.html() + "This was just appended");
});
