// Handler for .ready() -- A shorthand here is usually used:
// $(function() {       -- This line is exactly the same as the next one:
$( document ).ready(function() {
  var date = new Date();

  function formatDateToDayMonthYear (utcdate) {
    return formattedDate = ('0' + (utcdate.getMonth()+1)).slice(-2) + '/'
                  + ('0' + utcdate.getDate()).slice(-2) + '/'
                  + utcdate.getFullYear();
  }

  function formatDateToTimeOnly (fulldate) {
    timeStringArray = fulldate.toTimeString().split(' ');
    if (parseInt(timeStringArray[0].split(':')[0]) > 12) {
      twelveHourTimeString = `${parseInt(timeStringArray[0].split(':')[0]) - 12}:${timeStringArray[0].split(':')[1]}:${timeStringArray[0].split(':')[2]}pm ${timeStringArray[1]} ${timeStringArray[2]} ${timeStringArray[3]}  ${timeStringArray[4]}`
    } else {
      twelveHourTimeString = `${timeStringArray[0]}am ${timeStringArray[1]} ${timeStringArray[2]} ${timeStringArray[3]}  ${timeStringArray[4]}`
    }
    return twelveHourTimeString;
  }

  $( "#date" ).text( formatDateToDayMonthYear(date) );
  $( "#sunrise" ).text( "5:00AM EST" );
  $( "#sunset" ).text( "5:00AM EST" );
  const SunriseSunsetUrl = 'https://api.sunrise-sunset.org/json?lat=42.634338&lng=-73.553581&formatted=0';
  $.getJSON(SunriseSunsetUrl, function mycallback(result){
    $( "#sunrise" ).text( formatDateToTimeOnly(new Date(result.results.sunrise)) );
    $( "#sunset" ).text( formatDateToTimeOnly(new Date(result.results.sunset)) );
  });

});
