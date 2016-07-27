(function() {
	var pokemon = document.getElementsByClassName("pokemon");

	console.log(typeof pokemon, pokemon);

	var radius = 25;

	var angle = 0;
	var x = -1;
	var y = 0;
	var z = -1;

	var array = Object.keys(pokemon).map(function(elem) {
		return pokemon[elem];
	});

	array.map(function(element) {
		x = radius * Math.sin(angle/180*3.14);
		z = radius * Math.cos(angle/180*3.14);

		console.log(element.attributes);
		console.log(element.getAttribute("position"));


		element.setAttribute("position", new THREE.Vector3(x, y, z));
		element.setAttribute("rotation", new THREE.Vector3(0, (angle-180), 0));
		angle += 75;
		console.log(x, y, z);
	});
})();