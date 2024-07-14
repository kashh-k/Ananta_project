import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowProduct from "./components/product/ShowProduct";
import SearchProduct from "./components/product/SearchProduct";
import ProductDetail from "./components/product/ProductDetail";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Cart from "./components/Cart";
import Address from "./components/Address";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";
import SLogin from "./components/supplier/supplierLogin/SLogin.jsx";
import SupSignUp from "./components/supplier/supplierLogin/SupSignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServicePortal from "./components/supplier/supplierLogin/ServicePortal.jsx";
import AddService from "./components/supplier/supplierLogin/AddService.jsx";
import DeleteService from "./components/supplier/supplierLogin/DeleteService.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ShowProduct />} />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/serviceportal" element={<ServicePortal />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Address />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderconfirmation" element={<OrderConfirmation />} />
        <Route path="/slogin" element={<SLogin />} />
        <Route path="/SupplierSignUp" element={<SupSignUp />} />
        <Route path="/addservice" element={<AddService />} />
        <Route path="/deleteservice" element={<DeleteService />} />
      </Routes>
    </Router>
  );
};

export default App;
