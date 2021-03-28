'use strict';

const doorDashSVG = `
	<svg class="doordash-logo" width="32" height="18" viewBox="0 0 99.5 56.5" fill="#ff3008"><path d="M95.64,13.38A25.24,25.24,0,0,0,73.27,0H2.43A2.44,2.44,0,0,0,.72,4.16L16.15,19.68a7.26,7.26,0,0,0,5.15,2.14H71.24a6.44,6.44,0,1,1,.13,12.88H36.94a2.44,2.44,0,0,0-1.72,4.16L50.66,54.39a7.25,7.25,0,0,0,5.15,2.14H71.38c20.26,0,35.58-21.66,24.26-43.16"></path></svg>
	<svg class="doordash-text" width="112" height="13" viewBox="0 0 361.1 42" fill="#ff3008"><path d="M8.62,8.66V33.38h6.32A12.21,12.21,0,0,0,27,21,12,12,0,0,0,14.94,8.66ZM14.94.91C26.72.91,35.63,9.81,35.63,21S26.72,41.14,14.94,41.14H1a1,1,0,0,1-1-1V1.95a1,1,0,0,1,1-1Z"></path><path d="M66,34.24A13.22,13.22,0,1,0,52.82,21,13.24,13.24,0,0,0,66,34.24M66,0C78.4,0,87.88,9.53,87.88,21S78.4,42,66,42,44.2,32.52,44.2,21,53.68,0,66,0"></path><path d="M118,34.24A13.22,13.22,0,1,0,104.75,21,13.24,13.24,0,0,0,118,34.24M118,0c12.36,0,21.84,9.48,21.84,21S130.32,42,118,42,96.12,32.52,96.12,21,105.6,0,118,0"></path><path d="M168.75,8.66h-8.91V19.3h8.91a5.22,5.22,0,0,0,5.46-5.17,5.28,5.28,0,0,0-5.46-5.46M151.22,1.95a1,1,0,0,1,1-1H169c8,0,13.79,5.86,13.79,13.22a13,13,0,0,1-7.18,11.78l7.74,13.68a1,1,0,0,1-.91,1.56h-6.79a1,1,0,0,1-.91-.54l-7.46-13.54h-7.47v13a1,1,0,0,1-1,1h-6.54a1,1,0,0,1-1-1Z"></path><path d="M205.26,8.85V33.57h6.32a12.21,12.21,0,0,0,12.07-12.36A12,12,0,0,0,211.58,8.85Zm6.32-7.76c11.78,0,20.69,8.91,20.69,20.12s-8.91,20.12-20.69,20.12h-13.9a1,1,0,0,1-1-1V2.14a1,1,0,0,1,1-1Z"></path><path d="M258.56,10.92l-4.89,13.22h9.77Zm-7.76,20.69-3.2,8.8a1,1,0,0,1-1,.69h-6.94a1,1,0,0,1-1-1.42l15-38.15a1,1,0,0,1,1-.66h7.77a1,1,0,0,1,1,.66l15,38.15a1,1,0,0,1-1,1.42h-6.94a1,1,0,0,1-1-.69l-3.2-8.8Z"></path><path d="M286.48,11.78C286.48,5.46,291.94,0,300.56,0a17.84,17.84,0,0,1,12.51,4.71,1,1,0,0,1,0,1.47L309.22,10a1,1,0,0,1-1.42,0,10.12,10.12,0,0,0-6.67-2.63c-3.45,0-6,2-6,4.31,0,7.47,20.38,3.16,20.38,17.53C315.5,36.49,310,42,300.27,42a20.41,20.41,0,0,1-14.54-5.84,1,1,0,0,1,0-1.47l3.72-3.72a1,1,0,0,1,1.45,0,12.85,12.85,0,0,0,8.79,3.58c4.31,0,7.15-2.3,7.15-5.18,0-7.47-20.37-3.16-20.37-17.53"></path><path d="M352.47,1.9V17H335.22V1.9a1,1,0,0,0-1-1h-6.54a1,1,0,0,0-1,1V40.05a1,1,0,0,0,1,1h6.54a1,1,0,0,0,1-1V24.71h17.24V40.05a1,1,0,0,0,1,1H360a1,1,0,0,0,1-1V1.9a1,1,0,0,0-1-1h-6.54A1,1,0,0,0,352.47,1.9Z"></path></svg>
`;

