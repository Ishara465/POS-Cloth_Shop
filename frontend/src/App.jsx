import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import {
  Auth,
  Customer,
  Dashboard,
  Home,
  Inventory,
  Product,
  Return,
  Sales,
  Supplier,
} from "./pages/index.js";
import DiscountTable from "./components/sales/DiscountTable.jsx";
import Headers from "./shared/Headers.jsx";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Register from "./components/auth/Register.jsx";
import { useSelector } from "react-redux";
import useLoadData from "./hooks/useLoadData.js";
import FullScreenLoader from "./shared/FullScreenLoader.jsx";

function Layout() {
  const location = useLocation();
  const isLoading = useLoadData();
  const hideHeaderRouters = ["/auth"];
  const { isAuth } = useSelector((state) => state.user);

  if (isLoading) return <FullScreenLoader />;

  return (
    <>
      {!hideHeaderRouters.includes(location.pathname) && <Headers />}
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="/auth" element={isAuth ? <Navigate to="/" /> : <Auth />} />

        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <Sales />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/inventory"
          element={
            <ProtectedRoute>
              <Inventory />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/customer"
          element={
            <ProtectedRoute>
              <Customer />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/return"
          element={
            <ProtectedRoute>
              <Return />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/supplier"
          element={
            <ProtectedRoute>
              <Supplier />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

function ProtectedRoute({ children }) {
  const { isAuth } = useSelector((state) => state.user);
  if (!isAuth) {
    return <Navigate to={"/auth"} />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
