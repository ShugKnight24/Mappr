// Data for Detroit Points of Interest

let michiganLocations = [
	{
		name: 'Cass Corridor',
		position: [42.349334, -83.062874],
		address: '',
		image: 'Link to image',
		type: 'Neighborhood'
	},
	{
		name: 'Corktown',
		position: [42.331393, -83.066941],
		address: '',
		image: 'Link to image',
		type: 'Neighborhood'
	},
	{
		name: 'Downtown',
		position: [42.329796, -83.045559],
		address: '',
		image: 'Link to image',
		type: 'Neighborhood'
	},
	{
		name: 'Eastern Market',
		position: [42.3496135, -83.0439744],
		address: '',
		image: 'Link to image',
		type: 'Neighborhood'
	},
	{
		name: 'Greektown',
		position: [42.334286, -83.042347],
		address: '',
		image: 'Link to image',
		type: 'Neighborhood'
	},
	{
		name: 'Indian Village',
		position: [42.361625, -82.996604],
		address: '',
		image: 'Link to image',
		type: 'Neighborhood'
	},
	{
		name: 'Midtown',
		position: [42.351427, -83.060863],
		address: '',
		image: 'Link to image',
		type: 'Neighborhood'
	},
	{
		name: 'New Center',
		position: [42.37052, -83.073727],
		address: '',
		image: 'Link to image',
		type: 'Neighborhood'
	},
	{
		name: 'North End',
		position: [42.379164, -83.074127],
		address: '',
		image: 'Link to image',
		type: 'Neighborhood'
	},
	{
		name: 'Southwest (Mexicantown)',
		position: [42.321248, -83.086419],
		address: '',
		image: 'Link to image',
		type: 'Neighborhood'
	},
	{
		name: 'Hazel Park',
		position: [42.458927, -83.103676],
		address: '',
		image: 'Link to image',
		type: 'City'
	},
	{
		name: 'Ferndale',
		position: [42.459377, -83.134127],
		address: '',
		image: 'Link to image',
		type: 'City'
	},
	{
		name: 'Southfield',
		position: [42.471123, -83.220351],
		address: '',
		image: 'Link to image',
		type: 'City'
	},
	{
		name: 'Berkley',
		position: [42.501758, -83.182586],
		address: '',
		image: 'Link to image',
		type: 'City'
	},
	{
		name: 'Rochester',
		position: [42.679332, -83.133732],
		address: '',
		image: 'Link to image',
		type: 'City'
	},
	{
		name: 'Ann Arbor',
		position: [42.267046, -83.731947],
		address: '',
		image: 'Link to image',
		type: 'City'
	},
	{
		name: 'Lansing',
		position: [42.73352, -84.554355],
		address: '',
		image: 'Link to image',
		type: 'City'
	}
]

