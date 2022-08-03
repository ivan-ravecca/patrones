const customDebounce = (fn, delay=500) => {
    let timeoutId;

    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args);
        }, delay);
    };
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