const fbIcon = `
	<svg class="facebook-icon" enable-background="new 0 0 455.73 455.73" viewBox="0 0 455.73 455.73" xmlns="http://www.w3.org/2000/svg"><path d="m0 0v455.73h242.704v-176.039h-59.33v-71.864h59.33v-60.353c0-43.893 35.582-79.475 79.475-79.475h62.025v64.622h-44.382c-13.947 0-25.254 11.307-25.254 25.254v49.953h68.521l-9.47 71.864h-59.051v176.038h141.162v-455.73z" fill="#3a559f"/></svg>
`;

const grubHubSVG = `
	<svg class="grubhub-logo" xmlns="http://www.w3.org/2000/svg" viewBox="-247.2 1051.5 600 125.9" fill="#F63440"><path d="M170.5 1053.3h-21c-1.2 0-1.8 1.2-1.8 1.8v45.7h-21v-45.7c0-1.2-1.2-1.8-1.8-1.8h-21c-1.2 0-1.8 1.2-1.8 1.8v117.3c0 1.2 1.2 1.8 1.8 1.8h21c1.2 0 1.8-1.2 1.8-1.8v-46.9h21v46.9c0 1.2 1.2 1.8 1.8 1.8h21c1.2 0 1.8-1.2 1.8-1.8v-117.3c0-.6-.6-1.8-1.8-1.8M-6.5 1053.3h-21c-1.2 0-1.8.6-1.8 1.8v83.1c0 4.2-1.2 7.2-3 9.6-1.8 2.4-4.2 3-7.2 3-2.9 0-5.4-1.2-7.2-3-1.8-2.4-3-5.4-3-9.6v-83.1c0-1.2-1.2-1.8-1.8-1.8h-21c-1.2 0-1.8.6-1.8 1.8v83.7c0 10.8 2.4 21 9 27.7 6.6 6.6 15.6 10.2 25.9 10.2 10.8 0 19.9-3.6 25.9-10.2 6.6-6.6 9-16.2 9-27.7v-83.7c-.1-.6-.7-1.8-2-1.8M-212.3 1051.5c-10.8 0-19.9 3.6-25.9 10.2-6.6 6.6-9 16.2-9 27.7v50c0 10.8 2.4 21 9 27.7 6.6 6.6 15.6 10.2 25.9 10.2 10.8 0 19.9-3.6 25.9-10.2 6.6-6.6 9-16.2 9-27.7v-27.6c0-1.2-1.2-2.4-2.4-2.4h-30.7c-1.2 0-2.4 1.2-2.4 2.4v20.5c0 1.2 1.2 2.4 2.4 2.4h7.9v4.8c0 4.2-1.2 7.9-3 10.2-1.8 2.4-4.2 3-7.2 3-2.9 0-5.4-1.2-7.2-3-1.8-2.4-3-6-3-10.2v-49.4c0-4.2 1.2-7.9 3-10.2 1.8-2.4 4.2-3 7.2-3 2.9 0 5.4 1.2 7.2 3 1.8 2.4 3 6 3 10.2v4.8c0 1.2 1.2 1.8 1.8 1.8h21c1.2 0 1.8-.6 1.8-1.8v-4.8c0-10.8-2.4-21-9-27.7-5.4-7.3-15.1-10.9-25.3-10.9M58.5 1147.2c-1.8 2.4-4.2 3-7.9 3h-12v-25.4h12c3 0 5.4 1.2 7.2 3 1.8 2.4 3 5.4 3 9 .2 5-.4 7.9-2.3 10.4zM38.6 1078h10.8c3 0 5.4.6 7.2 3 1.8 1.8 2.4 4.8 2.4 8.5s-.6 6.6-2.4 9c-1.8 1.8-4.2 3-6.6 3H39.2V1078h-.6zm34.9 34.3c3.6-3.6 10.2-12 10.2-22.9 0-12.7-4.8-20.5-8.5-24.7-6.6-7.2-15.6-10.8-25.9-10.8H16.4c-1.2 0-1.8 1.2-1.8 1.8v117.4c0 1.2 1.2 1.8 1.8 1.8h34.9c10.8 0 21-4.2 27.7-12.7 3.6-4.8 7.9-12.7 7.9-24.7-.7-14.4-9.7-22.9-13.4-25.2zM-117.8 1100.8c-1.8 2.4-4.8 3.6-8.5 3.6h-10.2V1078h10.2c3.6 0 6.6 1.2 8.5 3.6 2.4 2.4 3 5.4 3 9.6 0 4.2-.5 7.2-3 9.6zm13.3 21.7c2.4-1.8 4.2-3 6-5.4 4.2-4.8 9.6-13.3 9.6-26.5 0-12.7-4.8-21-9.6-25.9-6-7.2-15-10.8-25.3-11.4h-34.9c-1.2 0-1.8 1.2-1.8 1.8v117.3c0 1.2 1.2 1.8 1.8 1.8h21c1.2 0 1.8-1.2 1.8-1.8V1129h7.2l13.3 44.5c0 .6 1.2 1.2 1.8 1.2h22.2c.6 0 1.2-.6 1.8-.6.6 0 .6-1.2.6-1.8l-15.5-49.8zM323.9 1147.2c-1.8 2.4-4.2 3-7.9 3h-12v-25.4h12c3 0 5.4 1.2 7.2 3 1.8 2.4 3 5.4 3 9 .7 5-.4 7.9-2.3 10.4zm-19.3-69.2h10.8c3 0 5.4.6 7.2 3 1.8 1.8 2.4 4.8 2.4 8.5s-.6 6.6-2.4 9c-1.8 1.8-4.2 3-6.6 3h-10.8V1078h-.6zm34.9 34.3c3.6-3.6 10.2-12 10.2-22.9 0-12.7-4.8-20.5-8.5-24.7-6.6-7.2-15.6-10.8-25.9-10.8h-33.2c-1.2 0-1.8 1.2-1.8 1.8v117.4c0 1.2 1.2 1.8 1.8 1.8h35.1c10.8 0 21-4.2 27.7-12.7 3.6-4.8 7.9-12.7 7.9-24.7-1.2-14.4-10.2-22.9-13.3-25.2zM258.9 1053.3h-21c-1.2 0-1.8.6-1.8 1.8v83.1c0 4.2-1.2 7.2-3 9.6-1.8 2.4-4.2 3-7.2 3-2.9 0-5.4-1.2-7.2-3-1.8-2.4-3-5.4-3-9.6v-83.1c0-1.2-1.2-1.8-1.8-1.8h-21.1c-1.2 0-1.8.6-1.8 1.8v83.7c0 10.8 2.4 21 9 27.7 6.6 6.6 15.6 10.2 25.9 10.2 10.8 0 19.9-3.6 25.9-10.2 6.6-6.6 9-16.2 9-27.7v-83.7c.6-.6-.6-1.8-1.9-1.8"></path></svg>
`