let michiganParks = [
	{
		name: 'Belle Isle State Park',
		position: [42.342052, -82.970467],
		address: '',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Bedford Woods',
		position: [42.50778, -83.217114],
		address: '',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Beverly Park',
		position: [42.522666, -83.231124],
		address: '',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Bloomer Park',
		position: [42.676198, -83.106035],
		address: '',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Carpenter Lake Nature Preserve',
		position: [42.466519, -83.314276],
		address: '',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Inglenook Park',
		position: [42.499692, -83.251946],
		address: '',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Mackinac Island State Park',
		position: [45.864773, -84.625397],
		address: '7029 Huron Rd. Mackinac Island, MI, USA',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Pictured Rocks National Lakeshore',
		position: [46.541424, -86.413463],
		address: 'N8391 Sand Point Rd, Munising, MI 49862',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Porcupine Mountains Wilderness State Park',
		position: [46.765296, -89.791609],
		address: '',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Sleeping Bear Dunes National Lakeshore',
		position: [44.892985, -86.016414],
		address: '',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Saugatuck Dunes State Park',
		position: [42.697079, -86.204067],
		address: '',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Stony Creek Metropark',
		position: [42.733123, -83.073216],
		address: '',
		image: 'Link to image',
		hours: ''
	},
	{
		name: 'Warren Dunes State Park',
		position: [41.920232, -86.589989],
		address: '12032 Red Arrow Hwy, Sawyer, MI',
		image: 'Link to image',
		hours: ''
	}
]
let detroitRestaurants = [
	{
		name: 'Pupuseria Y Restaurante Salvadoreno',
		position: [42.32495, -83.11628],
		address: '3149 Livernois, Detroit, MI 48210',
		image: 'Link to image',
		cuisineType: 'El Salvadoran',
		specialty: 'Pupusas',
		favDish: '',
		delivers: false,
		doorDashLink: false,
		grubHubLink: false,
		hours: {
			0: {
				open: [10,30,00],
				close: [20,00,00]
				}
			,
			1: {
				open: 'closed',
				close: 'closed'
				}
			,
			2: {
				open: [10,30,00],
				close: [20,00,00]
				}
			,
			3: {
				open: [10,30,00],
				close: [20,00,00]
				}
			,
			4: {
				open: [10,30,00],
				close: [20,00,00]
				}
			,
			5: {
				open: [10,30,00],
				close: [20,00,00]
				}
			,
			6: {
				open: [10,30,00],
				close: [20,00,00]
				}
		},
		phone: '(313) 899-4020',
		website: 'https://pupuseriayrestaurantesalvadoreno.negocio.site/'
	},
	{
		name: 'Mudgie\'s Deli and Bar',
		position: [42.329035, -83.061989],
		address: '1413 Brooklyn St, Detroit, MI 48226',
		image: 'Link to image',
		cuisineType: '',
		specialty: 'Deli Sandwiches',
		favDish: 'The Wreck',
		delivers: false,
		doorDashLink: false,
		grubHubLink: false,
		hours: 'Temporarily Closed',
		phone: '(313) 961-2000',
		website: 'http://www.mudgiesdeli.com/wp/'
	},
	{
		name: 'Midtown Shangri-La',
		position: [42.35410, -83.06748],
		address: '4710 Cass Ave, Detroit, MI 48201',
		image: 'Link to image',
		cuisineType: 'Chinese',
		specialty: 'Authentic Cantonese Cuisine',
		favDish: '',
		delivers: true,
		doorDashLink: 'https://www.doordash.com/store/midtown-shangri-la-detroit-228544/en-US',
		grubHubLink: 'https://www.grubhub.com/restaurant/midtown-shangri-la-4710-cass-ave-detroit/1967525',
		hours: {
			0: {
				open: 'closed',
				close: 'closed'
				}
			,
			1: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			2: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			3: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			4: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			5: {
				open: [11,00,00],
				close: [23,00,00]
				}
			,
			6: {
				open: [11,00,00],
				close: [23,00,00]
				}
		},
		phone: '(313) 974-7669',
		website: 'http://www.midtownshangri-la.com/'
	},
	{
		name: 'Rose\'s Fine Food',
		position: [42.36423, -82.97710],
		address: '10551 E Jefferson Ave, Detroit, MI 48214',
		image: 'Link to image',
		cuisineType: 'American',
		specialty: 'Breakfast',
		favDish: '',
		delivers: false,
		doorDashLink: false,
		grubHubLink: false,
		hours: {
			0: {
				open: [11,00,00],
				close: [15,00,00]
				}
			,
			1: {
				open: 'closed',
				close: 'closed'
				}
			,
			2: {
				open: 'closed',
				close: 'closed'
				}
			,
			3: {
				open: [11,00,00],
				close: [18,00,00]
				}
			,
			4: {
				open: [11,00,00],
				close: [18,00,00]
				}
			,
			5: {
				open: [11,00,00],
				close: [18,00,00]
				}
			,
			6: {
				open: [11,00,00],
				close: [15,00,00]
				}
		},
		phone: '(313) 822-2729',
		website: 'https://www.rosesfinefood.com/'
	},
	{
		name: 'Mabel Gray',
		position: [42.46783, -83.10427],
		address: '23825 John R Rd, Hazel Park, MI 48030',
		image: 'Link to image',
		cuisineType: '',
		specialty: '',
		favDish: '',
		delivers: false,
		doorDashLink: false,
		grubHubLink: false,
		hours: {
			0: {
				open: 'closed',
				close: 'closed'
				}
			,
			1: {
				open: 'closed',
				close: 'closed'
				}
			,
			2: {
				open: [17,00,00],
				close: [22,00,00]
				}
			,
			3: {
				open: [17,00,00],
				close: [22,00,00]
				}
			,
			4: {
				open: [17,00,00],
				close: [22,00,00]
				}
			,
			5: {
				open: [17,00,00],
				close: [23,00,00]
				}
			,
			6: {
				open: [16,00,00],
				close: [23,00,00]
				}
		},
		phone: '(248) 398-4300',
		website: 'http://mabelgraykitchen.com/'
	},
	{
		name: 'Loui\'s Pizza',
		position: [42.46406, -83.08420],
		address: '23141 Dequindre Rd, Hazel Park, MI 48030',
		image: 'Link to image',
		cuisineType: '',
		specialty: 'Deep Dish Pizzas',
		favDish: 'Meat Lovers Deep Dish',
		delivers: true,
		doorDashLink: false,
		grubHubLink: false,
		hours: {
			0: {
				open: [12,00,00],
				close: [22,00,00]
				}
			,
			1: {
				open: 'closed',
				close: 'closed'
				}
			,
			2: {
				open: 'closed',
				close: 'closed'
				}
			,
			3: {
				open: 'closed',
				close: 'closed'
				}
			,
			4: {
				open: 'closed',
				close: 'closed'
				}
			,
			5: {
				open: [12,00,00],
				close: [22,00,00]
				}
			,
			6: {
				open: [12,00,00],
				close: [22,00,00]
				}
		},
		phone: '(248) 547-1711',
		website: false
	},
	{
		name: 'Too Ra Loo',
		position: [42.678046, -83.133952],
		address: '139 S Main St, Rochester, MI 48307',
		image: 'Link to image',
		cuisineType: 'Bar Food',
		specialty: 'Thin Crust Pizzas',
		favDish: 'Ancient Grains Salad',
		delivers: false,
		doorDashLink: false,
		grubHubLink: false,
		hours: {
			0: {
				open: [10,00,00],
				close: [22,00,00]
				}
			,
			1: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			2: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			3: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			4: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			5: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			6: {
				open: [11,00,00],
				close: [22,00,00]
				}
		},
		phone: '(248) 453-5291',
		website: 'http://tooraloorochester.com/'
	},
	{
		name: 'Georgio\'s Pizza & Pasta',
		position: [42.677443, -83.13389],
		address: '117 S Main St, Rochester, MI 48307',
		image: 'Link to image',
		cuisineType: 'Italian',
		specialty: 'Pizza',
		favDish: 'Meat Lovers Pizza',
		delivers: true,
		doorDashLink: false,
		grubHubLink: 'https://www.grubhub.com/restaurant/georgios-pizza--pasta-117-s-main-st-rochester/1784015',
		hours: {
			0: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			1: {
				open: [11,00,00],
				close: [21,00,00]
				}
			,
			2: {
				open: [11,00,00],
				close: [21,00,00]
				}
			,
			3: {
				open: [11,00,00],
				close: [21,00,00]
				}
			,
			4: {
				open: [11,00,00],
				close: [21,00,00]
				}
			,
			5: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			6: {
				open: [11,00,00],
				close: [22,00,00]
				}
		},
		phone: '+12486012882',
		website: 'https://www.georgiospizzapasta.com/'
	},
	{
		name: 'Kabin Kruser\'s Oyster Bar',
		position: [42.67965, -83.133493],
		address: '306 S Main St, Rochester, MI 48307',
		image: 'Link to image',
		cuisineType: 'Seafood',
		specialty: 'Fresh Seafood',
		favDish: 'Tom Beard\'s Clam Chowder',
		delivers: false,
		doorDashLink: false,
		grubHubLink: false,
		hours: {
			0: {
				open: [12,00,00],
				close: [20,00,00]
				}
			,
			1: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			2: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			3: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			4: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			5: {
				open: [12,00,00],
				close: [22,00,00]
				}
			,
			6: {
				open: [12,00,00],
				close: [22,00,00]
				}
		},
		phone: '+12486512266',
		website: 'http://kruseandmuerrestaurants.com/'
	},
	{
		name: 'Rochester Chop House & Bar',
		position: [42.679664, -83.133048],
		address: '306 S Main St, Rochester, MI 48307',
		image: 'Link to image',
		cuisineType: 'Steaks',
		specialty: '',
		favDish: 'Delmonico',
		delivers: false,
		doorDashLink: false,
		grubHubLink: false,
		hours: {
			0: {
				open: [12,00,00],
				close: [20,00,00]
				}
			,
			1: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			2: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			3: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			4: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			5: {
				open: [12,00,00],
				close: [22,00,00]
				}
			,
			6: {
				open: [12,00,00],
				close: [22,00,00]
				}
		},
		phone: '+12486512266',
		website: 'http://kruseandmuerrestaurants.com/'
	},
	{
		name: 'O\'Connor\'s Public House',
		position: [42.680224, -83.133469],
		address: '324 S Main St, Rochester, MI 48307',
		image: 'Link to image',
		cuisineType: 'Irish',
		specialty: 'Bangers & Mash',
		favDish: 'Taco Salad',
		delivers: true,
		doorDashLink: false,
		grubHubLink: 'https://www.grubhub.com/restaurant/oconnors-public-house-324-s-main-st-rochester/2358122',
		hours: {
			0: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			1: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			2: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			3: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			4: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			5: {
				open: [11,00,00],
				close: [22,00,00]
				}
			,
			6: {
				open: [11,00,00],
				close: [22,00,00]
				}
		},
		phone: '+12486082537',
		website: 'http://oconnorsrochester.com/home'
	},
	{
		name: 'Sumo Sushi & Seafood',
		position: [42.681385, -83.13352],
		address: '418 N Main St, Rochester, MI 48307',
		image: 'Link to image',
		cuisineType: 'Japanese',
		specialty: 'Sushi',
		favDish: 'Dragon Roll',
		delivers: false,
		doorDashLink: false,
		grubHubLink: false,
		hours: {
			0: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			1: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			2: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			3: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			4: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			5: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			6: {
				open: [12,00,00],
				close: [21,00,00]
				}
		},
		phone: '+12486010104',
		website: 'http://www.sumosushiandseafood.com/'
	},
	{
		name: 'Hibachi House Grill & Bar',
		position: [42.6804067, -83.1342074],
		address: '335 S Main St, Rochester, MI 48307',
		image: 'Link to image',
		cuisineType: 'Japanese',
		specialty: 'Hibachi',
		favDish: 'Everything',
		delivers: false,
		doorDashLink: false,
		grubHubLink: false,
		hours: {
			0: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			1: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			2: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			3: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			4: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			5: {
				open: [12,00,00],
				close: [21,00,00]
				}
			,
			6: {
				open: [12,00,00],
				close: [21,00,00]
				}
		},
		phone: '+12482666055',
		website: 'http://www.hibachihouserochester.com/'
	}
];

