import React, { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navList = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "SignUp",
            link: "/signup",
        },
        {
            name: "Login",
            link: "/login",
        },
    ];
    return (
        <>
            <nav className="flex sticky top-0 left-0 justify-between items-center bg-slate-100 px-5 sm:px-10 py-3 z-50 ">
                <div className="flex gap-1 items-center">
                    <div className="">🎮</div>
                    <div className="font-medium">Brand</div>
                </div>
                <div
                    className="sm:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <button className="text-[22px]">&#128473;</button>
                    ) : (
                        <button className="text-[22px]">&#9776;</button>
                    )}
                </div>

                <ul
                    className={`absolute  bg-slate-200 w-full left-0 ${
                        isMenuOpen ? "top-12 " : "top-[-400%] "
                    } transition-all ease-in duration-300 sm:flex sm:static sm:w-auto sm:bg-transparent sm:transition-none`}
                >
                    {navList.map((item, i) => (
                        <li key={i} className="px-5 py-3 sm:py-2">
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
