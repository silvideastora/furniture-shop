import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
