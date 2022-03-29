import React from "react";
import { SocketProvider } from "../providers/SocketProvider";
import AppTabs from "../stacks/AppTabs";

const Providers = () => {
    return (
        <SocketProvider>
            <AppTabs />
        </SocketProvider>
    );
};

export default Providers;