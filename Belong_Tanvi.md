<!-- Geocoding API key -->
## Google Geocoding API call to get lat and long from an address

https://maps.googleapis.com/maps/api/geocode/json?address=UCLA,Los Angeles, CA, United States&sensor=false&key=API_KEY

## Google API call by distance for a given lat long

https://maps.googleapis.com/maps/api/place/textsearch/json?location=45.555681, -122.841087&radius=10000&type=neighborhood&key=API_KEY

## For commute times and distance
var gDrivingUrl_origins = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=[lat,long|lat,long|lat,long....]&destinations="user destination"&units=metric&mode="transitMode"&key="API_KEY"

array of returned neighborhood coordinates from neighborhoods output: [lat,long|lat,long|lat,long....]
user destination = user.lat, user.long;
