import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalState } from "./context/GlobalState.jsx";
import TodoReducer, { initialState } from "./context/TodoReducer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalState reducer={TodoReducer} initialState={initialState}>
      <App />
    </GlobalState>
  </StrictMode>
);
