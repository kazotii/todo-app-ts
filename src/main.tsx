import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Todo from "./Todo.js";
import "./Todo.css";
import { ThemeProvider } from "./ThemeContext.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Todo />
    </ThemeProvider>
  </StrictMode>
);