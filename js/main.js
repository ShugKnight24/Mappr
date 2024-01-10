'use strict';

// Classes
// TODO: Refactor to abstract use of createPopupContent() pattern?
// at that point most of the classes would be pretty much the same aside from subtle differences
// where a more generic class might be better... something to think on
class Place {
	constructor(position) {
		this.position = position;
	}

	createMarker(icon, popupContent) {
		L.marker(this.position, { icon: icon })
			.bindPopup(`<h2>${popupContent}</h2>`)
			.openPopup()
			.addTo(markers);
	}
}

class Location extends Place {
	constructor(name, position, address, image, type) {
		super(position);
		this.name = name;
		this.address = address;
		this.image = image;
		this.type = type;
	}

	createDowntownMarker() {
		if (this.name === 'Downtown' || this.name === 'Southwest (Mexicantown)'){
			this.createMarker(neighborhoodIcon, `${ this.name } Detroit`);
			return true;
		}
		return false;
	}

	buildModal(){
		const isDowntown = this.createDowntownMarker();
		if (!isDowntown) {
			const iconType = this.type === 'Neighborhood' ? neighborhoodIcon : cityIcon;
			this.createMarker(iconType, `${this.type} of ${this.name}`);
		}
	}
}

class City extends Place {
	constructor(city, state, position){
		super(position);
		this.city = city;
		this.state = state;
		this.type = 'City';
	}

	buildModal(){
		this.createMarker(cityIcon, `${this.type} of ${this.city}, ${this.state}`);
	}
}

class CoffeeShop extends Location {
	constructor(name, position, address, image, hours, phone, website){
		super(name, position, address, image);
		this.type = 'Coffee Shop';
		this.hours = hours;
		this.phone = phone;
		this.website = website;
	}

	createPopupContent() {
		const name = this.website
			? `<a href=${ this.website } rel="noopener noreferrer" target="_blank"><h2>${ this.name }</h2></a>`
			: `<h2>${ this.name }</h2>`;
		const phone = this.phone
			? `<p><b>Phone #:</b><a href=tel:${ this.phone }>${ this.phone }</a></p>`
			: '';
		return `
			${name}
			<p><b>Type:</b> ${ this.type }</p>
			<p><b>Address:</b> ${ this.address }</p>
			${phone}
		`;
	}

	buildModal() {
		const popupContent = this.createPopupContent();
		this.createMarker(coffeeIcon, popupContent);
	}
}

class College extends Location {
	constructor(name, position, address, image, mascot, enrollment, socials, facebook, twitter, instagram){
		super(name, position, address, image);
		this.type = 'College';
		this.mascot = mascot;
		this.enrollment = enrollment;
		this.socials = socials;
		this.facebook = facebook;
		this.twitter = twitter;
		this.instagram = instagram;
	}

	createPopupContent() {
		// TODO: Further refactor to depend on each individual social media link
		const socialContent = this.socials ? `
			<div class="social-links">
				<a href=${ this.facebook } rel="noopener noreferrer" target="_blank">${ fbIcon }</a>
				<a href=${ this.twitter } rel="noopener noreferrer" target="_blank">${ twitterIcon }</a>
				<a href=${ this.instagram } rel="noopener noreferrer" target="_blank">${ instagramIcon }${ instagramGradientIcon }</a>
			</div>
		` : '';
		return (`
			<h2>${ this.name }</h2>
			<p><b>Address:</b> ${ this.address }</p>
			<p><b>Mascot:</b> ${ this.mascot }</p>
			<p><b>Type:</b> ${ this.type }</p>
			<p><b>Enrollment #'s:</b> ${ this.enrollment }</p>
			${socialContent}
		`);
	}

	buildModal() {
		const popupContent = this.createPopupContent();
		this.createMarker(cityIcon, popupContent);
	}
}

// Museum, Park, Beach pretty much the same - create a more generic class?
class Museum extends Location {
	constructor(name, position, address, image, hours){
		super(name, position, address, image);
		this.type = 'Museum';
		this.hours = hours;
	}
}

