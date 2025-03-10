import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import CartProvider, { CartContext } from "./contexts/CartContext.jsx";
import FavProvider from "./contexts/FavContext.jsx";

createRoot(document.getElementById("root")).render(
    <FavProvider>
        <CartProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CartProvider>
    </FavProvider>
);
