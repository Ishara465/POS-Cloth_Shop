import { Route, BrowserRouter, Routes } from "react-router-dom";
import {
  Customer,
  Dashboard,
  Home,
  Inventory,
  Product,
  Return,
  Sales,
  Supplier,
} from "./pages/index.js";
import Headers from "./shared/Headers.jsx";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Headers activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/return" element={<Return />}></Route>
        <Route path="/supplier" element={<Supplier />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
