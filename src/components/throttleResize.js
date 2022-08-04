import React from "react";
import { useEffect, useState } from "react";
import helpers from "../utilities/helpers";
import isThisTheRealWorld from "../utilities/globals";

const ThrottleResize = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResizeThrottled = helpers.customThrottle(() => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    if (isThisTheRealWorld)
      console.log(
        "ThrottleResize:::: resized to: ",
        window.innerWidth,
        "x",
        window.innerHeight
      );
  }, 2000);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (isThisTheRealWorld)
        console.log("ThrottleResize:::: RESIZING DETECTED");
      handleResizeThrottled();
    });
    return () => {
      window.removeEventListener("resize", handleResizeThrottled);
    };
  }, []);

  return (
    <div
      className="sections"
      id="throttleResize"
      style={{ background: "aqua" }}
    >
      <h1>Throttle Resize</h1>
      My size is {dimensions.width}px width and {dimensions.height}px height.
    </div>
  );
};
export default ThrottleResize;
