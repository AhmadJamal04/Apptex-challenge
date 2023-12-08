import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import AddProducts from "./components/AddProduct";
import ListOfItems from "./components/ListOfItems";
import Navbar from "./components/Navbar";
import Checkout from "./components/Checkout";
import CheckOutSuccess from "./components/CheckOutSuccess";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productList" element={<ListOfItems />} />
          <Route path="/checkedout-items" element={<Checkout />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/checkOutSuccess" element={<CheckOutSuccess />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
