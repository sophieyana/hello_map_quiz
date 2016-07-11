var map;
      
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.5160563, lng: -0.1271484},
          zoom: 15
    });
}