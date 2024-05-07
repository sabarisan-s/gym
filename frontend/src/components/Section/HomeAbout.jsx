import React from "react";
import HomeAboutImg from "../../assets/img/homeabout.jpg";
const HomeAbout = () => {
    return (
        <div className="flex flex-col sm:flex-row px-5 items-center justify-center">
  
            <div class="sm:w-1/2">
                <img src={HomeAboutImg} alt="" />
            </div>
            <div class="sm:w-1/2 px-5 mt-5 sm:ml-5 py-4 bg-slate-300">
                <h3 className="font-bold text-2xl " >About Us</h3>
                <p className="mb-4">
                    FIT <span>S</span>TAR was conceptualised with the vision to
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
                <a href="/about" class="hover:bg-slate-500 rounded-2xl py-2 px-4 bg-slate-600 mt-2">
                    Read more
                </a>
            </div>
        </div>
    );
};

export default HomeAbout;
