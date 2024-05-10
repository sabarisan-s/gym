import React, { useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const PassInput = ({ userData, setUserData, }) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className="relative mt-2">
            <input
                type={isShow ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border-4 rounded-md focus:shadow-lg outline-none px-5 text-lg py-1"
                value={userData.password}
                onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                }
            />
            <div
                className=" absolute top-0 right-0 m-3 cursor-pointer text-lg"
                onClick={() => setIsShow(!isShow)}
            >
                {isShow ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
        </div>
    );
};

export default PassInput;
