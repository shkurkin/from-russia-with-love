$(function(){
  google.maps.event.addDomListener(window, 'load', initialize);
  getGraphData();
});


/////////////////
// GOOGLE MAPS
////////////////

function initialize() {

  var mapOptions = {
    center: new google.maps.LatLng(0, 0),
    zoom: 2
  };

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  $('.name-input').on('submit', function(e){
    e.preventDefault();
    processName(e);
  });

}

function processName(e){
  var latLng = new google.maps.LatLng(-25.363882,131.044922);
  var popup = '<div id="content">' +
  '<p>This is only a test</p>'
  '</div>';

  addMarker(latLng, popup);
}

function addMarker(latLng, popup) {
  var marker = new google.maps.Marker({
    position: latLng,
    animation: google.maps.Animation.DROP,
    map: map
  });
  addInfoWindow(marker, popup);
}

function addInfoWindow(marker, popup) {
  var infoWindow = new google.maps.InfoWindow({
    content: popup
  });

  google.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map, marker);
  });
}


////////////////
// FACEBOOK API
////////////////

function getGraphData() {
  $.ajax({
    url: "http://graph.facebook.com/1036590399?fields=picture,name"
  }).done(function(response){
    processGraphData(response)
  }).fail(function(){
    console.log("Request Failed");
  });
}


///  working on this
// function getByName(name) {
//   $.ajax({
//     url: "http://graph.facebook.com/search?q=frank%20turner&type=user"

//   })
// }


function processGraphData(response) {
  debugger
  var latLng = new google.maps.LatLng(0,0);
  var popup = '<img src="' + response.picture.data.url + '">' +
  '<p>' +  response.name + '</p>';
  addMarker(latLng, popup);
}


