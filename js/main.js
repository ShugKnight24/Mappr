// Map Setup
const myMap = L.map('map');

// Load basemap
const myBasemap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Add basemap to map id
myBasemap.addTo(myMap);

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

detroitRestaurants = [
	{
		name: 'Pupuseria Y Restaurante Salvadoreno',
		position: [42.32495, -83.11628],
		address: '3149 Livernois, Detroit, MI 48210',
		image: 'Link to image',
		cuisineType: 'Salvadoran',
		specialty: 'Pupusas',
		phone: '(313) 899-4020',
	},
	{
		name: 'Mudgie\'s Deli and Bar',
		position: [42.32923, -83.06178],
		address: '1413 Brooklyn St, Detroit, MI 48226',
		image: 'Link to image',
		cuisineType: '',
		specialty: 'Deli Sandwiches',
		favDish: 'The Wreck',
		phone: '(313) 961-2000',
	},
	{
		name: 'Shangri-La',
		position: [42.71168, -82.45753],
		address: '4710 Cass Ave, Detroit, MI 48201',
		image: 'Link to image',
		cuisineType: 'Chinese',
		specialty: 'Chinese',
		favDish: '',
		phone: '(313) 974-7669',
	},
	{
		name: 'Rose\'s Fine Food',
		position: [42.36423, -82.97710],
		address: '10551 E Jefferson Ave, Detroit, MI 48214',
		image: 'Link to image',
		cuisineType: 'American',
		specialty: 'Breakfast',
		favDish: '',
		phone: '(313) 822-2729',
	},
	{
		name: 'Mabel Gray',
		position: [42.46783, -83.10427],
		address: '23825 John R Rd, Hazel Park, MI 48030',
		image: 'Link to image',
		cuisineType: '',
		specialty: '',
		favDish: '',
		phone: '(248) 398-4300',
	},
	{
		name: 'Loui\'s Pizza',
		position: [42.46406, -83.08420],
		address: '23141 Dequindre Rd, Hazel Park, MI 48030',
		image: 'Link to image',
		cuisineType: '',
		specialty: 'Pizza',
		favDish: 'BBQ Chicken Deep Dish',
		phone: '(248) 547-1711',
	}
];

class Location {
	constructor(
		name,
		position,
		address,
		image
	){
		this.name = name;
		this.position = position;
		this.address = address;
		this.image = image;
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
		hours,
		phone,
		review
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
		this.delivers = delivers;
		this.hours = hours;
		this.phone = phone;
		this.review = review;
	}
}

detroitRestaurants.map(restaurant => {
	let res = new Restaurant(
		restaurant.name,
		restaurant.position,
		restaurant.address,
		restaurant.image,
		restaurant.cuisineType,
		restaurant.specialty,
		restaurant.favDish,
		restaurant.delivers,
		restaurant.hours,
		restaurant.phone,
		restaurant.review
	);

	L.marker(res.position)
	.bindPopup(
	`
		<h2>${ res.name }</h2>
		<p><b>Type:</b> ${ res.type }</p>
		<p><b>Address:</b> ${ res.address }</p>
		<p><b>Cuisine:</b> ${ res.cuisineType }</p>
		<p><b>Specialty:</b> ${ res.specialty }</p>
	`
	)
	.openPopup()
	.addTo(myMap)
})

class CoffeeShop extends Location {
	constructor(){
		super();
		this.type = 'Coffee Shop';
		this.specialty = specialty;
		this.hours = hours;
	}
}

class Park extends Location {
	constructor(){
		super();
		this.type = 'Park';
		this.hours = hours;
	}
}

class Museum extends Location {
	constructor(){
		super();
		this.type = 'Museum';
		this.hours = hours;
	}
}

// 2. Can you "subclass" the Location classes as Restaurants, Coffeshops, Parks, or other interesting locations?
// 3. Can you use a .filter() method to get only some of the Locations from the array at a time?

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

 // SET UP TWO SAMPLE RESTUARANTS

// Below with a * is a multiline comment

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
