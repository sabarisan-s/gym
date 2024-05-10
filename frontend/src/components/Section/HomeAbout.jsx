import React from "react";
import HomeAboutImg from "../../assets/img/homeabout.jpg";
const HomeAbout = () => {
    return (
        <div className="flex flex-col sm:flex-row px-5 items-center justify-center">
  
            <div className="sm:w-1/2 flex-grow flex-shrink-0">
                <img src={HomeAboutImg} alt="" />
            </div>
            <div className="sm:w-2/3  px-5 mt-5 sm:ml-5 py-4 bg-slate-300 flex-shrink">
                <h3 className="font-bold text-2xl  " >About Us</h3>
                <p className="mb-4">
                    FIT <span>S</span>TAR was conceptualized with the vision to
                    provide quality and unique solutions to the stakeholders of
                    the fitness industry. Our founders firmly believe that
                    everyone has the right to a healthy lifestyle. People wish
                    and yearn to take adequate steps to improve their immunity.
                    However, they also make some choices that would compromise
                    their well-being. The fitness industry plays a significant
                    role in enhancing the holistic wellness of the individual
                    and the community. Unfortunately, specific centres focus
                    only on weight loss or gain programs.
                </p>
            </div>
        </div>
    );
};

export default HomeAbout;
