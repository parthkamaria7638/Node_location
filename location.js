let latitude = 0;
let longitude = 0;
let coords = { 
    latitude: latitude, 
    longitude: longitude 
};

function getLocation() {
    while(1) {
        navigator.geolocation.getCurrentPosition(showPosition);        
    }
}   

function showPosition(position) {
    coords = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude 
    };
}

// module.exports = coords;