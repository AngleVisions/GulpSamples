(function() {
	var time = 20;
	var color = '#090';
	var size = {
		width: 50,
		height: 50,
	};
	var position = {
		x: 0,
		y: 0,
	};
	var velocity = {
		x: 5,
		y: 3,
	};
	var getLength = function(client, scroll, offset) {
		return Math.max(
			document.documentElement[client], 
			document.body[scroll], 
			document.documentElement[scroll], 
			document.body[offset],
			document.documentElement[offset]);
	};
	var getSize = function() {
		return {
			width: getLength("clientWidth", "scrollWidth", "offsetWidth"),
			height: getLength("clientHeight", "scrollHeight", "offsetHeight"),
		};
	}
	var setPosition = function(element, position) {
		element.style.left = position.x + 'px';
		element.style.top = position.y + 'px';
	};
	var setSize = function(element, size) {
		element.style.width = size.width + 'px';
		element.style.height = size.height + 'px';
	};

	var box = document.createElement('div');
	box.style.background = color;
	box.style.position = 'absolute';
	setSize(box, size);
	setPosition(box, position);
	document.body.appendChild(box);

	setInterval(function() {
		var dim = getSize();
		position.x += velocity.x;
		position.y += velocity.y;

		if (position.x + size.width > dim.width || position.x < 0)
			velocity.x *= -1;

		if (position.y + size.height > dim.height || position.y < 0)
			velocity.y *= -1;

		setPosition(box, position);
	}, time);
})();