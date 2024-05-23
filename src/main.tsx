import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SWRConfig } from "swr";
import { SWR_CONFIG } from "./config/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SWRConfig value={SWR_CONFIG}>
      <App />
    </SWRConfig>
  </React.StrictMode>
);
