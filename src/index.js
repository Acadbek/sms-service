import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Context from "./Context";
import Root from "./Root";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>
);
