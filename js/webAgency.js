
function webAgency(){

    function myMap(){
        var myCenter = new google.maps.LatLng(52.365948, 4.871017);
        var mapCanvas = document.getElementById("mapContainer");
        var mapOptions = {
            center: myCenter,
            zoom: 14,
            //disableDefaultUI: true
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
    }

    function folioSelector(){
        $(".folioSelector").change(function(){
            if(this.checked){
                if(this.id == "all"){
                    $("div.all").fadeIn("slow");
                }
                else if (this.id == "creative") {
                    $("div.notCreative").fadeOut("slow");
                    $("div.creative").fadeIn("slow");
                }
                else if (this.id == "corporate") {
                    $("div.notCorporate").fadeOut("slow");
                    $("div.corporate").fadeIn("slow");
                }
                else if (this.id == "portfolio") {
                    $("div.notPortfolio").fadeOut("slow");
                    $("div.portfolio").fadeIn("slow");
                }
            }
        })
    }

    myMap();
    folioSelector();

}
