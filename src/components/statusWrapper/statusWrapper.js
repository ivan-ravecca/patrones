import { StatusPicker as Presentation } from "../statusPicker";
import { useContext, useEffect } from "react";
import { StatusContext } from "../../context/status-context";
import { useStatus } from "../../hooks/use-status";

export const StatusWrapper = ({ value }) => {
    const { getLastStatus } = useStatus({ value });
    const { register } = useContext(StatusContext);

    useEffect(() => {
        const unregister = register(value);

        return () => {
            unregister();
        };
    }, [register, value]);

    return <Presentation value={value} status={getLastStatus()} />;
};