const instagramIcon = `
	<svg class="instagram-icon" height="256" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="256" xmlns="http://www.w3.org/2000/svg"><path d="m127.999746 23.06353c34.177639 0 38.225647.1300727 51.72273.7458861 12.479874.5695765 19.257377 2.6548057 23.76826 4.4072316 5.974202 2.3220024 10.238659 5.0962109 14.717532 9.5750842s7.253082 8.7433298 9.574576 14.7175319c1.752934 4.5108834 3.838163 11.2883866 4.40774 23.7677522.615813 13.4975915.745886 17.5455987.745886 51.723238 0 34.177639-.130073 38.225647-.745886 51.72273-.569577 12.479874-2.654806 19.257377-4.40774 23.76826-2.321494 5.974202-5.095703 10.238659-9.574576 14.717532s-8.74333 7.253082-14.717532 9.574576c-4.510883 1.752934-11.288386 3.838164-23.76826 4.40774-13.495051.615813-17.543058.745886-51.72273.745886-34.1796718 0-38.227679-.130073-51.72273-.745886-12.4798736-.569576-19.2573769-2.654806-23.7677522-4.40774-5.9747102-2.321494-10.2391667-5.095703-14.71804-9.574576s-7.2530818-8.74333-9.5745761-14.717532c-1.7529339-4.510883-3.8381632-11.288386-4.4077397-23.767752-.6158134-13.497591-.7458861-17.545599-.7458861-51.723238 0-34.1776393.1300727-38.2256465.7458861-51.7227299.5695765-12.4798737 2.6548058-19.2573769 4.4077397-23.7682603 2.3214943-5.9742021 5.0957028-10.2386586 9.5745761-14.7175319s8.7433298-7.2530818 14.71804-9.5750842c4.5103753-1.7524259 11.2878786-3.8376551 23.7672441-4.4072316 13.4975915-.6158134 17.5455987-.7458861 51.7232381-.7458861m0-23.06353c-34.7629669 0-39.1214213.14734807-52.7739823.77027475-13.6246157.62191048-22.9288843 2.78538666-31.0711356 5.94981353-8.4171315 3.2711272-15.5553835 7.64787302-22.6712792 14.76376872s-11.49264151 14.2541476-14.76376871 22.6712792c-3.16442688 8.1422513-5.32790305 17.4465199-5.94981354 31.0711356-.62292667 13.6520529-.76976665 18.0110154-.76976665 52.7739822 0 34.762967.14683998 39.121929.76976665 52.773982.62191049 13.624616 2.78538666 22.928885 5.94981354 31.071136 3.2711272 8.416623 7.64787301 15.555383 14.76376871 22.671279s14.2541477 11.492642 22.6712792 14.763769c8.1422513 3.164427 17.4465199 5.327903 31.0711356 5.949813 13.652561.622927 18.0110154.769767 52.7739823.769767 34.762967 0 39.121929-.14684 52.773982-.769767 13.624616-.62191 22.928885-2.785386 31.071136-5.949813 8.417131-3.271127 15.555383-7.647873 22.671279-14.763769s11.492642-14.254148 14.763769-22.671279c3.164427-8.142251 5.327903-17.44652 5.949813-31.071136.622927-13.652053.770275-18.011015.770275-52.773982 0-34.7629668-.147348-39.1219293-.770275-52.7739822-.62191-13.6246157-2.785386-22.9288843-5.949813-31.0711356-3.271127-8.4171316-7.647873-15.5553835-14.763769-22.6712792s-14.254148-11.49264152-22.671279-14.76376872c-8.142251-3.16442687-17.44652-5.32790305-31.071136-5.94981353-13.652053-.62292668-18.011015-.77027475-52.773982-.77027475zm0 62.2703115c-36.301484 0-65.7299426 29.4284585-65.7299426 65.7299425s29.4284586 65.729943 65.7299426 65.729943 65.729943-29.428459 65.729943-65.729943-29.428459-65.7299425-65.729943-65.7299425zm0 108.3968635c-23.564005 0-42.6669208-19.102916-42.6669208-42.666921s19.1029158-42.6669207 42.6669208-42.6669207 42.666921 19.1029157 42.666921 42.6669207-19.102916 42.666921-42.666921 42.666921zm83.686592-110.9937463c0 8.4831842-6.876583 15.3602744-15.359767 15.3602744s-15.360274-6.8770902-15.360274-15.3602744 6.87709-15.3597663 15.360274-15.3597663 15.359767 6.8765821 15.359767 15.3597663z" fill="#0a0a08"/></svg>
`;

