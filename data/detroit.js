// Data for Detroit Points of Interest

let michiganLocations = [
	{
		name: 'Midtown',
		position: [42.351427, -83.060863],
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
		position: [42.32923, -83.06178],
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
		position: [42.34001, -83.04779],
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
		position: [42.34110, -83.0574],
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
		position: [42.34110, -83.0574],
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
		position: [42.32523, -83.05485],
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
		position: [42.34110, -83.0574],
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
		position: [42.34110, -83.0574],
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
