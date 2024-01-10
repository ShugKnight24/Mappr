// Add custom Icons for different location types
// https://leafletjs.com/examples/custom-icons/

// TODO: Add a default icon for locations that don't have a specific icon
// TODO: Find more fitting icons for their respective locations

// const iconExample = L.icon({
// 	iconUrl: 'img/icons/leaf-green.png', // url to the icon
// 	shadowUrl: 'img/icons/leaf-shadow.png', // url to the shadow
// 	iconSize: [38, 95], // size of the icon
// 	shadowSize: [50, 64], // size of the shadow
// 	iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
// 	shadowAnchor: [4, 62], // the same for the shadow
// 	popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
// });

const beachIcon = L.icon({
	iconUrl: 'img/icons/beach_chair_pin.png',
	shadowUrl: null,
	iconSize: [50, 55],
	shadowSize: [0, 0],
	iconAnchor: [50, 50],
	shadowAnchor: [0, 0],
	popupAnchor: [-25, -55]
});

const coffeeIcon = L.icon({
	iconUrl: 'img/icons/coffee_cup.png',
	shadowUrl: null,
	iconSize: [45, 90],
	shadowSize: [0, 0],
	iconAnchor: [50, 50],
	shadowAnchor: [0, 0],
	popupAnchor: [-25, -55]
});

const cityIcon = L.icon({
	iconUrl: 'img/icons/leaf-green.png',
	shadowUrl: 'img/icons/leaf-shadow.png',
	iconSize: [38, 95],
	shadowSize: [50, 64],
	iconAnchor: [22, 94],
	shadowAnchor: [4, 62],
	popupAnchor: [-3, -76]
});

const neighborhoodIcon = L.icon({
	iconUrl: 'img/icons/leaf-red.png',
	shadowUrl: 'img/icons/leaf-shadow.png',
	iconSize: [38, 95],
	shadowSize: [50, 64],
	iconAnchor: [22, 94],
	shadowAnchor: [4, 62],
	popupAnchor: [-3, -76]
});

const parkIcon = L.icon({
	iconUrl: 'img/icons/park_pin.png',
	shadowUrl: null,
	iconSize: [50, 55],
	shadowSize: [0, 0],
	iconAnchor: [50, 50],
	shadowAnchor: [0, 0],
	popupAnchor: [-25, -55]
});
