var url = 'https://content.guardianapis.com/search?q=';
var apiKey = '&api-key=497c5dec-74f7-4be7-a3c6-5b34f81fb9c8';

$(function() {
     $( "#search-form" ).submit(function( event ) {
         event.preventDefault();
         var  keywords = $(this).find("#keywords").val();
         console.log("you searched for: " + keywords);

         $.get( url + keywords + apiKey, function( data ) {
             var results = data.response.results;
             parseResults(results);
         });

      });

});

function parseResults(results) {
  $("#results").html('');
  $.each(results, function(index, result) {
      $('#results').append('<li><a target="_blank" href="' + result.webUrl + '">' + result.webTitle + '</a></li>');
  });
}
