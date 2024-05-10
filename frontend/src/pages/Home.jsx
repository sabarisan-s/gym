import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import SlideImg from "../components/Section/SlideImg";
import Features from "../components/Section/Features";
import HomeAbout from "../components/Section/HomeAbout";
import OurPackage from "../components/Section/OurPackage";
import Footer from "../components/Footer/Footer";
import axiosInstance from '../axiosInstance'

const Home = () => {
    const [homePage, setHomePage] = useState(false);
    const [profile, setProfile] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const {data}=await axiosInstance.get('/user')
        console.log(data);
        setProfile(data)
    };

    return (
        <>
            <Navbar profile={profile}/>
            <SlideImg />
            <Features />
            <HomeAbout />
            <OurPackage />
            <Footer homePage={homePage} />
        </>
    );
};

export default Home;
