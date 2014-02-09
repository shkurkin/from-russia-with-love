$(document).ready(function() {
  var name = "Nicole Paz"
  $.ajax({
    url: 'http://api.pipl.com/search/v3/json/?raw_name=' + name + '&key=samplekey&pretty=true&callback=parseResponse',
    dataType: 'jsonp'
  }).done(function(response) {
    console.log(response)
    console.log(response.records[0])
  })
})