const instagramGradientIcon = `
	<svg class="instagram-gradient-icon" width="0" height="0">
		<radialGradient id="rg" r="150%" cx="30%" cy="107%">
			<stop stop-color="#fdf497" offset="0" />
			<stop stop-color="#fdf497" offset="0.05" />
			<stop stop-color="#fd5949" offset="0.45" />
			<stop stop-color="#d6249f" offset="0.6" />
			<stop stop-color="#285AEB" offset="0.9" />
		</radialGradient>
	</svg>
`;

const twitterIcon = `
	<svg class="twitter-icon" enable-background="new 0 0 455.731 455.731" viewBox="0 0 455.731 455.731" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h455.731v455.731h-455.731z" fill="#50abf1"/><path d="m60.377 337.822c30.33 19.236 66.308 30.368 104.875 30.368 108.349 0 196.18-87.841 196.18-196.18 0-2.705-.057-5.39-.161-8.067 3.919-3.084 28.157-22.511 34.098-35 0 0-19.683 8.18-38.947 10.107-.038 0-.085.009-.123.009 0 0 .038-.019.104-.066 1.775-1.186 26.591-18.079 29.951-38.207 0 0-13.922 7.431-33.415 13.932-3.227 1.072-6.605 2.126-10.088 3.103-12.565-13.41-30.425-21.78-50.25-21.78-38.027 0-68.841 30.805-68.841 68.803 0 5.362.617 10.581 1.784 15.592-5.314-.218-86.237-4.755-141.289-71.423 0 0-32.902 44.917 19.607 91.105 0 0-15.962-.636-29.733-8.864 0 0-5.058 54.416 54.407 68.329 0 0-11.701 4.432-30.368 1.272 0 0 10.439 43.968 63.271 48.077 0 0-41.777 37.74-101.081 28.885z" fill="#fff"/></svg>
`;

