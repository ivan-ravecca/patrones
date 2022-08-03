const customDebounce = (funCall, delay) => {
	console.log('1');
	let timer;
	(function(...args) {
		const context = this;
		clearTimeout(timer);
		timer = setTimeout(() => {
			console.log('3');
			funCall.apply(context, args);
		}, delay);
	})(funCall, delay);
};

const customThrottle = (funcCall, interval) => {
	let shouldFire = true;
	return function() {
		if (shouldFire) {
			funcCall();
			shouldFire = false;
			setTimeout(() => {
				shouldFire = true;
			}, interval)
		}
	}
};

export default {customDebounce, customThrottle};