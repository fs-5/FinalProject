import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import OrderList from "../pages/Order/OrderList";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SavedPage from "../pages/Saved/SavedPage";
import Profile from "../pages/Profile/Profile";
import Detail_Product from "../pages/product/Detail_Product";
import Pesanan from "../pages/Pesanan/Pesanan";

const Routers = () => {
  return (
    <div>
      <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail_product/:id_product/:nama_product" element={<Detail_Product />} />
          <Route path="/bookingOrder/:id_product/:nama_product/:price_product" element={<Pesanan/>} />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/savedlist" element={<SavedPage />} />
          <Route path="/profile" element={<Profile />} />

      </Routes>
    </div>
  );
};

export default Routers;
