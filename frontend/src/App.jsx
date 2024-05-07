import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GuestHome from "./pages/GuestHome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Packages from "./pages/Packages";
import Booking from "./pages/Booking";
import About from "./pages/About";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<GuestHome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/booking" element={<Booking />} />
        </Routes>
    );
};

export default App;
