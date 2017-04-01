function initMap() {
    var coordinates = { lat: 51.535315, lng: -0.153386 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: coordinates
    });
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map
    });
}