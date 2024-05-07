import React, { useState } from "react";
import slideImg1 from "../../assets/img/homeslide1.jpg";
import slideImg2 from "../../assets/img/homeslide2.jpg";
import slideImg3 from "../../assets/img/homeslide3.jpg";

const SlideImg = () => {
    const slideData = [
        {
            img: slideImg1,
            title: `Best fitness in the town`,
        },
        {
            img: slideImg2,
            title: `Provide quality and unique solutions`,
        },
        {
            img: slideImg3,
            title: `Careful consideration and analysis`,
        },
    ];
    const [slideCount, setSlideCount] = useState(0);

    const preSlide = () => {
        slideCount === 0
            ? setSlideCount(slideData.length - 1)
            : setSlideCount(slideCount - 1);
    };

    const nextSlide = () => {
        slideCount === slideData.length - 1
            ? setSlideCount(0)
            : setSlideCount(slideCount + 1);
    };

    return (
        <>
            <div className="overflow-hidden relative w-[100%]">
                <div
                    className="flex transition-transform "
                    style={{ transform: `translateX(-${slideCount * 100}%)` }}
                >
                    {slideData.map((item, i) => (
                        <div className="min-w-full min-h-96 " key={i}>
                            <div
                                className=" min-h-96 text-center flex flex-col justify-center items-center "
                                style={{
                                    background: `url(${item.img}) no-repeat `,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <span className="text-white text-2xl sm:text-4xl font-extrabold my-1 sm:mb-5 ">
                                    MAKE{" "}
                                    <span className="text-red-700">YOUR</span>{" "}
                                    BODY SHAPE
                                </span>
                                <span className=" font-bold text-md sm:text-3xl text-slate-200 mb-2 sm:mb-6">
                                    {item.title}
                                </span>
                                <button className="bg-slate-300 rounded-2xl px-5 py-1 text-center sm:text-2xl font-medium hover:bg-slate-200 text-xl cursor-pointer">
                                    Let's Start Today
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 w-full flex justify-between">
                    <button onClick={() => preSlide()} className="text-4xl">
                        ◀
                    </button>
                    <button onClick={() => nextSlide()} className="text-4xl">
                        ▶
                    </button>
                </div>
                <div className="absolute bottom-0 flex justify-center items-center w-full gap-2">
                    {slideData.map((_, i) => (
                        <span
                            onClick={() => setSlideCount(i)}
                            className={` bg-white rounded-full ${
                                slideCount === i
                                    ? "p-2 bg-white"
                                    : "p-1 bg-slate-400"
                            }`}
                        ></span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SlideImg;
