import { useState } from "react";
import { useNavigate } from "react-router-dom";
import lightBg from "../assets/lightMode.png";



const slides = [
    {
        id: 1,
        title: "Welcome to",
        mainTitle: "TrackrAid",
        description: "Your Smart Partner for Expense Management",
        image: "./src/assets/first-icon.png"
    },
    {
        id: 2,
        title: "Track Easily",
        description: "Add expenses in seconds and monitor spending trends",
        image: "./src/assets/second-icon.jpg"
    },
    {
        id: 3,
        title: "Get Insights",
        description: "Understand your finance with clear visual reports",
        image: "./src/assets/third-icon.png"
    }
]

function Onboarding(params) {


    const navigate = useNavigate();
    
   

    const [current, setCurrent] = useState(0);
    
    const nextSlide = () => {
        if (current < slides.length - 1)
    setCurrent(current + 1);
    };

    const prevSlide = () => {
        if (current > 0 ) 
    setCurrent(current - 1);

    };
    const skip = () => {    
         navigate("/dashboard");
    }
    
    return(
                    <div
            className=" flex flex-col text-center px-5 pr-5 min-h-screen py-2 lg:hidden md:hidden"
            style={{ backgroundImage: `url(${lightBg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
            >
                  <button onClick={skip} className="text-blue-600 text-[17px] absolute top-2 right-5">Skip</button>
            <img  src={slides[current].image} alt="slide-image" className="h-120 mx-auto" />
          <div className="bottom-2 absolute">
            
            <div className="text-center ">
            <h1 className="text-2xl font-bold" >{slides[current].title}</h1>
            <h1 className="text-3xl font-bold text-center">{slides[current].mainTitle}</h1>
            <p className="w-[80%] mx-auto">{slides[current].description}</p>
            </div>
          
            <div className="flex justify-between mt-8">
                {current > 0 && (
                    <button onClick={prevSlide} className="px-4 py-1 rounded-2xl bg-blue-500">Back</button>
                )}
                {current < slides.length - 1 ? (
                    <button onClick={nextSlide} className="px-4 py-1 rounded-2xl bg-blue-600 flex justify-end">Next</button>
                ) : (
                    <button onClick={skip} className="px-4 py-1 rounded-2xl bg-blue-600">Get started</button>
                )}
            </div>
            <div className="flex justify-center mt-4 gap-2 ">
                {slides.map((_, i ) => (
                    <span key={i}
                    className={`w-[10px] h-[10px] rounded-full ${i === current ? "bg-blue-600" : "bg-blue-200"}`}>

                    </span>
                ))}
            </div>
          </div>
         
           
        </div>
    );
}
export default Onboarding