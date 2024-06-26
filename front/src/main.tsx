/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <SWRConfig
            value={{
                dedupingInterval: 100,
                refreshInterval: 100,
                fallback: { a: 1, b: 1 },
            }}>
            <App />
        </SWRConfig>
    </React.StrictMode>
);
