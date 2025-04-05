import { Route, BrowserRouter, Routes } from "react-router-dom";
import {
  Customer,
  Dashboard,
  Home,
  Inventory,
  Product,
  Return,
  Sales,
} from "./pages/index.js";
import Headers from "./shared/Headers.jsx";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
        <Route path="/return" element={<Return />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
