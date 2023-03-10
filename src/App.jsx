import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Login from "./pages/Login";
import logo from "../src/assets/icons/logo.svg";
import OrdersPage from "./pages/OrdersPage";
import Sidebar from "./components/global-components/Sidebar";
import Header from "./components/global-components/Header";
import ProductsPage from "./pages/ProductsPage";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/routing-components/ProtectedRoute";
import BuyersPage from "./pages/BuyersPage";
import axios from "axios";
import InvoicePage from "./pages/InvoicePage";
import ProductsEditPage from "./pages/ProductsEditPage";
import OrdersEditPage from "./pages/OrdersEditPage";

import AddProductPage from "./pages/AddProductPage";
import UsersPage from "./pages/UsersPage";
import OrderAddPage from "./pages/OrderAddPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banners from "./pages/Banners";
import CategoryPage from "./pages/CategoryPage";
import Logs from "./pages/Logs";

function App() {
  const location = useLocation();

  return (
    <div className="cursor-default bg-[#FBFFF4] min-h-[100vh]">
      {/* sidebar */}
      {location?.pathname.includes("/login") ? "" : <Sidebar />}

      <div
        className={
          location?.pathname.includes("/login")
            ? "w-full  poppins"
            : "w-full pl-[60px] 2xl:pl-[250px] poppins"
        }
      >
        {/* {location?.pathname.includes("/login") ? "" : <Header />} */}

        <Routes>
          {/* <Route path='*' element={<Navigate to={localStorage.getItem("status") === 'true' ? '/admin-dashboard' : '/login'} replace={true} />} /> */}
          <Route
            path="/"
            element={<Navigate to={"/invoices"} replace={true} />}
          />

          <Route element={<Login />} path={"/login"} />

          <Route element={<ProtectedRoute />}>

            {/* <Route path='/admin-dashboard' element={<Dashboard />} /> */}


            <Route element={<InvoicePage />} path={"/invoices"} />


            <Route element={<ProductsPage />} path={"/products"} />
            <Route element={<ProductsEditPage />} path={"/products/:product_id"} />
            <Route element={<AddProductPage />} path={"/products/add-product"} />


            <Route element={<BuyersPage />} path={"/buyers"} />
            <Route element={<Logs />} path={"/logs"} />


            <Route element={<UsersPage />} path={"/users"} />
            <Route element={<Banners />} path={"/banners"} />
            <Route element={<CategoryPage />} path={"/category"} />


            <Route element={<OrdersPage />} path={"/orders"} />
            <Route element={<OrderAddPage />} path={"/orders/add-order"} />
            <Route element={<OrdersEditPage />} path={"/orders/:order_id"} />

          </Route>


          {/* <Route path='/admin-dashboard' element={<Dashboard />} /> */}

          {/* <Route element={<Dashboard />} path={'/'} /> */}
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
