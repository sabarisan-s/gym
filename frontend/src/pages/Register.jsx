import React, { useEffect, useState } from "react";
import PassInput from "../components/Input/PassInput";
import Label from "../components/Input/Label";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import axiosInstance from "../axiosInstance";
import { toast } from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate();
    const [navActive, setNavActive] = useState(false);
    useEffect(() => {
        setNavActive(2);
    }, []);
    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });

    const handleSubmit = async () => {
        try {
            const { data } = await axiosInstance.post("/signup", {
                ...userData,
            });
            if (data && data.token) {
                localStorage.setItem("token", data.token);

                toast.success(data.message);
                navigate("/home");
            }
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An unexpected error occurred.Please try again");
            }
        }
    };
    return (
        <div>
            <Navbar navActive={navActive} />

            <div className=" border shadow-lg rounded-lg shadow-red-100 border-red-400 mx-auto w-11/12 lg:w-1/3 sm:w-1/2 px-5 my-16">
                <div className=" text-center my-5 font-bold text-4xl ">
                    SignUp
                </div>
                <Label name={"name"} heading={"Name"}>
                    <div className="my-2">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full border-4 rounded-md focus:shadow-lg outline-none px-5 text-lg py-1"
                            value={userData.name}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    name: e.target.value,
                                })
                            }
                        />
                    </div>
                </Label>
                <Label name={"phone"} heading={"Phone No"}>
                    <div className="my-2">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="9876543210"
                            className="w-full border-4 rounded-md focus:shadow-lg outline-none px-5 text-lg py-1"
                            value={userData.phone}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    phone: e.target.value,
                                })
                            }
                        />
                    </div>
                </Label>
                <Label name={"email"} heading={"Email"}>
                    <div className="my-2">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full border-4 rounded-md focus:shadow-lg outline-none px-5 text-lg py-1"
                            value={userData.email}
                            onChange={(e) =>
                                setUserData({
                                    ...userData,
                                    email: e.target.value,
                                })
                            }
                        />
                    </div>
                </Label>
                <Label inputName={"password"} heading={"Password"}>
                    <PassInput userData={userData} setUserData={setUserData} />
                </Label>
                <div className="flex justify-center my-2">
                    <button
                        onClick={handleSubmit}
                        className="bg-red-500 text-white rounded-lg px-5 py-2  hover:bg-red-400"
                    >
                        SignUp
                    </button>
                </div>
                <p className="text-sm text-center mt-4 mb-2">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-primary underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
