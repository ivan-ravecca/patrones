import React from 'react';
import {useState} from 'react';
import FakeServerCall from '../services/fakeServerCall';

const RegularSearch = () => {
  const [queryString, setQueryString] = useState('');
  const [results, setResults] = useState('');

  const handleChange = event => {
	// show loading indicator
	setQueryString(event.target.value);
	FakeServerCall.get(event.target.value).then((results)=>{
		setResults(`Results for ${results.queryString} on ${results.time}`);
		// drop off loading indicator
	});
  };

  return (
	<div>
		<h1>Regular search</h1>
		<input
			type="text"
			id="queryString"
			name="queryString"
			onChange={handleChange}
			value={queryString}
		/>

		<p>Query string: {results}</p>
	</div>
  );
};
export default RegularSearch;