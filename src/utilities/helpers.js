import isThisTheRealWorld from "../globals";

const customDebounce = (funCall, delay=500) => {
	let timer;
	return function(...args) {
		const context = this;
		clearTimeout(timer);
		
		timer = setTimeout(() => {
			if(isThisTheRealWorld && timer) console.info('customDebounce - excecuting timeout');
			funCall.apply(context, args);
		}, delay);
		if(isThisTheRealWorld) console.info('customDebounce - new timer', timer);
	};
};

const customThrottle = (funcCall, interval=500) => {
	let shouldFire = true;
	return function() {
		if (shouldFire) {
			if(isThisTheRealWorld) console.info(`	>> customThrottle - excecuting function`);
			funcCall();
			shouldFire = false;
			setTimeout(() => {
				shouldFire = true;
			}, interval)
		}
	}
};

export default {customDebounce, customThrottle};