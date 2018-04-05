function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);   
    console.log('Getting location'); 
}   

function showPosition(position) {
    console.log(position.coords.latitude);
    let coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude 
    };
    console.log(coords);
}