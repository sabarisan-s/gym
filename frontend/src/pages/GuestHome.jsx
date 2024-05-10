import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SlideImg from "../components/Section/SlideImg";
import Features from "../components/Section/Features";
import HomeAbout from "../components/Section/HomeAbout";
import Discount from "../components/Section/Discount";
import OurPackage from "../components/Section/OurPackage";
import Footer from "../components/Footer/Footer";

const GuestHome = () => {
    const [navActive, setNavActive] = useState(false);
    useEffect(() => {
        setNavActive(1);
    }, []);

    return (
        <>
            <Navbar navActive={navActive} />
            <SlideImg />
            <Features />
            <HomeAbout />
            <OurPackage navActive={navActive}/>
            <Discount />
            <Footer />
        </>
    );
};

export default GuestHome;