let detroitSportsTeams = [
	{
		name: 'Detroit Lions',
		position: [42.339885, -83.045703],
		address: '2000 Brush St, Detroit, MI 48226',
		image: 'Link to image',
		sport: 'Football',
		league: 'NFL',
		stadiumName: 'Ford Field',
		currentStadium: true,
		owner: 'Sheila Ford Hamp'
	},
	{
		name: 'Detroit Lions',
		position: [42.64603, -83.25646],
		address: '1200 Featherstone Rd, Pontiac, MI 48342',
		image: 'Link to image',
		sport: 'Football',
		league: 'NFL',
		stadiumName: 'The Silverdome',
		currentStadium: false,
		owner: 'William Clay Ford'
	},
	{
		name: 'Detroit Pistons',
		position: [42.340965, -83.055182],
		address: '2645 Woodward Ave, Detroit, MI 48201',
		image: 'Link to image',
		sport: 'Basketball',
		league: 'NBA',
		stadiumName: 'Little Caesars Arena',
		currentStadium: true,
		owner: 'Tom Gores'
	},
	{
		name: 'Detroit Pistons',
		position: [42.69852, -83.24474],
		address: '6 Championship Dr, Auburn Hills, MI 48326',
		image: 'Link to image',
		sport: 'Basketball',
		league: 'NBA',
		stadiumName: 'The Palace of Auburn Hills',
		currentStadium: false,
		owner: 'Bill Davidson'
	},
	{
		name: 'Detroit Red Wings',
		position: [42.341171, -83.054849],
		address: '2645 Woodward Ave, Detroit, MI 48201',
		image: 'Link to image',
		sport: 'Hockey',
		league: 'NHL',
		stadiumName: 'Little Caesars Arena',
		currentStadium: true,
		owner: 'Ilitch Holdings'
	},
	{
		name: 'Detroit Red Wings',
		position: [42.325268, -83.052689],
		address: '19 Steve Yzerman Drive, Detroit, MI 48226',
		image: 'Link to image',
		sport: 'Hockey',
		league: 'NHL',
		stadiumName: 'Joe Louis Arena',
		currentStadium: false,
		owner: 'Mike Ilitch'
	},
	{
		name: 'Detroit Tigers',
		position: [42.339271, -83.048893],
		address: '2645 Woodward Ave, Detroit, MI 48201',
		image: 'Link to image',
		sport: 'Baseball',
		league: 'MLB',
		stadiumName: 'Comerica Park',
		currentStadium: true,
		owner: 'Ilitch Holdings'
	},
	{
		name: 'Detroit Tigers',
		position: [42.3311772, -83.0690979],
		address: '1680 Michigan Ave, Detroit, MI 48216',
		image: 'Link to image',
		sport: 'Baseball',
		league: 'MLB',
		stadiumName: 'Tiger Stadium',
		currentStadium: false,
		owner: 'Mike Ilitch'
	}
]

