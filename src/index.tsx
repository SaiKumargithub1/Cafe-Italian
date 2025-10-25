import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CafeItalian } from "./screens/CafeItalian";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CafeItalian />
  </StrictMode>,
);
