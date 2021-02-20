'use strict';

// Classes
class Location {
	constructor(
		name,
		position,
		address,
		image,
		type
	){
		this.name = name;
		this.position = position;
		this.address = address;
		this.image = image;
		this.type = type;
	}

	checkIfDowntown(){
		if (this.name === 'Downtown' || 'Southwest'){
			L.marker(
				this.position,
				{
					icon: neighborhoodIcon
				}
			)
			.bindPopup(
				`
					<h2>${ this.name } Detroit</h2>
				`
			)
			.openPopup()
			.addTo(markers);

			return true;
		}
	}

	buildModal(){

		if (this.checkIfDowntown()){
			this.checkIfDowntown();
		} else {
			let iconType = this.type === 'Neighborhood' ? neighborhoodIcon : cityIcon;

			L.marker(
				this.position,
				{
					icon: iconType
				}
			)
			.bindPopup(
				`
					<h2>${ this.type } of ${ this.name }</h2>
				`
			)
			.openPopup()
			.addTo(markers);
		}
	}
}

class CoffeeShop extends Location {
	constructor(
		name,
		position,
		address,
		image,
		hours,
		phone,
		website
	){
		super(
			name,
			position,
			address,
			image
		);
		this.type = 'Coffee Shop';
		this.hours = hours;
		this.phone = phone;
		this.website = website;
	}

	buildModal(){

		L.marker(this.position)
		.bindPopup(
		`
			${
				this.website
				?
				`<a href=${ this.website }
					rel="noopener noreferrer"
					target="_blank"
				>
					<h2>${ this.name }</h2>
				</a>`
				:
				`<h2>${ this.name }</h2>`
			}
			<p><b>Type:</b> ${ this.type }</p>
			<p><b>Address:</b> ${ this.address }</p>
			${
				this.phone
				?
				`<p><b>Phone #:</b>
					<a href=tel:${ this.phone }
					>
					${ this.phone }
					</a>
				</p>`
				:
				``
			}
		`
		)
		.openPopup()
		.addTo(markers)
	}
}

class College extends Location {
	constructor(
		name,
		position,
		address,
		image,
		mascot,
		enrollment
	){
		super(
			name,
			position,
			address,
			image
		);
		this.type = 'College';
		this.mascot = mascot;
		this.enrollment = enrollment;
	}

	buildModal(){
		L.marker(this.position)
		.bindPopup(
		`
			<h2>${ this.name }</h2>
			<p><b>Address:</b> ${ this.address }</p>
			<p><b>Mascot:</b> ${ this.mascot }</p>
			<p><b>Type:</b> ${ this.type }</p>
			<p><b>Enrollment #'s:</b> ${ this.enrollment }</p>
		`
		)
		.openPopup()
		.addTo(markers)
	}
}

class Museum extends Location {
	constructor(
		name,
		position,
		address,
		image,
		hours
	){
		super(
			name,
			position,
			address,
			image
		);
		this.type = 'Museum';
		this.hours = hours;
	}
}

class Park extends Location {
	constructor(
		name,
		position,
		address,
		image,
		hours
	){
		super(
			name,
			position,
			address,
			image
		);
		this.type = 'Park';
		this.hours = hours;
	}

	buildModal(){

		L.marker(
			this.position,
			{
				icon: parkIcon
			}
		)
		.bindPopup(
			`
				<h2>${ this.name }</h2>
			`
		)
		.openPopup()
		.addTo(markers);
	}
}

class Beach extends Location {
	constructor(
		name,
		position,
		address,
		image,
		hours
	){
		super(
			name,
			position,
			address,
			image
		);
		this.type = 'Beach';
		this.hours = hours;
	}

	buildModal(){

		L.marker(
			this.position,
			{
				icon: beachIcon
			}
		)
		.bindPopup(
			`
				<h2>${ this.name }</h2>
			`
		)
		.openPopup()
		.addTo(markers);
	}
}

