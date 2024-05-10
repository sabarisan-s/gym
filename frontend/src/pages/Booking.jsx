import React, { useEffect, useState } from "react";
import Label from "../components/Input/Label";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import axiosInstance from "../axiosInstance";

const Booking = () => {
    const [homePage, setHomePage] = useState(false);
    const [navHide, setNavHide] = useState(true);
    const [profile, setProfile] = useState(false);
    const [price, setPrice] = useState('');
    const packageData = [
        {
            heading: "WEIGHTLOSS PROGRAMS",
            text: "The least intrusive weight loss methods, and those most often recommended, are adjustments to eating patterns",
            price: 1299,
        },
        {
            heading: "PERSONAL TRAINING",
            text: "The scope of practice for a personal trainer has a primary focus on prevention and involves enhancing components",
            price: 1199,
        },
        {
            heading: "FITNESS ASSESSMENT",
            text: " Fitness assessments are a series of tests that measures and monitors student's physical fitness level",
            price: 999,
        },
        {
            heading: "WORKOUT CHART",
            text: "Individuals can increase fitness by increasing physical activity levels. Increases in muscle size from resistance training",
            price: 1299,
        },
        {
            heading: "CROSSFIT",
            text: "Crossfit is a branded fitness regimen that involves constantly varied functional movements performed at high intensity.",
            price: 999,
        },
        {
            heading: "DIET COUNSELING",
            text: "DIET COUNSELING There is a substantial market for products which claim to make weight loss easier, quicker, cheaper, more reliable, or less",
            price: 1399,
        },
        {
            heading: "Yoga",
            text: "Power yoga is both a strength building and cardio exercise that significantly improves lean muscle tone while helping reduce body fat.",
            price: 1199,
        },
    ];

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const { data } = await axiosInstance.get("/user");
        console.log(data);
        setProfile(data);
    };

    console.log(price);
    return (
        <div>
            <Navbar profile={profile} navHide={navHide} />
            <div className="w-11/12 sm:w-1/2 mx-auto border my-5 px-5 py-5">
                <div className="mb-4 text-xl">
                    User Name : {profile && profile.user.name}
                </div>
                <div className="mb-4 text-xl">
                    User Phone : {profile && profile.user.phone}
                </div>
                <div className="mb-4 text-xl">
                    User Email : {profile && profile.user.email}
                </div>
                <div className="flex mb-4 ">
                    <label htmlFor="package" className="text-xl">
                        Packages
                    </label>
                    <select
                        id="package"
                        className="border-4 focus:shadow-md outline-none  w-full rounded-lg  mx-2  "
                        name="package"
                    >
                        <option className="px-3 text-center text-md">
                            ----Select here----
                        </option>
                        {packageData.map((item, i) => (
                            <option
                                key={i}
                                className="px-3 text-center text-md"
                                value={item.heading + " " + item.price}
                                onClick={(e) => setPrice(e.value)}
                            >
                                {item.heading}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex mb-4">
                    <label htmlFor="duration" className="text-xl">
                        Durations
                    </label>
                    <select
                        id="duration"
                        className="border-4 focus:shadow-md outline-none  w-full rounded-lg  mx-2  "
                        name="duration"
                    >
                        <option className="px-3 text-center text-md">
                            ----Select here----
                        </option>

                        <option
                            className="px-3 text-center text-md"
                            value={"3Months"}
                        >
                            3 Months
                        </option>
                        <option
                            className="px-3 text-center text-md"
                            value={"6Months"}
                        >
                            6 Months
                        </option>
                        <option
                            className="px-3 text-center text-md"
                            value={"1Year"}
                        >
                            1 Year
                        </option>
                    </select>
                </div>
                <div className="flex mb-4">
                    <label htmlFor="stage" className="text-xl">
                        Stage
                    </label>

                    <select
                        id="stage"
                        className="border-4 focus:shadow-md outline-none  w-full rounded-lg  mx-2  "
                        name="stage"
                    >
                        <option className="px-3 text-center text-md">
                            ----Select here----
                        </option>
                        <option
                            className="px-3 text-center text-md"
                            value="Beginner"
                        >
                            Beginner
                        </option>
                        <option
                            className="px-3 text-center text-md"
                            value="Pro"
                        >
                            Pro
                        </option>
                        <option
                            className="px-3 text-center text-md"
                            value="ProMax"
                        >
                            Pro Max
                        </option>
                    </select>
                </div>

                <div className="mb-4 text-xl">Price :</div>
            </div>
            <Footer homePage={homePage} />
        </div>
    );
};

export default Booking;
