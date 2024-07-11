import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";

console.log(import.meta.env.BASE_URL);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