class Restaurant extends Location {
	constructor(
		name,
		position,
		address,
		image,
		cuisineType,
		specialty,
		favDish,
		delivers,
		doorDashLink,
		grubHubLink,
		hours,
		phone,
		// review,
		website
	){
		super(
			name,
			position,
			address,
			image
		);
		this.type = 'Restaurant';
		this.cuisineType = cuisineType;
		this.specialty = specialty;
		this.favDish = favDish;
		this.delivers = delivers ? 'Yes' : 'No';
		this.doorDashLink = doorDashLink;
		this.grubHubLink = grubHubLink;
		this.hours = hours;
		this.phone = phone;
		// this.review = review;
		this.website = website;
	}

	buildModal(){

		let doorDashIcon,
			grubHubIcon;

		if (this.doorDashLink){
			doorDashIcon = `<a class="doordash-link" href=${ this.doorDashLink }
			rel="noopener noreferrer"
			target="_blank">
				<svg class="doordash-logo" width="32" height="18" viewBox="0 0 99.5 56.5" fill="#ff3008"><path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"></path></svg>
				<svg class="doordash-text" width="112" height="13" viewBox="0 0 361.1 42" fill="#ff3008"><path d="M8.62,8.66V33.38h6.32A12.21,12.21,0,0,0,27,21,12,12,0,0,0,14.94,8.66ZM14.94.91C26.72.91,35.63,9.81,35.63,21S26.72,41.14,14.94,41.14H1a1,1,0,0,1-1-1V1.95a1,1,0,0,1,1-1Z"></path><path d="M66,34.24A13.22,13.22,0,1,0,52.82,21,13.24,13.24,0,0,0,66,34.24M66,0C78.4,0,87.88,9.53,87.88,21S78.4,42,66,42,44.2,32.52,44.2,21,53.68,0,66,0"></path><path d="M118,34.24A13.22,13.22,0,1,0,104.75,21,13.24,13.24,0,0,0,118,34.24M118,0c12.36,0,21.84,9.48,21.84,21S130.32,42,118,42,96.12,32.52,96.12,21,105.6,0,118,0"></path><path d="M168.75,8.66h-8.91V19.3h8.91a5.22,5.22,0,0,0,5.46-5.17,5.28,5.28,0,0,0-5.46-5.46M151.22,1.95a1,1,0,0,1,1-1H169c8,0,13.79,5.86,13.79,13.22a13,13,0,0,1-7.18,11.78l7.74,13.68a1,1,0,0,1-.91,1.56h-6.79a1,1,0,0,1-.91-.54l-7.46-13.54h-7.47v13a1,1,0,0,1-1,1h-6.54a1,1,0,0,1-1-1Z"></path><path d="M205.26,8.85V33.57h6.32a12.21,12.21,0,0,0,12.07-12.36A12,12,0,0,0,211.58,8.85Zm6.32-7.76c11.78,0,20.69,8.91,20.69,20.12s-8.91,20.12-20.69,20.12h-13.9a1,1,0,0,1-1-1V2.14a1,1,0,0,1,1-1Z"></path><path d="M258.56,10.92l-4.89,13.22h9.77Zm-7.76,20.69-3.2,8.8a1,1,0,0,1-1,.69h-6.94a1,1,0,0,1-1-1.42l15-38.15a1,1,0,0,1,1-.66h7.77a1,1,0,0,1,1,.66l15,38.15a1,1,0,0,1-1,1.42h-6.94a1,1,0,0,1-1-.69l-3.2-8.8Z"></path><path d="M286.48,11.78C286.48,5.46,291.94,0,300.56,0a17.84,17.84,0,0,1,12.51,4.71,1,1,0,0,1,0,1.47L309.22,10a1,1,0,0,1-1.42,0,10.12,10.12,0,0,0-6.67-2.63c-3.45,0-6,2-6,4.31,0,7.47,20.38,3.16,20.38,17.53C315.5,36.49,310,42,300.27,42a20.41,20.41,0,0,1-14.54-5.84,1,1,0,0,1,0-1.47l3.72-3.72a1,1,0,0,1,1.45,0,12.85,12.85,0,0,0,8.79,3.58c4.31,0,7.15-2.3,7.15-5.18,0-7.47-20.37-3.16-20.37-17.53"></path><path d="M352.47,1.9V17H335.22V1.9a1,1,0,0,0-1-1h-6.54a1,1,0,0,0-1,1V40.05a1,1,0,0,0,1,1h6.54a1,1,0,0,0,1-1V24.71h17.24V40.05a1,1,0,0,0,1,1H360a1,1,0,0,0,1-1V1.9a1,1,0,0,0-1-1h-6.54A1,1,0,0,0,352.47,1.9Z"></path></svg>
			</a>`;
		}

		if (this.grubHubLink){
			grubHubIcon = `<a class="grubhub-link" href=${ this.grubHubLink }
			rel="noopener noreferrer"
			target="_blank">
				<svg class="grubhub-logo" xmlns="http://www.w3.org/2000/svg" viewBox="-247.2 1051.5 600 125.9" fill="#F63440">
					<path d="M170.5 1053.3h-21c-1.2 0-1.8 1.2-1.8 1.8v45.7h-21v-45.7c0-1.2-1.2-1.8-1.8-1.8h-21c-1.2 0-1.8 1.2-1.8 1.8v117.3c0 1.2 1.2 1.8 1.8 1.8h21c1.2 0 1.8-1.2 1.8-1.8v-46.9h21v46.9c0 1.2 1.2 1.8 1.8 1.8h21c1.2 0 1.8-1.2 1.8-1.8v-117.3c0-.6-.6-1.8-1.8-1.8M-6.5 1053.3h-21c-1.2 0-1.8.6-1.8 1.8v83.1c0 4.2-1.2 7.2-3 9.6-1.8 2.4-4.2 3-7.2 3-2.9 0-5.4-1.2-7.2-3-1.8-2.4-3-5.4-3-9.6v-83.1c0-1.2-1.2-1.8-1.8-1.8h-21c-1.2 0-1.8.6-1.8 1.8v83.7c0 10.8 2.4 21 9 27.7 6.6 6.6 15.6 10.2 25.9 10.2 10.8 0 19.9-3.6 25.9-10.2 6.6-6.6 9-16.2 9-27.7v-83.7c-.1-.6-.7-1.8-2-1.8M-212.3 1051.5c-10.8 0-19.9 3.6-25.9 10.2-6.6 6.6-9 16.2-9 27.7v50c0 10.8 2.4 21 9 27.7 6.6 6.6 15.6 10.2 25.9 10.2 10.8 0 19.9-3.6 25.9-10.2 6.6-6.6 9-16.2 9-27.7v-27.6c0-1.2-1.2-2.4-2.4-2.4h-30.7c-1.2 0-2.4 1.2-2.4 2.4v20.5c0 1.2 1.2 2.4 2.4 2.4h7.9v4.8c0 4.2-1.2 7.9-3 10.2-1.8 2.4-4.2 3-7.2 3-2.9 0-5.4-1.2-7.2-3-1.8-2.4-3-6-3-10.2v-49.4c0-4.2 1.2-7.9 3-10.2 1.8-2.4 4.2-3 7.2-3 2.9 0 5.4 1.2 7.2 3 1.8 2.4 3 6 3 10.2v4.8c0 1.2 1.2 1.8 1.8 1.8h21c1.2 0 1.8-.6 1.8-1.8v-4.8c0-10.8-2.4-21-9-27.7-5.4-7.3-15.1-10.9-25.3-10.9M58.5 1147.2c-1.8 2.4-4.2 3-7.9 3h-12v-25.4h12c3 0 5.4 1.2 7.2 3 1.8 2.4 3 5.4 3 9 .2 5-.4 7.9-2.3 10.4zM38.6 1078h10.8c3 0 5.4.6 7.2 3 1.8 1.8 2.4 4.8 2.4 8.5s-.6 6.6-2.4 9c-1.8 1.8-4.2 3-6.6 3H39.2V1078h-.6zm34.9 34.3c3.6-3.6 10.2-12 10.2-22.9 0-12.7-4.8-20.5-8.5-24.7-6.6-7.2-15.6-10.8-25.9-10.8H16.4c-1.2 0-1.8 1.2-1.8 1.8v117.4c0 1.2 1.2 1.8 1.8 1.8h34.9c10.8 0 21-4.2 27.7-12.7 3.6-4.8 7.9-12.7 7.9-24.7-.7-14.4-9.7-22.9-13.4-25.2zM-117.8 1100.8c-1.8 2.4-4.8 3.6-8.5 3.6h-10.2V1078h10.2c3.6 0 6.6 1.2 8.5 3.6 2.4 2.4 3 5.4 3 9.6 0 4.2-.5 7.2-3 9.6zm13.3 21.7c2.4-1.8 4.2-3 6-5.4 4.2-4.8 9.6-13.3 9.6-26.5 0-12.7-4.8-21-9.6-25.9-6-7.2-15-10.8-25.3-11.4h-34.9c-1.2 0-1.8 1.2-1.8 1.8v117.3c0 1.2 1.2 1.8 1.8 1.8h21c1.2 0 1.8-1.2 1.8-1.8V1129h7.2l13.3 44.5c0 .6 1.2 1.2 1.8 1.2h22.2c.6 0 1.2-.6 1.8-.6.6 0 .6-1.2.6-1.8l-15.5-49.8zM323.9 1147.2c-1.8 2.4-4.2 3-7.9 3h-12v-25.4h12c3 0 5.4 1.2 7.2 3 1.8 2.4 3 5.4 3 9 .7 5-.4 7.9-2.3 10.4zm-19.3-69.2h10.8c3 0 5.4.6 7.2 3 1.8 1.8 2.4 4.8 2.4 8.5s-.6 6.6-2.4 9c-1.8 1.8-4.2 3-6.6 3h-10.8V1078h-.6zm34.9 34.3c3.6-3.6 10.2-12 10.2-22.9 0-12.7-4.8-20.5-8.5-24.7-6.6-7.2-15.6-10.8-25.9-10.8h-33.2c-1.2 0-1.8 1.2-1.8 1.8v117.4c0 1.2 1.2 1.8 1.8 1.8h35.1c10.8 0 21-4.2 27.7-12.7 3.6-4.8 7.9-12.7 7.9-24.7-1.2-14.4-10.2-22.9-13.3-25.2zM258.9 1053.3h-21c-1.2 0-1.8.6-1.8 1.8v83.1c0 4.2-1.2 7.2-3 9.6-1.8 2.4-4.2 3-7.2 3-2.9 0-5.4-1.2-7.2-3-1.8-2.4-3-5.4-3-9.6v-83.1c0-1.2-1.2-1.8-1.8-1.8h-21.1c-1.2 0-1.8.6-1.8 1.8v83.7c0 10.8 2.4 21 9 27.7 6.6 6.6 15.6 10.2 25.9 10.2 10.8 0 19.9-3.6 25.9-10.2 6.6-6.6 9-16.2 9-27.7v-83.7c.6-.6-.6-1.8-1.9-1.8"></path>
				</svg>
			</a>`;
		}

		L.marker(this.position)
		.bindPopup(
		`
			${
				this.website
				?
				`<a href=${ this.website }
					rel="noopener noreferrer"
					target="_blank"
				>
					<h2>${ this.name }</h2>
				</a>`
				:
				`<h2>${ this.name }</h2>`
			}
			<p><b>Type:</b> ${ this.type }</p>
			<p><b>Address:</b> ${ this.address }</p>
			<p><b>Cuisine:</b> ${ this.cuisineType }</p>
			<p><b>Specialty:</b> ${ this.specialty }</p>
			${
				this.phone
				?
				`<p><b>Phone #:</b>
					<a href=tel:${ this.phone }
					>
					${ this.phone }
					</a>
				</p>`
				:
				``
			}
			${
				this.delivers
				?
				`<p><b>Delivers:</b> ${ this.delivers }
				<br />
				${ this.doorDashLink ? doorDashIcon : '' } ${ this.grubHubLink ? grubHubIcon : '' }</p>`
				:
				`<p><b>Delivers:</b> ${ this.delivers }</p>`
			}
		`
		)
		.openPopup()
		.addTo(markers)
	}

