// Handler for .ready() -- A shorthand here is usually used:
// $(function() {       -- This line is exactly the same as the next one:
$( document ).ready(function() {
  var date = new Date();
  $( "#date" ).text( date );
  $( "#sunrise" ).text( "5:00AM EST" );
  $( "#sunset" ).text( "5:00AM EST" );
});
