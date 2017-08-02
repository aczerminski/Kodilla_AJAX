var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  });
}



function showCountriesList(response) {
  countriesList.empty();

  var filteredArray = [];
  response.forEach(function(country) {
    if (country.name.indexOf($('#country-name').val()) > -1) {
      filteredArray.push(country);
    }
  })

  response.forEach(function(country) {
    var newLi = $('<li>');
    newLi.text(country.name).appendTo(countriesList);
    newLi.on('click', function() {
      countriesList.empty();
      $('<p>').text('name : ' + country.name).appendTo(countriesList);
      $('<p>').text('capital : ' + country.capital).appendTo(countriesList);
      $('<p>').text('continent : ' + country.region).appendTo(countriesList);
      $('<p>').text('currency : ' + country.currencies).appendTo(countriesList);
    })
  });
}