	checkIfOpen(){
		let currentTime = new Date().getTime();

		console.log(currentTime);
	}
}

class CollegeTeam extends Location {
	constructor(
		name,
		position,
		address,
		image,
		sport,
		conference,
		stadiumName,
		mascot
	){
		super(
			name,
			position,
			address,
			image
		);
		this.type = 'College Team';
		this.sport = sport;
		this.league = 'NCAA';
		this.conference = conference;
		this.stadiumName = stadiumName;
		this.mascot = mascot;
	}

	buildModal(){
		L.marker(this.position)
		.bindPopup(
		`
			<h2>${ this.stadiumName }</h2>
			<h4>${ this.name } ${ this.mascot }<h4>
			<p><b>Sport:</b> ${ this.sport }</p>
			<p><b>League:</b> ${ this.league }</p>
			<p><b>Conference:</b> ${ this.conference }</p>
			<p><b>Type:</b> ${ this.type }</p>
			<p><b>Address:</b> ${ this.address }</p>
		`
		)
		.openPopup()
		.addTo(markers)
	}
}

class SportsTeam extends CollegeTeam {
	constructor(
		name,
		position,
		address,
		image,
		sport,
		league,
		stadiumName,
		currentStadium,
		owner
	){
		super(
			name,
			position,
			address,
			image,
			sport,
			league,
			stadiumName
		);
		this.type = 'Sports Team';
		this.sport = sport;
		this.league = league;
		this.stadiumName = stadiumName;
		this.currentStadium = currentStadium ? 'Current Stadium' : 'Former Stadium';
		this.owner = owner;
	}

