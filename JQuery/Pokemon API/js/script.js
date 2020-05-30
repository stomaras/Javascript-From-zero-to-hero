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
 *  in some cases you may find that your call was not successful for some reason even thogh you haven't acyually changed anything 
 *  and that might be because the pocker API server is not currently reachable so it's a free project and there is not a lot of budget 
 *  for it. So sometimes the server may be down or overloaded but still it's a good way to try it out Ajax with JQuery by just calling the API
 *  because it's completely free and public you don't need any API key or something like that.
 *  So it's link is going to have a unique ID which is the unique name of that pokemon  and lso i am goig to set the attribute href
 *  to # sign which is not href at all and then inside a tag i am gonna put a strong tag in there 
 *  so i am going to append this link element to my paragraph down here.
 *  So we are gonna make the Bulbashar a link tag so when we clcik on that link we will get more info about the pokemoon 
 *  on the top of paragraph. We are gonna use a different url so in pokemon API we are gonna get 
 *  pokemon/1 id or can also put the name of the pokemon which is exactly what we get with our first request.
 *  so .../pokemon/bulbashar and so we this will get you all data about that specidic pokemon.
 *  so after all the above when the user click the element s we add an event handler in the click with access a different json file 
 *  with the help of method which is $.getJSON() and a different URL.
 *  
 * 
*/

$(function() {
  // JSON, $.getJSON()
  var pokeapiUrl = "http://pokeapi.co/api/v2/generation/1";
  var pokemonByName = "http://pokeapi.co/api/v2/pokemon/";


  $.getJSON(pokeapiUrl).done(function(data) {
    console.log(data);
    $.each(data.pokemon_species, function(index, pokemon) {
      var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
      var par = $("<p>").html("Pokemon species no. " + (index + 1) + " is ").append(link);
      
      link.click(function(event) {
        $.getJSON(pokemonByName + pokemon.name).done(function(details) {
          console.log(details);
          var pokemonDiv = $("#pokemon-details");
          pokemonDiv.empty();
          pokemonDiv.append("<h2>" + name + "</h2>");
          pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
          pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
          pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>");
          pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>");
          pokemonDiv.append(details.species.name);

        });
        event.preventDefault();
      });


      par.appendTo("#pokemon");
    });
  }).fail(function() {
    console.log("Request to Pokeapi failed. ");
  }).always(function() {
    console.log("Pokemon is awesome.");
  });
});













































