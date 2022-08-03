const customDebounce = (funCall, delay) => {
	console.log('1');
	let timer;
	(function(...args) {
		const context = this;
		clearTimeOut(timer);
		timer = setTimeOut(() => {
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
			setTimeOut(() => {
				shouldFire = true;
			}, interval)
		}
	}
};

export default {customDebounce, customThrottle};