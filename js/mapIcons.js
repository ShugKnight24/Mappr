// Add custom Icons for different location types
// https://leafletjs.com/examples/custom-icons/

var neighborhoodIcon = L.icon({
	iconUrl: 'img/icons/leaf-red.png',
	shadowUrl: 'img/icons/leaf-shadow.png',

	iconSize: [38, 95], // size of the icon
	shadowSize: [50, 64], // size of the shadow
	iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62], // the same for the shadow
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var cityIcon = L.icon({
	iconUrl: 'img/icons/leaf-green.png',
	shadowUrl: 'img/icons/leaf-shadow.png',

	iconSize: [38, 95], // size of the icon
	shadowSize: [50, 64], // size of the shadow
	iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62], // the same for the shadow
	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var parkIcon = L.icon({
	iconUrl: 'img/icons/park_pin.png',
	shadowUrl: null,

	iconSize: [50, 55], // size of the icon
	shadowSize: [0, 0], // size of the shadow
	iconAnchor: [50, 50], // point of the icon which will correspond to marker's location
	shadowAnchor: [0, 0], // the same for the shadow
	popupAnchor: [-25, -55] // point from which the popup should open relative to the iconAnchor
});

var beachIcon = L.icon({
	iconUrl: 'img/icons/beach_chair_pin.png',
	shadowUrl: null,

	iconSize: [50, 55], // size of the icon
	shadowSize: [0, 0], // size of the shadow
	iconAnchor: [50, 50], // point of the icon which will correspond to marker's location
	shadowAnchor: [0, 0], // the same for the shadow
	popupAnchor: [-25, -55] // point from which the popup should open relative to the iconAnchor
});