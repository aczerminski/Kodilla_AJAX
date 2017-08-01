var url = 'https://restcountries.eu/rest/v1/name/';
var countriesDetails = 'https://restcountries.eu/rest/v2/all';
var countriesList = $('#countries');

$('#search').click(searchCountries);
$('#details').click(showCountriesDetails);

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
  $.ajax({
    url: url + countryName,
    method: 'GET',
    success: showCountriesList
  });
}

function showCountriesList(resp) {
  countriesList.empty();
  resp.forEach(function(item) {
    $('<li>').text(item.name).appendTo(countriesList);
  });
}

function showCountriesDetails (){
  $.ajax({
    url: countriesDetails,
    method: 'GET',
    success: showCountriesDetails
  });
}
