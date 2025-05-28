import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <BrowserRouter>  {/* Wrap everything inside BrowserRouter */}
     <AuthProvider>  {/* Wrap inside AuthProvider */}
       <LanguageProvider>
        <App />
        </LanguageProvider>
        </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
