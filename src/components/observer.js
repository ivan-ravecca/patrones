import React, { memo, useContext, useState } from "react";
import { StatusContext } from "../context/status-context";
import { StatusPicker } from "./statusPicker";
import { StatusWrapper as Status } from "./statusWrapper/statusWrapper";

export const Observer = memo(() => {
  const { cacheData, getStatus, setStatus } = useContext(StatusContext);
  const [key, setKey] = useState("key");
  const [value, setValue] = useState("value");
  const [showPickers, setShowPickers] = useState(false);

  const handleStatusChange = () => {
    setStatus(key, value);
  };

  return (
    <div className="sections observer">
      <h1>Observer</h1>
      <div>
        <input value={key} onChange={(e) => setKey(e.target.value)} />
        :
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleStatusChange}>Set</button>
      </div>
      <br />
      <div>
        {cacheData &&
          cacheData.current &&
          Object.entries(cacheData.current).map((value) => {
            return <StatusPicker value={value[0]} status={value[1]} />;
          })}
      </div>
      <br />
      <div>
        Current value of '{key}': {getStatus(key) || "undefined"}
      </div>

      {showPickers && (
        <>
          <Status value="id1" />
          <Status value="id2" />
          <Status value="id3" />
          <Status value="id4" />
          <Status value="id5" />
          <Status value="id4" />
          <Status value="id1" />
        </>
      )}
      <button onClick={() => setShowPickers(!showPickers)}>
        {showPickers ? "unregister" : "register"}
      </button>
    </div>
  );
});

export default Observer;
