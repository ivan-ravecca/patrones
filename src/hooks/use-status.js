import { useCallback, useContext, useEffect, useState } from "react";
import { StatusContext } from "../context/status-context";
import isThisTheRealWorld from "../utilities/globals";

export function useStatus({ value }) {
  const { cacheData, getStatus } = useContext(StatusContext);
  const [updatedStatus, setUpdatedStatus] = useState("");

  useEffect(() => {
    const status = getStatus(value);
    status && setUpdatedStatus(status);
    if (isThisTheRealWorld) console.log("updated status " + status);
  }, [cacheData, getStatus, value]);

  const getLastStatus = useCallback(() => {
    return updatedStatus;
  }, [updatedStatus]);

  return { getLastStatus };
}
