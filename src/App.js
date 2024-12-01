
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import EducationPage from "./pages/EducationPage";
import InformationPage from "./pages/InformationPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
     
        
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="information" element={<InformationPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
        </Routes>
        
   
    </>
  );
}

export default App;
