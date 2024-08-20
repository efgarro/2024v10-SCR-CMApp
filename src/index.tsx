import * as React from "react";
import { createRoot } from "react-dom/client";
import CMApp from "./CMApp"; // Import Content Management App

const domNode = document.getElementById("app") as HTMLElement;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <CMApp />
  </React.StrictMode>
);
