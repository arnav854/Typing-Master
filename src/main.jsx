import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter } from "react-router-dom";
import { ToggleProvider } from "./context/ToggleContext.jsx";
import { QuoteProvider } from "./context/QuotesChange.jsx";
import { TestProvider } from "./context/Testcontext.jsx";


createRoot(document.getElementById("root")).render(
  <TestProvider>
  <QuoteProvider>
    <ToggleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleProvider>
  </QuoteProvider>
  </TestProvider>
);
