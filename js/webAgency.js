
function webAgency(){

    console.log("Script Initialisé");
    
    function myMap(){
        var myCenter = new google.maps.LatLng(52.365948, 4.871017);
        var mapCanvas = document.getElementById("mapContainer");
        var mapOptions = {
            center: myCenter,
            zoom: 14,
            disableDefaultUI: true
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
    }
    
    myMap();
}