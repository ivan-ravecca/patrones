import React from 'react';
import {useState} from 'react';
import { Resizable } from "re-resizable";


const RegularResize = () => {
	const style = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		border: "solid 1px #ddd",
		background: "#f0f0f0"
	  };
	const [componentWidth, setComponentWidth] = useState(200);
	const [componentHeight, setComponentHeight] = useState(200);

	const onResize = (width, height) => {
		setComponentWidth(width);
		setComponentHeight(height);
	}

	return (
		<Resizable
		onResize={(e, direction, ref, d) => {
			onResize(ref.offsetWidth, ref.offsetHeight);
		}}
		style={style}
		defaultSize={{
		  width: 200,
		  height: 200
		}}
	  >
		My size is {componentWidth}px width and {componentHeight}px height.
	  </Resizable>
	)
};
export default RegularResize;