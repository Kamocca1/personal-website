import App from "@/App.jsx";
import { AboutImg, HeroBg } from "@/assets";
import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Instant preload
[HeroBg, AboutImg].forEach((src) => {
    const img = new Image();
    img.src = src;
});

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
