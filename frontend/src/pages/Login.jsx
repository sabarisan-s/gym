import React, { useEffect, useState } from "react";
import PassInput from "../components/Input/PassInput";
import Label from "../components/Input/Label";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import axiosInstance from "../axiosInstance";
import { toast } from "react-hot-toast";
import WaitLoading from "../components/Loading/WaitLoading";

const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [navActive, setNavActive] = useState(false);
    useEffect(() => {
        setNavActive(3);
    }, []);

    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const { data } = await axiosInstance.post("/login", {
                ...userData,
            });
            if (data.token) {
                localStorage.setItem("token", data.token);
                navigate("/home");
                toast.success(data.message);
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
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <Navbar navActive={navActive} setNavActive={setNavActive} />
            <div className=" border shadow-lg rounded-lg shadow-red-100 border-red-400 mx-auto w-11/12 lg:w-4/6  sm:w-1/2 px-5 my-16">
                <div className=" text-center my-5 font-bold text-4xl ">
                    Login
                </div>

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

                <Label name={"password"} heading={"Password"}>
                    <PassInput setUserData={setUserData} userData={userData} />
                </Label>

                <div className="flex justify-center my-2">
                    {isLoading ? (
                        <WaitLoading />
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="bg-red-500 text-white rounded-lg px-5 py-2  hover:bg-red-400"
                        >
                            Login
                        </button>
                    )}
                </div>

                <p className="text-sm text-center mt-4 mb-2">
                    Not Registered Yet?{" "}
                    <Link
                        to="/signup"
                        className="font-medium text-primary underline"
                    >
                        Create an Account
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