let michiganCollegeTeams = [
	{
		name: 'University of Michigan',
		position: [42.26505, -83.74889],
		address: '333 E Stadium Blvd, Ann Arbor, MI 48109',
		image: 'Link to image',
		sport: 'Basketball',
		conference: 'Big Ten',
		stadiumName: 'Crisler Center',
		mascot: 'Wolverines'
	},
	{
		name: 'University of Michigan',
		position: [42.26584, -83.75088],
		address: '1201 S Main St, Ann Arbor, MI 48104',
		image: 'Link to image',
		sport: 'Football',
		conference: 'Big Ten',
		stadiumName: 'Michigan Stadium - The Big House',
		mascot: 'Wolverines'
	},
	{
		name: 'Michigan State University',
		position: [42.72818, -84.48487],
		address: '534 Birch Rd, East Lansing, MI 48824',
		image: 'Link to image',
		sport: 'Basketball',
		conference: 'Big Ten',
		stadiumName: 'Breslin Center',
		mascot: 'Spartans'
	},
	{
		name: 'Michigan State University',
		position: [42.72818, -84.48487],
		address: '325 W Shaw Ln, East Lansing, MI 48824',
		image: 'Link to image',
		sport: 'Football',
		conference: 'Big Ten',
		stadiumName: 'Spartan Stadium',
		mascot: 'Spartans'
	},
	{
		name: 'Wayne State University',
		position: [42.35500, -83.07835],
		address: '5101 John C Lodge Fwy, Detroit, MI 48202',
		image: 'Link to image',
		sport: 'Basketball',
		conference: 'GLIAC',
		stadiumName: 'Matthaei Arena',
		mascot: 'Warriors'
	},
	{
		name: 'Wayne State University',
		position: [42.35500, -83.07835],
		address: '42 W Warren Ave, Detroit, MI 48208',
		image: 'Link to image',
		sport: 'Football',
		conference: 'GLIAC',
		stadiumName: 'Adams Field',
		mascot: 'Warriors'
	}
]

