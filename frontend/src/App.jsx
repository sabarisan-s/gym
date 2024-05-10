import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GuestHome from "./pages/GuestHome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Booking from "./pages/Booking";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<GuestHome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/booking" element={<Booking />} />
            </Routes>
        </>
    );
};

export default App;