class Park extends Location {
	constructor(name, position, address, image, hours){
		super(name, position, address, image);
		this.type = 'Park';
		this.hours = hours;
	}

	buildModal() {
		const popupContent = `<h2>${ this.name }</h2>`;
		this.createMarker(parkIcon, popupContent);
	}
}

class Beach extends Location {
	constructor(name, position, address, image, hours){
		super(name, position, address, image);
		this.type = 'Beach';
		this.hours = hours;
	}

	buildModal() {
		const popupContent = `<h2>${ this.name }</h2>`;
		this.createMarker(beachIcon, popupContent);
	}
}

// TODO: Still yet to be refactored
// Want to make this more like the other classes yet it would be messy
// Want to make this more unique and elegant
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
		website,
		socials,
		facebook,
		twitter,
		instagram,
		yelp
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
		this.socials = socials;
		this.facebook = facebook;
		this.twitter = twitter;
		this.instagram = instagram;
		this.yelp = yelp;
	}

	buildDoordash(){
		let doorDashIcon;

		// This is dumb - make this a function that returns an icon
		if (this.doorDashLink){
			return doorDashIcon = `<a class="doordash-link" href=${ this.doorDashLink }
			rel="noopener noreferrer"
			target="_blank">
				${ doorDashSVG }
			</a>`;
		}
	}

	buildGrubHub(){
		let grubHubIcon;

		// This is dumb - make this a function that returns an icon
		if (this.grubHubLink){
			return grubHubIcon = `<a class="grubhub-link" href=${ this.grubHubLink }
			rel="noopener noreferrer"
			target="_blank">
				${ grubHubSVG }
			</a>`;
		} else {
			return '';
		}
	}

	buildFacebook(){
		if (this.facebook){
			return `<a href=${ this.facebook } rel="noopener noreferrer"
			target="_blank">
				${ fbIcon }
			</a>`;
		} else {
			return '';
		}
	}

	buildInstagram(){
		if (this.instagram){
			return `<a href=${ this.instagram } rel="noopener noreferrer"
			target="_blank">
				${ instagramIcon }
				${ instagramGradientIcon }
			</a>`;
		} else {
			return '';
		}
	}

	buildTwitter(){
		if (this.twitter){
			return `<a href=${ this.twitter } rel="noopener noreferrer"
			target="_blank">
				${ twitterIcon }
			</a>`;
		} else {
			return '';
		}
	}

	buildYelp(){
		if (this.yelp){
			return `<a href=${ this.yelp } rel="noopener noreferrer"
			target="_blank">
				${ yelpIcon }
			</a>`
		}
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
				this.socials
				?
				`<div class="social-links">
					${ this.buildFacebook() }
					${ this.buildTwitter() }
					${ this.buildInstagram() }
					${ this.buildYelp() }
				</div>`
				:
				``
			}
			${
				this.delivers
				?
				`<p><b>Delivers:</b> ${ this.delivers }
				<br />
				${ this.doorDashLink ? this.buildDoordash() : '' } ${ this.grubHubLink ? this.buildGrubHub() : '' }</p>`
				:
				`<p><b>Delivers:</b> ${ this.delivers }</p>`
			}
		`
		)
		.openPopup()
		.addTo(markers)
	}

	// TODO: Properly implement this
	checkIfOpen(){
		const currentTime = new Date().getTime();

		console.log(currentTime);
	}
}

// TODO: Add icon based off of sport
// TODO: Further refactor to make similar to above changes using createPopupContent() pattern
// TODO: Not a fan of the current  collegeTeam / sportsTeam split - find a better way to do this
// generic team class?
class CollegeTeam extends Location {
	constructor(name, position, address, image, sport, conference, stadiumName, mascot){
		super(name, position, address, image);
		this.type = 'College Team';
		this.sport = sport;
		this.league = 'NCAA';
		this.conference = conference;
		this.stadiumName = stadiumName;
		this.mascot = mascot;
	}

	buildModal(){
		L.marker(this.position)
		.bindPopup(`
			<h2>${ this.stadiumName }</h2>
			<h4>${ this.name } ${ this.mascot }</h4>
			<p><b>Sport:</b> ${ this.sport }</p>
			<p><b>League:</b> ${ this.league }</p>
			<p><b>Conference:</b> ${ this.conference }</p>
			<p><b>Type:</b> ${ this.type }</p>
			<p><b>Address:</b> ${ this.address }</p>
		`)
		.openPopup()
		.addTo(markers)
	}
}

class SportsTeam extends CollegeTeam {
	constructor(name, position, address, image, sport, league, stadiumName, currentStadium, owner){
		super(name, position, address, image, sport, league, stadiumName
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
		.bindPopup(`
			<h2>${ this.stadiumName }</h2>
			<h4>${ this.name }<h4>
			<p><b>Sport:</b> ${ this.sport }</p>
			<p><b>League:</b> ${ this.league }</p>
			<p><b>Current Stadium:</b> ${ this.currentStadium }</p>
			<p><b>Type:</b> ${ this.type }</p>
			<p><b>Address:</b> ${ this.address }</p>
			<p><b>Owner:</b> ${ this.owner }</p>
		`)
		.openPopup()
		.addTo(markers)
	}
}

// Built off Tania Rascia's code.
// https://codepen.io/taniarascia/pen/brRaVE

// Map Setup
const myMap = L.map('map');
// Remove Leaflet Attribution - https://groups.google.com/g/leaflet-js/c/fA6M7fbchOs/m/JTNVhqdc7JcJ
myMap.attributionControl.setPrefix('');

// Load basemap
const myBasemap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	noWrap: true
});

// Add basemap to map id
myBasemap.addTo(myMap);

const markers = L.layerGroup().addTo(myMap);



// Set view of the map
setMapLocation();

// TODO: Make Location selectable

// Hardcode Detroit
// TODO: Figure out how to make this dynamic
// perhaps update the titles based off of the city selected, or perhaps the nearest city?
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

const allLocations = [];

const colleges = [];

michiganColleges.map(
	({
		name,
		position,
		address,
		image,
		mascot,
		enrollment,
		socials,
		facebook,
		twitter,
		instagram
	}, index) => {
	colleges[index] = new College(
		name,
		position,
		address,
		image,
		mascot,
		enrollment,
		socials,
		facebook,
		twitter,
		instagram
	);

	colleges[index].buildModal();
	allLocations.push(colleges[index]);
});

const locations = [];

michiganLocations.map(
	({
		name,
		position,
		address,
		image,
		type
	}, index) => {
	locations[index] = new Location(
		name,
		position,
		address,
		image,
		type
	);

	locations[index].buildModal();
	allLocations.push(locations[index]);
});

const parks = [];

michiganParks.map(
	({
		name,
		position,
		address,
		image,
		hours
	}, index) => {
	parks[index] = new Park(
		name,
		position,
		address,
		image,
		hours
	);

	parks[index].buildModal();
	allLocations.push(parks[index]);
});

const beaches = [];

michiganBeaches.map(
	({
		name,
		position,
		address,
		image,
		type,
		hours
	}, index) => {
	beaches[index] = new Beach(
		name,
		position,
		address,
		image,
		type,
		hours
	);

	beaches[index].buildModal();
	allLocations.push(beaches[index]);
});

const restaurants = [];

detroitRestaurants.map(
	({
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
		website,
		socials,
		facebook,
		twitter,
		instagram,
		yelp
	}, index) => {
	restaurants[index] = new Restaurant(
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
		website,
		socials,
		facebook,
		twitter,
		instagram,
		yelp
	);

	restaurants[index].buildModal();

	allLocations.push(restaurants[index]);
});

const sportsTeams = [];

detroitSportsTeams.map(
	({
		name,
		position,
		address,
		image,
		sport,
		league,
		stadiumName,
		currentStadium,
		owner
	}, index) => {
	sportsTeams[index] = new SportsTeam(
		name,
		position,
		address,
		image,
		sport,
		league,
		stadiumName,
		currentStadium,
		owner
	);

	sportsTeams[index].buildModal();
	allLocations.push(sportsTeams[index]);
});

const collegeTeams = [];

michiganCollegeTeams.map(
	({
		name,
		position,
		address,
		image,
		sport,
		conference,
		stadiumName,
		mascot
	}, index) => {
	collegeTeams[index] = new CollegeTeam(
		name,
		position,
		address,
		image,
		sport,
		conference,
		stadiumName,
		mascot
	);

	collegeTeams[index].buildModal();
	allLocations.push(collegeTeams[index]);
});

const coffeeShops = [];

detroitCoffee.map(
	({
		name,
		position,
		address,
		image,
		hours,
		phone,
		website,
	}, index) => {
	coffeeShops[index] = new CoffeeShop(
		name,
		position,
		address,
		image,
		hours,
		phone,
		website
	);

	coffeeShops[index].buildModal();
	allLocations.push(coffeeShops[index]);
});

// allow filtering by multiple types
const filterList = document.querySelector('.filter-list ul');

filterItems.forEach(item => {
	filterList.innerHTML += `
		<li class="filter" data-filter="${item.filter}">${item.text}</li>
	`;
});

const filters = document.querySelectorAll('.filter-list ul li');

filters.forEach(function(filter){
	filter.addEventListener('click', setFilter);
});

// TODO: Refactor same as legend filter now
// by default 'all' should be active
function setFilter(){
	const filteredType = this.getAttribute('data-filter');

	removeFilteredActive();

	this.classList.add('active');

	markers.clearLayers();

	if (filteredType === 'All') {
		allLocations.forEach(item => item.buildModal());
	} else {
		allLocations.filter(function(item){
			if (item.type === 'College Team'){
				item.type = 'Sports Team'
			}

			if (item.type === filteredType){
				item.buildModal();
			}
		});
	}
}

function removeFilteredActive(){
	filters.forEach(function(filter){
		filter.classList.remove('active');
	});
}

// Ensure filter sub nav appears properly
const actions = document.querySelector('.actions');
const filterParent = document.querySelector('.filter-list');

actions.addEventListener('mouseenter', addActive);

function addActive(){
	setTimeout(function() {
		filterParent.classList.add('active');
	}, 250);
}

actions.addEventListener('mouseleave', removeActive);

function removeActive(){
	setTimeout(function() {
		filterParent.classList.remove('active');
	}, 250);
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

// TODO: Add an active class to the legend filter
filterItems.forEach(item => {
	legend.innerHTML += `
		<p data-filter="${item.filter}">
			<span>
				<img
					src="${item.icon}"
					alt="Click to filter by ${item.alt}"
					role="button"
				>
			</span>
			<span> - ${item.text}</span>
		</p>
	`;
});

// Legend Filter
const legendFilter = document.querySelectorAll('.legend p');

legendFilter.forEach(function(filter){
	filter.addEventListener('click', filterByLegend);
});

function filterByLegend(){
	const filteredType = this.getAttribute('data-filter');

	markers.clearLayers();

	if (filteredType === 'All') {
		allLocations.forEach(item => item.buildModal());
	} else {
		allLocations.filter(function(item){
			if (item.type === 'College Team'){
				item.type = 'Sports Team'
			}

			if (item.type === filteredType){
				item.buildModal();
			}
		});
	}

	toggleLegendActive();
}

/*
	Build Cities from external JSON
	Props to Miserlou - Rich Jones - https://github.com/Miserlou
	For building the list
*/ 
const externalCities = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const cityList = [];

fetch(externalCities)
	.then(res => res.json())
	.then(data => {
		cities.push(...data);
		buildCities(cities)
	})

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
	let currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function buildCities(cityArray){
	shuffle(cityArray).slice(0, 125).map(({
		city,
		state,
		latitude,
		longitude
	}, index) => {
		cityList[index] = new City(
			city,
			state,
			[latitude, longitude]
		)
		cityList[index].buildModal()
		allLocations.push(cityList[index])
	})
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
