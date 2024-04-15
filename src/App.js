import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import VipList from "./pages/VipList";
import VipInfo from "./pages/VipInfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vip" element={<VipList />} />
          <Route path="/vip/:rank" element={<VipInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
