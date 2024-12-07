import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import MessagePage from "./pages/MessagePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/message-board" element={<MessagePage />} />
        <Route path="/shop/:id" element={<ItemDetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
