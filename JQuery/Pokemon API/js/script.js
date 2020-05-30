/*  So in this lecture we are going deep on the understanding of AJAX calls via JQuery Library! and more specifically calling JSON data
 *  from a foreign Server. Now in this case we are going to use Poke API to get information about Pokemon. You can already see part of the URL
 *  which is : http://pokeapi.co/api/v2/pokemon/1/
 *  For the pokeapi, you can also check the documentation.
 *  in done function is gonna retrieve the data that was fetched from the server.
 *  var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
 *  this will give me the name with the capital first letter. So after the above mentioned expression
 *  i will put a div in the index.html file in which i will put all the content.
 *  <div id="pokemon"></div>
 *  in each iteration i am gonna create a new paragraph tag by puttin a dollar $ and putting a paragraph tag here.
 *  So that's kind of create a paragraph element and then i am going to set the HTML of that paragraph 
 *  So for all the 151 pokemon species is gonna take the name and capitalize the firt letter then it's going to create a new 
 *  paragraph tag which will print the name of that Pokemon species and it's going to add that to the page.
 *  let's add also an event handler for the fail event. So if the request doesn't succeed you can then again call fail here and pass
 *  in a function or an event handler which will execute if the request was not successful.
 *  By the way you can also add an event handler that's going to be executed in either case. So whether the request was successful
 *  or not and you can do that by calling a function which is called always. So done will be executed if the request was successful 
 *  fail will be executed if it was not successful and always will be executed in either case.
*/

$(function() {
  // JSON, $.getJSON()
  var pokeapiUrl = "http://pokeapi.co/api/v2/generation/1";

  $.getJSON(pokeapiUrl).done(function(data) {
    console.log(data);
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      var par = $("<p>").html("Pokemon species no. " + (index + 1) + " is " + name);
      par.appendTo("#pokemon");
    });
  }).fail(function() {
    console.log("Request to Pokeapi failed. ");
  }).always(function() {
    console.log("Pokemon is awesome.");
  });
});













































