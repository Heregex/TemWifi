function requestGeolocationPermission() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function() {
                console.log("Permissão concedida!");
            },
            function(error) {
                console.log("Permissão negada ou erro ao solicitar a localização.");
            }
        );
    } else {
        console.log("Geolocalização não é suportada pelo seu navegador.");
    }
}