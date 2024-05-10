import React from "react";
import WeightLossImg from "../../assets/img/weightloss.jpg";
import PersonalTrainingImg from "../../assets/img/personaltraining.jpg";
import FitnessAssessmentImg from "../../assets/img/FITNESSASSESSMENT.jpg";
import WorkoutChartImg from "../../assets/img/WORKOUT CHART.jpg";
import CrossFitImg from "../../assets/img/CROSSFIT.jpg";
import DietCounselingImg from "../../assets/img/dietcounseling.jpg";
import YogaImg from "../../assets/img/Yoga.jpg";
const OurPackage = ({navActive}) => {
    const packageData = [
        {
            img: WeightLossImg,
            heading: "WEIGHTLOSS PROGRAMS",
            text: "The least intrusive weight loss methods, and those most often recommended, are adjustments to eating patterns",
        },
        {
            img: PersonalTrainingImg,
            heading: "PERSONAL TRAINING",
            text: "The scope of practice for a personal trainer has a primary focus on prevention and involves enhancing components",
        },
        {
            img: FitnessAssessmentImg,
            heading: "FITNESS ASSESSMENT",
            text: " Fitness assessments are a series of tests that measures and monitors student's physical fitness level",
        },
        {
            img: WorkoutChartImg,
            heading: "WORKOUT CHART",
            text: "Individuals can increase fitness by increasing physical activity levels. Increases in muscle size from resistance training",
        },
        {
            img: CrossFitImg,
            heading: "CROSSFIT",
            text: "Crossfit is a branded fitness regimen that involves constantly varied functional movements performed at high intensity.",
        },
        {
            img: DietCounselingImg,
            heading: "DIET COUNSELING",
            text: "DIET COUNSELING There is a substantial market for products which claim to make weight loss easier, quicker, cheaper, more reliable, or less",
        },
        {
            img: YogaImg,
            heading: "Yoga",
            text: "Power yoga is both a strength building and cardio exercise that significantly improves lean muscle tone while helping reduce body fat.",
        },
    ];
    return <div >
        <div className="my-5" id="packages">
            <div className="text-center  text-5xl my-5 font-semibold">
                <h3>Our Packages</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
                {packageData.map((item,i) =>
                <div className="border-4 p-4 text-center shadow-lg" key={i}>
                    <div className="h-[25rem]">

                    <img src={item.img} className="w-full h-full object-cover hover:scale-[0.9] transition-transform duration-200 ease-in-out" alt={item.heading} />
                    </div>
                    <h4 className="text-2xl font-bold my-3">{item.heading}</h4>
                    <p>{item.text}</p>
                    <button className="bg-black my-3 transition-all duration-200 ease-in hover:scale-[1.1] text-white px-4 py-2 rounded-md "> <a href={navActive?'/login':'/booking'}>Book Now</a></button>
                </div>
                )}
            </div>
        </div>
    </div>;
};

export default OurPackage;