const yelpIcon = `
	<svg class="yelp-icon" enable-background="new 0 0 228.097 228.097" viewBox="0 0 228.097 228.097" xmlns="http://www.w3.org/2000/svg"><g fill="#c1272d"><path d="m173.22 68.06c8.204 6.784 30.709 25.392 27.042 38.455-1.696 5.867-8.434 7.746-13.43 9.579-11.505 4.171-23.33 7.471-35.339 9.9-9.717 1.971-30.48 6.279-26.63-10.909 1.512-6.646 6.875-12.284 11.184-17.28 8.846-10.404 17.876-21.405 28.555-29.93.871-.688 1.925-.871 2.842-.733 1.788-.732 3.942-.64 5.776.918z"/><path d="m161.119 205.197c-7.196-5.821-12.284-14.942-16.684-22.917-4.309-7.7-11.092-17.876-12.238-26.813-2.337-18.38 24.292-7.333 31.947-4.675 10.175 3.575 37.447 7.517 34.422 23.421-2.521 12.971-18.151 28.784-31.213 30.801-.137.046-.321 0-.504 0-.046.046-.092.092-.137.137-.367.183-.779.413-1.192.596-1.559.826-3.071.505-4.401-.55z"/><path d="m101.58 157.896c14.484-6.004 15.813 10.175 15.721 19.984-.137 11.688-.504 23.421-1.375 35.063-.321 4.721-.137 10.405-4.629 13.384-5.546 3.667-16.225.779-21.955-1.008-.183-.092-.367-.183-.55-.229-12.054-2.108-26.767-7.654-28.188-18.792-.138-1.283.367-2.429 1.146-3.3.367-.688.733-1.329 1.146-1.925 1.788-2.475 3.85-4.675 5.913-6.921 3.483-5.179 7.242-10.175 11.229-14.988 5.775-6.967 12.879-17.693 21.542-21.268z"/><path d="m103.689 107.661c-21.13-17.371-41.71-44.276-52.344-69.164-8.113-18.93 12.513-30.48 28.417-35.705 21.451-7.059 29.976-.917 32.13 20.534 1.788 18.471 2.613 37.08 2.475 55.643-.046 7.838 2.154 20.488-2.429 27.547.733 2.888-3.621 4.95-6.096 2.979-.367-.275-.733-.642-1.146-.963-.366-.229-.687-.504-1.007-.871z"/><path d="m101.397 134.566c1.696 7.517-3.621 10.542-9.854 13.384-11.092 4.996-22.734 8.984-34.422 12.284-6.784 1.879-17.188 6.371-23.742 1.375-4.95-3.758-5.271-11.596-5.729-17.28-1.008-12.696.917-42.993 18.517-44.276 8.617-.596 19.388 7.104 26.447 11.138 9.396 5.409 19.48 11.596 26.492 20.076 1.053.595 1.924 1.649 2.291 3.299z"/></g></svg>
`;

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
		if (this.name === 'Downtown' || this.name === 'Southwest (Mexicantown)'){
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
		enrollment,
		socials,
		facebook,
		twitter,
		instagram
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
		this.socials = socials;
		this.facebook = facebook;
		this.twitter = twitter;
		this.instagram = instagram;
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
			${
				this.socials
				?
				`<div class="social-links">
					<a href=${ this.facebook } rel="noopener noreferrer"
					target="_blank">
						${ fbIcon }
					</a>
					<a href=${ this.twitter } rel="noopener noreferrer"
					target="_blank">
						${ twitterIcon }
					</a>
					<a href=${ this.instagram } rel="noopener noreferrer"
					target="_blank">
						${ instagramIcon }
						${ instagramGradientIcon }
					</a>
				</div>`
				:
				``
			}
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
			<h4>${ this.name } ${ this.mascot }</h4>
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

let locations = [];

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

let parks = [];

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

let beaches = [];

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

let restaurants = [];

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

let sportsTeams = [];

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

let collegeTeams = [];

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

let coffeeShops = [];

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

	toggleLegendActive();
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
