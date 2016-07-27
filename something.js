(function() {
	var pokemon = document.getElementsByClassName("pokemon");

	

	var radius = 40;

	var angle = 0;
	var x = -1;
	var y = 0;
	var z = -1;
	var locations =[];

	var array = Object.keys(pokemon).map(function(elem) {
		return pokemon[elem];
	});

	array.map(function(element) {
		x = radius * Math.sin(angle/180*3.14);
		z = radius * Math.cos(angle/180*3.14);
console.log(pokemon);
console.log(x,y,z);
		element.setAttribute("position", new THREE.Vector3(x, y, z));
		element.setAttribute("rotation", new THREE.Vector3(0, (angle-180), 0));
		angle += 60;
		
		locations.push(new THREE.Vector3(x, y, z));
		console.log(locations);
	});

	setInterval(function(){},3000);
	

})();


 /* not actually a type; just a declaration...

Javascript "interprets" what type it is depending on what you put in */

/* function t_check(value) {
	x = value;
	console.log(x, "is", typeof x);
}

console.log("BEGIN TEST");
t_check("5");
t_check("val");
t_check([]);



console.log("VALUE:", x);
-->
*/