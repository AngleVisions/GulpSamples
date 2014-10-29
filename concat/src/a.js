var GameObject = (function() {
	var GameObject = function(x, y, width, height) {
		this.x = x || 0;
		this.y = y || 0;
		this.width = width || 0;
		this.height = height || 0;
	};

	GameObject.prototype.distanceTo = function(pos) {
		var dx = this.x - pos.x;
		var dy = this.y - pos.y;
		return Math.sqrt(dx * dx + dy * dy);
	};

	GameObject.prototype.angleTo = function(pos) {
		var dx = this.x - pos.x;
		var dy = this.y - pos.y;
		return Math.atan2(dy, dx);
	};

	return GameObject;
})();

var Bullet = (function() {
	var Bullet = function(x, y, angle, owner) {
		GameObject.apply(this, [x, y, 3, 3]);
		this.vx = 5 * cos(angle);
		this.vy = 5 * sin(angle);
		this.owner = owner;
	};

	Bullet.prototype = new GameObject();

	return Bullet;
})();