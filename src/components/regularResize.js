import React from "react";
import { useEffect, useState } from "react";

const RegularResize = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      console.log(
        "RegularResize:::resized to: ",
        window.innerWidth,
        "x",
        window.innerHeight
      );
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div
      className="sections"
      id="regularResize"
      style={{ background: "Olive" }}
    >
      <h1>Regular Resize</h1>
      My size is {dimensions.width}px width and {dimensions.height}px height.
    </div>
  );
};
export default RegularResize;
