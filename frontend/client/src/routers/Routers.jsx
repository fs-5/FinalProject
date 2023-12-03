// Routers.jsx
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import OrderList from "../pages/Order/OrderList";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SavedPage from "../pages/Saved/SavedPage";
import Profile from "../pages/Profile/Profile";
import Detail_Product from "../pages/product/Detail_Product";
import Pesanan from "../pages/Pesanan/Pesanan";
import Login from "../pages/Form/Login";
import Register from "../pages/Form/Register";

const Routers = ({ isLoggedIn, setLoggedIn, setUsername }) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} setUsername={setUsername} />}
        />
        <Route
          path="/detail_product/:id_penginapan/:nama_penginapan"
          element={<Detail_Product />}
        />
        <Route
          path="/bookingOrder/:id_penginapan/:nama_penginapan/:harga_penginapan"
          element={<Pesanan />}
        />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/savedlist" element={<SavedPage />} />
        <Route
          path="/profile/:userid/:username"
          element={
            isLoggedIn ? (
              <Profile isLoggedIn={isLoggedIn} setUsername={setUsername} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={ <Register/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Routers;
