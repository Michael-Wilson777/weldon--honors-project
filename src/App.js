import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import InformationPage from "./pages/InformationPage";
import ShopPage from "./pages/ShopPage";
import ItemDetailPage from "./pages/ItemDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/shop/:id" element={<ItemDetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
