import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Forgot from "./components/auth/forgot.jsx";
import Contact from "./components/home/contact.jsx";
import About from "./components/home/About.jsx";
import Shop from "./components/home/shop/Shop.jsx";
import SearchResult from "./components/home/SearchResult.jsx";
import Cart from "./components/home/shop/Cart.jsx";
import Auth from "./components/auth/Auth.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<Home />} />
     
     <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/search" element={<SearchResult/>} />


 <Route path="/auth" element={<Auth />}>
      <Route path="/auth/register" element={<Register />} />
       <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/forgot-password" element={<Forgot />} />

      </Route>
    </Routes>
  );
}

export default App;