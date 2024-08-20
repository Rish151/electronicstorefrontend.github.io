import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AllProducts from "./components/Products/AllProducts/AllProducts";
import SingleProducts from "./components/SingleProducts/SingleProducts";
import Products from "./components/Products/Products";
import AppContext from "./utils/Context";
import Category from "./components/Category/Category";
import Error from "./components/Error/Error";
import Success from "./components/Success/Success";


function App() {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProducts />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/success" element={<Success/>} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </AppContext>
      </BrowserRouter>
    </>
  );
}

export default App;
