// Handler for .ready() -- A shorthand here is usually used:
// $(function() {       -- This line is exactly the same as the next one:
$( document ).ready(function() {
  var date = new Date();
  $( "#date" ).text( date );
  $( "#sunrise" ).text( "5:00AM EST" );
  $( "#sunset" ).text( "5:00AM EST" );
  const SunriseSunsetUrl = 'https://api.sunrise-sunset.org/json?lat=42.634338&lng=-73.553581&formatted=0';
  $.getJSON(SunriseSunsetUrl, function mycallback(result){
    $( "#sunrise" ).text( new Date(result.results.sunrise) );
    $( "#sunset" ).text( new Date(result.results.sunset) );
  });

});
