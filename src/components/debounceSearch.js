import React from 'react';
import {useState, useCallback} from 'react';
import FakeServerCall from '../services/fakeServerCall';
import helpers from '../utilities/helpers';

const DebounceSearch = () => {
  const [queryString, setQueryString] = useState('');
  const [results, setResults] = useState('');

	const handleChange = (queryString) => {
		FakeServerCall.get(queryString).then((results)=>{
			setResults(`Results for ${results.queryString} on ${results.time}`);
		});
	};

	const optimizedFn = useCallback(helpers.customDebounce(handleChange, 2000), []);
	//const optimizedFn = useCallback(helpers.customThrottle(handleChange, 10000), []);
	
	return (
		<div>
			<h1>Debounce search</h1>
			<input
				type="text"
				id="queryString"
				name="queryString"
				onChange={(e) => {setQueryString(e.target.value); optimizedFn(e.target.value);}}
				value={queryString}
			/>

			<p>Query string: {results}</p>
		</div>
	);
};
export default DebounceSearch;