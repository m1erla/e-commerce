import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Error404";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Cart from "./pages/Cart";
import ProtectedRoute from "./pages/ProtectedRoute";
import Profile from "./Profile";
import Admin from "./pages/Admin";
import AdminHome from "./pages/Admin/Home";
import AdminOrders from "./pages/Admin/Orders";
import AdminProducts from "./pages/Admin/Products";
import AddProduct from "./pages/Admin/Products/AddProduct";
import AdminProductDetail from "./pages/Admin/AdminProductDetail"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<ProtectedRoute admin={true} />}>
          <Route path="/admin" element={<Admin />} />
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/products/add" element={<AddProduct />} />
            <Route
              path="/admin/products/:product_id"
              element={<AdminProductDetail />}
            />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;