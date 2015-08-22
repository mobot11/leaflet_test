// var map = L.map('map').setView([51.505, -0.09], 13);

var map = L.map('map').setView([47.609, -122.332099], 12);

// load a tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mobot11.1dba3612',
    accessToken: 'pk.eyJ1IjoibW9ib3QxMSIsImEiOiI4N2FjYWZhNWQ4YmU5Yjk2MzFlZjkxMjMzNzNmMGQzNiJ9.kkMw6O4lV-74eEs-MgHvkQ'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], 500 , {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);
