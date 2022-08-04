import isThisTheRealWorld from "./globals";

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

const memoize = () => {
	let cache = [];
	return (key, funCall) => {
		if (cache[key]) {
			if(isThisTheRealWorld) console.info(`memoize - return from cache key: ${key}`);
			return cache[key];
		}
		if(isThisTheRealWorld) console.info(`memoize - STORING cache key: ${key}`);
		cache[key] = funCall(key);
		return cache[key];
	};
};

const queue = () => {
	let internalQueue = [];
	return (key, funCall) => {
		if (internalQueue[key]) {
			if(isThisTheRealWorld) console.info('memoize - return from cache');
			internalQueue[key].cancel();
		}
		internalQueue[key] = {
			cancel: ()=>{},
			result: funCall()
		};
		return internalQueue[key].result;
	};
};

export default {customDebounce, customThrottle, memoize, queue};