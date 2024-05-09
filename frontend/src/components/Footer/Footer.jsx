import React from "react";
import {
    FaAngleRight,
    FaClock,
    FaCompress,
    FaInstagram,
    FaLocationArrow,
    FaPhone,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    const quickLinks = [
        { name: "Home" ,link:'/'},
        { name: "Booking",link:'/booking' },
        { name: "signUP",link:'/signup' },
        { name: "Login",link:'/login' },
    ];

    const packageLinks = [
        { name: "WeightLoss Programs" },
        { name: "Personal Training" },
        { name: "Diet Counseling" },
        { name: "Workout Chart" },
        { name: "CrossFit" },
    ];

    const timeLinks = [
        { day: "Monday- Saturday", time: "5.00am -10.00pm" },
        { day: "Sunday", time: "5.00am -1pm" },
    ];

    return (
        <footer className="bg-gray-600 text-white overflow-x-hidden ">
            <div className=" grid  sm:grid-cols-2 lg:grid-cols-3 px-5 ">
                <div className="flex flex-col my-3">
                    <h3 className="text-xl text-white font-bold mb-3">
                        Quick Links
                    </h3>
                    {quickLinks.map((item, i) => (
                        <a
                            href={item.link}
                            key={i}
                            className="flex items-center hover:scale-[1.1] transition-all duration-200  "
                        >
                            <div className="mx-2">
                                <FaAngleRight className="text-red-600" />
                            </div>
                            <div className="">{item.name}</div>
                        </a>
                    ))}
                </div>

                <div className=" my-3">
                    <h3 className="text-xl text-white font-bold mb-3">
                        Packages
                    </h3>
                    {packageLinks.map((item, i) => (
                        <a
                            href="#packages"
                            key={i}
                            className="flex items-center hover:scale-[1.1] transition-all duration-200  "
                        >
                            <div className="mx-2">
                                <FaAngleRight className="text-red-600" />
                            </div>
                            <div className="">{item.name}</div>
                        </a>
                    ))}
                </div>

                <div className=" my-3">
                    <h3 className="text-xl text-white font-bold mb-3">
                        Working Hours
                    </h3>

                    {timeLinks.map((item, i) => (
                        <a
                            href="#"
                            key={i}
                            className="flex items-center "
                        >
                            <div className="mx-2">
                                <FaAngleRight className="text-red-600" />
                            </div>
                            <div className="">{item.day}</div>

                            <div className="mx-2">
                                <FaClock className="text-red-600" />
                            </div>
                            <div className="">{item.time}</div>
                        </a>
                    ))}
                </div>

                <div className=" my-3">
                    <h3 className="text-xl text-white font-bold mb-3">
                        Contact Info
                    </h3>
                    <div className="flex flex-col">
                        <div
                            
                            className="flex items-center cursor-pointer gap-2   "
                        >
                            <FaPhone className="mx-2 text-red-500" />
                            +91 98765-43210
                        </div>
                        <div
                            
                            className="flex items-center cursor-pointer gap-2  "
                        >
                            <FaCompress className="mx-2 text-red-500" />
                            fitstar@gmail.com
                        </div>
                        <div
                            
                            className="flex items-center cursor-pointer gap-2  "
                        >
                            <FaInstagram className="mx-2 text-red-500" />
                            Instagram
                        </div>
                        <div
                            
                            className="flex items-center cursor-pointer gap-2  "
                        >
                            <FaTwitter className="mx-2 text-red-500" />{" "}
                            X-Twitter
                        </div>
                        <div
                            
                            className="flex items-center cursor-pointer   gap-2"
                        >
                            <FaLocationArrow className="mx-2 text-red-500" />
                            KK-Nagar,Chennai,India
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-[90%] mx-auto" />
            <div className=" text-center font-serif font-semibold py-5 ">
                Created By{" "}
                <span className="text-red-600 font-extrabold">Sabarisan S</span>{" "}
                | All Rights Reserved!
            </div>
        </footer>
    );
};

export default Footer;
