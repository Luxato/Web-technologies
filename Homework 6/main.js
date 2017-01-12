var schoollat = 48.1513959;
var schoollng = 17.0724263;

var marker;
var pan;
var directionsService;
var directionsDisplay;
var map;
var point;
var sposob;
var service;
var infowindoww;
var panorama;

function init_Map(){
    point = {lat: schoollat, lng: schoollng};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#263c3f'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#6b9a76'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#38414e'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#212a37'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#9ca5b3'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#746855'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#1f2835'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#f3d19c'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#2f3948'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#d59563'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#17263c'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#515c6d'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#17263c'}]
            }
        ],
        center: point
    });

    var infowindow = new google.maps.InfoWindow({
        content: "Fakulta: FEI STU"
    });


    marker = new google.maps.Marker({
        position: point,
        map: map

    });
    marker.setIcon('blue-dot.png');
    marker.addListener("click",function(){
        alert("Súradnice " +marker.getPosition()).fadeIn();
    });

    $(document).ready(function(){
        infowindow.open(map,marker);
    });
    marker.addListener("mouseover",function(){
        infowindow.open(map,marker);
    });
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();
    directionsDisplay.setMap(map);
    var request = {
        location: point,
        radius: 1000,
        types: ['train_station','bus_station','subway_station','transit_station']
    };

    infowindoww = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);
    service.search(request, callback);

    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('panorama'),
        {
            position: {lat: schoollat, lng: schoollng},
            pov: {heading: 165, pitch: 0},
            zoom: 1
        });
}

function callback(results, status) {
    console.log(results);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    marker.setIcon('green-dot.png');

    var content='<strong style="font-size:12px">'+place.name+'</strong>'+
        '<br/><strong>Zem. šírka:</strong> '+placeLoc.lat()+
        '<br/><strong>Zem. dĺžka:</strong> '+placeLoc.lng();


    google.maps.event.addListener(marker, 'click', function() {

        infowindoww.setContent(content);
        infowindoww.open(map, this);
    });
}

function findPlace()
{
    if(document.getElementById("travel").checked)
        sposob = "WALKING";
    else sposob = "DRIVING";
    calculateAndDisplayRoute(directionsService, directionsDisplay);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: document.getElementById('odkial').value,
        destination: marker.position,
        unitSystem: google.maps.DirectionsUnitSystem.METRIC,
        travelMode: sposob
    }, function(response, status) {
        if (status === 'OK') {
            $("#bottompanel").fadeOut('fast', function() {
                $("#panel").text(response.routes[0].legs[0].distance.value + " metrov");
            });
            $("#bottompanel").fadeIn('fast');
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Určenie trasy zlyhalo. Chyba: ' + status);
        }
    });
}