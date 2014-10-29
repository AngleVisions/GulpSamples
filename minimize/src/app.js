var diff = (function() {
	var fib = function(n) {
		if (n === 1)
			return 1;
		else if (n === 0)
			return 0;

		return fib(n - 1) + fib (n - 2);
	};

	var fac = function(n) {
		if (n === 0)
			return 1;
		else if (n < 0)
			return -fac(-n);

		return n * fac(n - 1); 
	};

	return function(n) {
		return fib(n) - fac(n);
	};
})();