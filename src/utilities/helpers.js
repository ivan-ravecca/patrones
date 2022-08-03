const customDebounce = (funCall, delay) => {
	let timer;
	return function(...args) {
		const context = this;
		clearTimeOut(timer);
		timer = setTimeOut(() => {
			funCall.apply(context, args);
		}, delay);
	}
};

const customThrottle = (funcCall, interval) => {
	let shouldFire = true;
	return function() {
		if (shouldFire) {
			func();
			shouldFire = false;
			setTimeOut(() => {
				shouldFire = true;
			}, interval)
		}
	}
};

export default {customDebounce, customThrottle};