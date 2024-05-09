import React from "react";
import PassInput from "../components/Input/PassInput";
import Label from "../components/Input/Label";
import Input from "../components/Input/Input";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
const Login = () => {
    return (
        <div>
            <Navbar />
            <div className=" border shadow-lg rounded-lg shadow-red-100 border-red-400 mx-auto w-11/12 lg:w-4/6  sm:w-1/2 px-5 my-16">
                <div className=" text-center my-5 font-bold text-4xl ">
                    Login
                </div>

                <Label name={"email"} heading={"Email"}>
                    <Input name={"email"} placeholder={"Enter your email"} />
                </Label>

                <Label name={"password"} heading={"Password"}>
                    <PassInput />
                </Label>

                <div className="flex justify-center my-2">
                    <button className="bg-red-500 text-white rounded-lg px-5 py-2  hover:bg-red-400">
                        Login
                    </button>
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
