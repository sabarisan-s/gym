import React from "react";
import ProgressSvg from "../../assets/svg/features/progress.svg";
import WorkOutSvg from "../../assets/svg/features/workout.svg";
import SelfDefenseSvg from "../../assets/svg/features/selfdefense.svg";
import NutritionSvg from "../../assets/svg/features/nutrition.svg";

const Features = () => {
    const featuresData = [
        {
            icon: ProgressSvg,
            heading: "PROGRESSION",
            text: "A principle of exercise that states that a person should start slowly and increase exercise gradually",
        },
        {
            icon: WorkOutSvg,
            heading: "WORKOUT",
            text: "            A practice or exercise to test or improve one's fitness for athletic competition, ability, or performance.",
        },
        {
            icon: NutritionSvg,
            heading: "NUTRITION",
            text: " Nutrition is how food affects the health of the body. Food is essential - it provides vital for survival.",
        },
        {
            icon: SelfDefenseSvg,
            heading: "SELF DEFENSE",
            text: "Going to gym, you only get out what you put in. While you may be able to say to yourself 'not right now'",
        },
    ];
    return (
        <>
        <h1 className="my-4 font-extralight text-4xl text-center">Our Features</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">

            {featuresData.map((item, i) => (
                <div
                    key={i}
                    className="flex items-center flex-col justify-center border bg-red-600 lg:mx-4 mx-5 my-5"
                >
                    <img src={item.icon} alt="" className="mt-4" />
                    <h3 className="text-black font-bold my-2">
                        {item.heading}
                    </h3>
                    <p className="text-slate-300 px-5  mb-4">{item.text}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default Features;
