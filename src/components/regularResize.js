import React from 'react';

const RegularResize = () => {
	let componentWidth, componentHeight;

	return (
		<div id="regularResize" style={{ height:"200px", width:"200px", background:"Olive"}}>
			<h1>Regular Resize</h1>
			My size is {componentWidth}px width and {componentHeight}px height.
		</div>
	);
};
export default RegularResize;