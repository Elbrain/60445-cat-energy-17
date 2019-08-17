function initMap() {
  var htmlacademy = {
    lat: 59.9387165,
    lng: 30.3208587
  };
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 17,
      center: htmlacademy
    });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: htmlacademy,
    map: map
  });
}
