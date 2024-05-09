import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SlideImg from "../components/Section/SlideImg";
import Features from "../components/Section/Features";
import HomeAbout from "../components/Section/HomeAbout";
import Discount from "../components/Section/Discount";
import OurPackage from "../components/Section/OurPackage";
import Footer from "../components/Footer/Footer";

const GuestHome = () => {
    return (
        <>
            <Navbar />
            <SlideImg />
            <Features />
            <HomeAbout />
            <OurPackage />
            <Discount />
            <Footer/>
        </>
    );
};

export default GuestHome;
