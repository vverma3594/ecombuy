import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../src/components/layout/NavBar";
import Products from "../src/components/products/Products";
import ProductDetail from "../src/components/products/ProductDetail";
import Cart from "../src/components/products/Cart";
function App() {
 
  return (
    <div>
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/products/:productId" element={<ProductDetail/>}/>
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
