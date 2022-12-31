var url = 'https://content.guardianapis.com/search?q=shows&api-key=';
var apiKey = '497c5dec-74f7-4be7-a3c6-5b34f81fb9c8';


var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");

xhr.open('GET', url + apiKey);
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
    var data = JSON.parse(xhr.responseText);
    var results = data.response.results;
    parseResults(results);
    }else {
      alert('Request failed. Returned status of ' + xhr.status);
      }
    };

xhr.send();

function parseResults(results) {
   //console.log(results);

   var resultList = document.querySelector('#results');

  results.forEach(function (item, index) {
    resultList.insertAdjacentHTML('beforeend', '<li><a target="_blank" href="'+ item.webUrl +'">' + item.webTitle + '</a></li>');
  });
}
