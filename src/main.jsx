import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 👈 import BrowserRouter
import "./index.css";
import App from "./App.jsx";
import { TransactionProvider } from "./Context/TransactionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TransactionProvider>
      <BrowserRouter>   {/* 👈 Wrap App with BrowserRouter */}
        <App />
      </BrowserRouter>
    </TransactionProvider>
  </StrictMode>
);
