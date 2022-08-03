import React from 'react';
import {useEffect, useState} from 'react';
import helpers from '../utilities/helpers';

const ThrottleResize = () => {
	const [dimensions, setDimensions] = useState({ 
		height: window.innerHeight,
		width: window.innerWidth
	});

	useEffect(() => {
		const handleResizeThrottled = helpers.customThrottle(() => {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth
			});
			console.log('ThrottleResize:::: resized to: ', window.innerWidth, 'x', window.innerHeight)
		}, 2000);

		window.addEventListener('resize', handleResizeThrottled);

		return () => { window.removeEventListener('resize', handleResizeThrottled)};
	});
	
	return (
		<div id="throttleResize" style={{ background:"aqua"}}>
			<h1>Regular Resize</h1>
			My size is {dimensions.width}px width and {dimensions.height}px height.
		</div>
	);
};
export default ThrottleResize;