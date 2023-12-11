import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Register from "./pages/register";
import AboutSection from "./pages/AboutSection";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Success from "./pages/Success";

const App = () => {
  const user=useSelector((state=>state.user.currentUser));
 return (
  <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={user ? <Navigate to="/" />:<Success />}/>
        <Route path="/login" element={user ? <Navigate to="/" />:<Login />}/>
        <Route path="/register" element={user ?<Navigate to="/"/>:<Register />} />
        <Route path="/about" element={<AboutSection />} />
      </Routes>
    </Router>
 );

};


export default App;
