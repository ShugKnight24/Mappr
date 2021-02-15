// Data for Detroit Points of Interest

let detroitRestaurants = [
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
		specialty: 'Authentic Cantonese Cuisine',
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
		specialty: 'Deep Dish Pizzas',
		favDish: 'BBQ Chicken Deep Dish',
		phone: '(248) 547-1711',
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
