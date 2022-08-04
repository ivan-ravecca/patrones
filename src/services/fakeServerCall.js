import isThisTheRealWorld from '../utilities/globals';
import helpers from '../utilities/helpers';
const internalGet = (queryString) => {
	if(isThisTheRealWorld) console.log(`	FakeServerCall.get(${queryString})`);
	return new Promise((resolve, reject) => {
		const magicNumberPromise = Math.floor(Math.random() * 2000);
		setTimeout(() => {
			const result = {
				queryString: queryString,
				time: new Date()
			};
			if(isThisTheRealWorld) console.log(`	FakeServerCall.get:Result: ${JSON.stringify(result)} it took ${magicNumberPromise} ms`);
			resolve(result);
		}, magicNumberPromise);
	});
};
const memoizedGet = helpers.memoize();

const FakeServerCall = {
	// get: internalGet
	get: (queryString) => {		
		return memoizedGet(queryString, internalGet);
	}
};

export default FakeServerCall;