let detroitCoffee = [
	{
		name: 'Bean and Leaf Cafe',
		position: [42.6818823, -83.1342262],
		address: '439 S Main St, Rochester, MI 48307',
		image: 'Link to image',
		hours: {
			0: {
				open: [08,00,00],
				close: [19,00,00]
				}
			,
			1: {
				open: [07,00,00],
				close: [19,00,00]
				}
			,
			2: {
				open: [07,00,00],
				close: [19,00,00]
				}
			,
			3: {
				open: [07,00,00],
				close: [19,00,00]
				}
			,
			4: {
				open: [07,00,00],
				close: [19,00,00]
				}
			,
			5: {
				open: [07,00,00],
				close: [19,00,00]
				}
			,
			6: {
				open: [07,00,00],
				close: [19,00,00]
				}
		},
		phone: '+12486011411',
		website: 'http://mybeanandleaf.com/'
	},
	{
		name: 'Dessert Oasis Coffee Roasters Rochester',
		position: [42.6805297, -83.1335292],
		address: '336 S Main St, Rochester, MI 48307',
		image: 'Link to image',
		hours: {
			0: {
				open: [10,00,00],
				close: [22,00,00]
				}
			,
			1: {
				open: [07,00,00],
				close: [22,00,00]
				}
			,
			2: {
				open: [07,00,00],
				close: [22,00,00]
				}
			,
			3: {
				open: [07,00,00],
				close: [22,00,00]
				}
			,
			4: {
				open: [07,00,00],
				close: [22,00,00]
				}
			,
			5: {
				open: [07,00,00],
				close: [22,00,00]
				}
			,
			6: {
				open: [07,00,00],
				close: [22,00,00]
				}
		},
		phone: '+12484535239',
		website: 'http://www.dessertoasiscoffee.com/'
	},
	{
		name: 'Dessert Oasis Coffee Roasters Royal Oak',
		position: [42.4893567, -83.1438969],
		address: '115 S Main St, Royal Oak, MI 48067',
		image: 'Link to image',
		hours: {
			0: {
				open: [07,00,00],
				close: [22,00,00]
				}
			,
			1: {
				open: [07,00,00],
				close: [22,00,00]
				}
			,
			2: {
				open: [07,00,00],
				close: [22,00,00]
				}
			,
			3: {
				open: [07,00,00],
				close: [22,00,00]
				}
			,
			4: {
				open: [07,00,00],
				close: [22,00,00]
				}
			,
			5: {
				open: [07,00,00],
				close: [22,00,00]
				}
			,
			6: {
				open: [07,00,00],
				close: [22,00,00]
				}
		},
		phone: '+12483077161',
		website: 'http://docr.coffee/'
	},
	{
		name: 'Atomic Coffee',
		position: [42.4870806, -83.1437836],
		address: '401 S Main St, Royal Oak, MI 48067',
		image: 'Link to image',
		hours: {
			0: {
				open: [08,00,00],
				close: [20,00,00]
				}
			,
			1: {
				open: [08,00,00],
				close: [20,00,00]
				}
			,
			2: {
				open: [08,00,00],
				close: [20,00,00]
				}
			,
			3: {
				open: [08,00,00],
				close: [20,00,00]
				}
			,
			4: {
				open: [08,00,00],
				close: [20,00,00]
				}
			,
			5: {
				open: [08,00,00],
				close: [20,00,00]
				}
			,
			6: {
				open: [08,00,00],
				close: [20,00,00]
				}
		},
		phone: '+12483978036',
		website: 'http://atomiccoffee.net/'
	},
	{
		name: 'Dessert Oasis Coffee Roasters Detroit',
		position: [42.3329967, -83.0489534],
		address: '1220 Griswold St, Detroit, MI 48226',
		image: 'Link to image',
		hours: {
			0: {
				open: [09,00,00],
				close: [20,00,00]
				}
			,
			1: {
				open: [06,00,00],
				close: [21,00,00]
				}
			,
			2: {
				open: [06,00,00],
				close: [21,00,00]
				}
			,
			3: {
				open: [06,00,00],
				close: [21,00,00]
				}
			,
			4: {
				open: [06,00,00],
				close: [21,00,00]
				}
			,
			5: {
				open: [06,00,00],
				close: [22,00,00]
				}
			,
			6: {
				open: [07,00,00],
				close: [22,00,00]
				}
		},
		phone: '+13133383515',
		website: 'http://www.dessertoasiscoffee.com/'
	},
	{
		name: 'ASHE Supply Co',
		position: [42.3361523, -83.0493678],
		address: '1555 Broadway St, Detroit, MI 48226',
		image: 'Link to image',
		hours: {
			0: {
				open: 'closed',
				close: 'closed'
				}
			,
			1: {
				open: 'closed',
				close: 'closed'
				}
			,
			2: {
				open: [08,00,00],
				close: [14,00,00]
				}
			,
			3: {
				open: [08,00,00],
				close: [14,00,00]
				}
			,
			4: {
				open: [08,00,00],
				close: [14,00,00]
				}
			,
			5: {
				open: [08,00,00],
				close: [14,00,00]
				}
			,
			6: {
				open: [08,00,00],
				close: [14,00,00]
				}
		},
		phone: '+13136722070',
		website: 'http://www.ashesupplyco.com/'
	},
	{
		name: 'Madcap Coffee Company',
		position: [42.3347356, -83.0482326],
		address: '1413 Farmer St, Detroit, MI 48226',
		image: 'Link to image',
		hours: {
			0: {
				open: [08,00,00],
				close: [16,00,00]
				}
			,
			1: {
				open: [08,00,00],
				close: [16,00,00]
				}
			,
			2: {
				open: [08,00,00],
				close: [16,00,00]
				}
			,
			3: {
				open: [08,00,00],
				close: [16,00,00]
				}
			,
			4: {
				open: [08,00,00],
				close: [16,00,00]
				}
			,
			5: {
				open: [08,00,00],
				close: [16,00,00]
				}
			,
			6: {
				open: [08,00,00],
				close: [16,00,00]
				}
		},
		phone: '+18888669091',
		website: 'https://madcapcoffee.com/'
	},
	{
		name: 'Roasting Plant Coffee',
		position: [42.3312627, -83.0460499],
		address: '660 Woodward Ave, Detroit, MI 48226',
		image: 'Link to image',
		hours: {
			0: {
				open: [11,00,00],
				close: [20,00,00]
				}
			,
			1: {
				open: 'closed',
				close: 'closed'
				}
			,
			2: {
				open: [08,00,00],
				close: [15,00,00]
				}
			,
			3: {
				open: [08,00,00],
				close: [15,00,00]
				}
			,
			4: {
				open: [08,00,00],
				close: [15,00,00]
				}
			,
			5: {
				open: [08,00,00],
				close: [20,00,00]
				}
			,
			6: {
				open: [11,00,00],
				close: [20,00,00]
				}
		},
		phone: '+13137824291',
		website: 'http://roastingplant.com/'
	}
]