	buildModal(){
		L.marker(this.position)
		.bindPopup(
		`
			<h2>${ this.stadiumName }</h2>
			<h4>${ this.name }<h4>
			<p><b>Sport:</b> ${ this.sport }</p>
			<p><b>League:</b> ${ this.league }</p>
			<p><b>Current Stadium:</b> ${ this.currentStadium }</p>
			<p><b>Type:</b> ${ this.type }</p>
			<p><b>Address:</b> ${ this.address }</p>
			<p><b>Owner:</b> ${ this.owner }</p>
		`
		)
		.openPopup()
		.addTo(markers)
	}
}

// Built off Tania Rascia's code.
// https://codepen.io/taniarascia/pen/brRaVE

// Map Setup
const myMap = L.map('map');

// Load basemap
const myBasemap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Add basemap to map id
myBasemap.addTo(myMap);

let markers = L.layerGroup().addTo(myMap);
// Add custom Icons for different location types
// https://leafletjs.com/examples/custom-icons/

var neighborhoodIcon = L.icon({
	iconUrl: 'img/icons/leaf-red.png',
	shadowUrl: 'img/icons/leaf-shadow.png',

	iconSize:     [38, 95], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var cityIcon = L.icon({
	iconUrl: 'img/icons/leaf-green.png',
	shadowUrl: 'img/icons/leaf-shadow.png',

	iconSize:     [38, 95], // size of the icon
	shadowSize:   [50, 64], // size of the shadow
	iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62],  // the same for the shadow
	popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var parkIcon = L.icon({
	iconUrl: 'img/icons/park_pin.png',
	shadowUrl: null,

	iconSize:     [50, 55], // size of the icon
	shadowSize:   [0, 0], // size of the shadow
	iconAnchor:   [50, 50], // point of the icon which will correspond to marker's location
	shadowAnchor: [0, 0],  // the same for the shadow
	popupAnchor:  [-25, -55] // point from which the popup should open relative to the iconAnchor
});

var beachIcon = L.icon({
	iconUrl: 'img/icons/beach_chair_pin.png',
	shadowUrl: null,

	iconSize:     [50, 55], // size of the icon
	shadowSize:   [0, 0], // size of the shadow
	iconAnchor:   [50, 50], // point of the icon which will correspond to marker's location
	shadowAnchor: [0, 0],  // the same for the shadow
	popupAnchor:  [-25, -55] // point from which the popup should open relative to the iconAnchor
});

// Set view of the map
setMapLocation();

// TODO: Make Location selectable

// Hardcode Detroit
function setMapLocation(latLong, cityName, mapZoom){
	myMap.setView([42.33143, -83.04575], mapZoom = 12);
	setCityName('Detroit');
}

// Chi
// myMap.setView([41.939948, -87.650673], 12);

function setCityName(cityName){
	setPageTitle(cityName);
	setMapTitle(cityName);
}

function setPageTitle(cityName){
	document.title = `Mappr - ${ cityName }`;
}

function setMapTitle(cityName){
	document.querySelector('.map-title').innerHTML = `Map of ${ cityName }`;
}

let allLocations = [];

let colleges = [];

michiganColleges.map((college, index) => {
	colleges[index] = new College(
		college.name,
		college.position,
		college.address,
		college.image,
		college.type,
		college.mascot,
		college.enrollment
	);

	colleges[index].buildModal();
	allLocations.push(colleges[index]);
});

let locations = [];

michiganLocations.map((location, index) => {
	locations[index] = new Location(
		location.name,
		location.position,
		location.address,
		location.image,
		location.type
	);

	locations[index].buildModal();
	allLocations.push(locations[index]);
});

let parks = [];

michiganParks.map((park, index) => {

	parks[index] = new Park(
		park.name,
		park.position,
		park.address,
		park.image,
		park.type,
		park.hours
	);

	parks[index].buildModal();
	allLocations.push(parks[index]);
});

let beaches = [];

michiganBeaches.map((beach, index) => {

	beaches[index] = new Beach(
		beach.name,
		beach.position,
		beach.address,
		beach.image,
		beach.type,
		beach.hours
	);

	beaches[index].buildModal();
	allLocations.push(beaches[index]);
});


let restaurants = [];

detroitRestaurants.map((restaurant, index) => {

	restaurants[index] = new Restaurant(
		restaurant.name,
		restaurant.position,
		restaurant.address,
		restaurant.image,
		restaurant.cuisineType,
		restaurant.specialty,
		restaurant.favDish,
		restaurant.delivers,
		restaurant.doorDashLink,
		restaurant.grubHubLink,
		restaurant.hours,
		restaurant.phone,
		restaurant.website
	);

	restaurants[index].buildModal();

	allLocations.push(restaurants[index]);
});

let sportsTeams = [];

detroitSportsTeams.map((team, index) => {
	sportsTeams[index] = new SportsTeam(
		team.name,
		team.position,
		team.address,
		team.image,
		team.sport,
		team.league,
		team.stadiumName,
		team.currentStadium,
		team.owner
	);

	sportsTeams[index].buildModal();
	allLocations.push(sportsTeams[index]);
});

let collegeTeams = [];

michiganCollegeTeams.map((team, index) => {

	collegeTeams[index] = new CollegeTeam(
		team.name,
		team.position,
		team.address,
		team.image,
		team.sport,
		team.conference,
		team.stadiumName,
		team.mascot
	);

	collegeTeams[index].buildModal();
	allLocations.push(collegeTeams[index]);
});

let coffeeShops = [];

detroitCoffee.map((coffee, index) => {

	coffeeShops[index] = new CoffeeShop(
		coffee.name,
		coffee.position,
		coffee.address,
		coffee.image,
		coffee.hours,
		coffee.phone,
		coffee.website,
	);

	coffeeShops[index].buildModal();
	allLocations.push(coffeeShops[index]);
});

const filters = document.querySelectorAll('.filter');

filters.forEach(function(filter){
	filter.addEventListener('click', setFilter);
});

function setFilter(){
	let filteredType = this.getAttribute('data-filter');

	removeFilteredActive();

	this.classList.add('active');

	markers.clearLayers();

	allLocations.filter(function(item){
		if (item.type === 'College Team'){
			item.type = 'Sports Team'
		}

		if (item.type === filteredType){
			item.buildModal();
		}
	});
}

function removeFilteredActive(){
	filters.forEach(function(filter){
		filter.classList.remove('active');
	});
}

// Ensure filter sub nav appears properly
const actions = document.querySelector('.actions'),
filterList = document.querySelector('.filter-list');

actions.addEventListener('mouseenter', addActive);

function addActive(){
	setTimeout(function() {
		filterList.classList.add('active');
	}, 250);
}

actions.addEventListener('mouseleave', removeActive);

function removeActive(){
	setTimeout(function() {
		filterList.classList.remove('active');
	}, 250);
}

// Legend Filter
const legendFilter = document.querySelectorAll('.legend p');

legendFilter.forEach(function(filter){
	filter.addEventListener('click', legendFilterFunct);
});

function legendFilterFunct(){
	let filteredType = this.getAttribute('data-filter');

	markers.clearLayers();

	allLocations.filter(function(item){
		if (item.type === 'College Team'){
			item.type = 'Sports Team'
		}

		if (item.type === filteredType){
			item.buildModal();
		}
	});

	legend.classList.toggle('active');
}

// Legend Logic
const legendOpen = document.querySelector('.legend-open');
const legendClose = document.querySelector('.legend-close');
const legend = document.querySelector('.legend');

legendOpen.addEventListener('click', toggleLegendActive);
legendClose.addEventListener('click', toggleLegendActive);

function toggleLegendActive(){
	legendOpen.classList.toggle('active');
	legendClose.classList.toggle('active');
	legend.classList.toggle('active');
}

// listORestaurants.map(restaurant => {
// 	L.marker([restaurant.lat, restaurant.long])
// 	.bindPopup(
// 	`
// 		<h2>${ restaurant.name }</h2>
// 		<p><b>Neighborhood:</b> ${ restaurant.hood }</p>
// 		<p><b>Ambiance:</b> ${ restaurant.ambiance }</p>
// 		<p><b>Flavor:</b> ${ restaurant.flavor }</p>
// 		<p><b>Comments:</b>  ${ restaurant.comment }</p>
// 	`
// 	)
// 	.openPopup()
// 	.addTo(myMap)
// })

// Chi restaurants
// const elMeson = L.marker([42.002439, -87.672339])
// 	.bindPopup(
// 		`
// 		<h2>El Meson</h2>
// 		<p><b>Neighborhood:</b> Rogers Park</p>
// 		<p><b>Ambiance:</b> Great!</p>
// 		<p><b>Flavor:</b> Great!</p>
// 		<p><b>Comments:</b> Great!</p>
// 		`
// 	)
// 	.openPopup()
// 	.addTo(myMap)
//
// const wormhole = L.marker([41.908415, -87.674605])
// 	.bindPopup(
// 		`
// 		<h2>Wormhole</h2>
// 		<p><b>Neighborhood:</b> Wicker Park</p>
// 		<p><b>Ambiance:</b> Great!</p>
// 		<p><b>Flavor:</b> Great!</p>
// 		<p><b>Comments:</b> Great!</p>
// 		`
// 	)
// 	.openPopup()
// 	.addTo(myMap)

// Chi Restaurants
// let listORestaurants = [
// 	{
// 		name: "Portillo's Hot Dogs",
// 		lat: 41.9974639,
// 		long: -87.6774365,
// 		hood: 'random place',
// 		ambiance: 'Gloomy',
// 		flavor: 'Tasted like boiled hot dog water...?',
// 		comment: 'Ummmmm....? Like, I guess it was like, okay, y\'know'
// 	},
// 	{
// 		name: "Giordanos",
// 		lat: 42.0655706,
// 		long: -87.5677437,
// 		hood: 'random place',
// 		ambiance: 'Gloomy',
// 		flavor: "Crusts so thick you'll scream",
// 		comment: 'Ummmmm....? Like, I guess it was like, okay, y\'know'
// 	},
// 	{
// 		name: 'Chez Joel Bistro',
// 		lat: 41.86961,
// 		long: -87.649603,
// 		hood: 'random place',
// 		ambiance: 'Gloomy',
// 		flavor: "Crusts so thick you'll scream",
// 		comment: 'Ummmmm....? Like, I guess it was like, okay, y\'know'
// 	},
// 	{
// 		name: "Sun Wah BBQ",
// 		lat: 41.9747779,
// 		long: -87.6557918,
// 		hood: 'random place',
// 		ambiance: 'Gloomy',
// 		flavor: "Crusts so thick you'll scream",
// 		comment: 'Ummmmm....? Like, I guess it was like, okay, y\'know'
// 	}
// ]
