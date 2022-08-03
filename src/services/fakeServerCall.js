import isThisTheRealWorld from '../globals';
const FakeServerCall = {
	get: (queryString) => {
		
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(isThisTheRealWorld){
					console.log(`FakeServerCall.get(${queryString})`);
				}
				resolve({
					queryString: queryString,
					time: new Date()
				});
			}, 2000);
		});
	}
};

export default FakeServerCall;