import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Dashboard, Home, Inventory, Product, Sales } from "./pages/index.js";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
