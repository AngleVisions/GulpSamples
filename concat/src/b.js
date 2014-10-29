var Hero = (function() {
	var Hero = function(x, y) {
		GameObject.apply(this, [x, y, 48, 48]);
		this.cooldown = 0;
		this.health = 10;
		this.ammo = 0;
	};

	Hero.prototype = new GameObject();

	Hero.prototype.fire = function(target) {
		if (this.ammo === 0 || this.cooldown !== 0)
			return;

		var angle = this.angleTo(target);
		this.ammo -= 1;
		this.cooldown = 20;
		return new Bullet(this.x, this.y, angle, this);
	};

	return Hero;
})();

var mario = new Hero(0, 0);
var sonic = new Hero(100, 0);