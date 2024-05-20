import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Page404 from "./pages/Page404";
import CouterPage from "./pages/CouterPage";
// import { AppContext } from "./context/Context";
// import { ContextProvider } from "./context/Context";
import ContextProvider from "./context/ContextShop";
import ShopPage from "./pages/ShopPage";

function App() {
  // יצרנו סטייט שישמש את הקונטסט וכך יהיה גלובלי
  const [counter, setCounter] = useState(55);
  return (
    // AppContext.Provider - עוטף את כל הקומפוינטות
    // ויקבל פרופס בשם וויליו שכל מה שיהיה בתוכו יהיה גלובלי
    // וניתן לשליפה בתוך הקומפנינטות
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<CouterPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
