import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Todo from "./components/Todo.js";
import "./Todo.css";
import { ThemeProvider } from "./components/ThemeProvider.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Todo />
    </ThemeProvider>
  </StrictMode>
);