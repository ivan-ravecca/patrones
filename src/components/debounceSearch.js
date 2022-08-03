import React from 'react';
import {useState} from 'react';
import FakeServerCall from '../services/fakeServerCall';
import helpers from '../utilities/helpers';

const DebounceSearch = () => {
  const [queryString, setQueryString] = useState('');
  const [results, setResults] = useState('');

	const debouncedCall = (queryString) => {
		helpers.customDebounce(()=>{
			setQueryString(queryString);
			FakeServerCall.get(queryString).then((results)=>{
				setResults(`Results for ${results.queryString} on ${results.time}`);
				// drop off loading indicator
			});
		}, 3000);
	};

	const handleChange = event => {
	// show loading indicator
		debouncedCall(event.target.value);
	};

	return (
		<div>
			<h1>Debounce search</h1>
			<input
				type="text"
				id="queryString"
				name="queryString"
				onChange={handleChange}
				value={queryString}
			/>

			<h2>Query string: {results}</h2>
		</div>
	);
};
export default DebounceSearch;