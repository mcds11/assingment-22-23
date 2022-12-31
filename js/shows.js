var url = 'https://content.guardianapis.com/search?q=shows&api-key=';
var apiKey = '497c5dec-74f7-4be7-a3c6-5b34f81fb9c8';

$(function() {
    $.get( url + apiKey, function( data ) {
        var results = data.response.results;
      parseResults(results);
      });
   });

   function parseResults(results) {
      $.each(results, function( index, result ) {
          $('#results').append('<li><a href="' + result.webUrl + '" target="_blank">' + result.webTitle + '</a></li>');
      });
   }

// <div class="card mb-4">
  //  <div class="card-body">
    //   <h5 class="card-title">${value.webTitle}</h5>
  //     <p class="card-text">${value.sectionName}</p>
  //     <a target="_blank" href="${value.webUrl}" class="btn btn-primary">View

//Article</a>
  //  </div>
 //</div>
