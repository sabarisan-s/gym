import React from "react";

const Input = ({ name, placeholder }) => {
    return (
        <div>
            <div className="my-2">
                <input
                    type="text"
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    className="w-full border-4 rounded-md focus:shadow-lg outline-none px-5 text-lg py-1"
                />
            </div>
        </div>
    );
};

export default Input;
