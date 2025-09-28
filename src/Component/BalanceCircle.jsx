import React,{useEffect, useState} from "react";

function BalanceCircle  ({income, expenses}) {
    const [progress, setProgress] = useState(0);
   const remaining = income - expenses;
    const percentLeft = income > 0 ? Math.max((remaining / income) * 100, 0) : 0;

    useEffect(() =>{
        let start = 0;
        const step = () => {
            start += 1;
            if (start<= percentLeft) {
                setProgress(start);
                requestAnimationFrame(step);
            }
        };

        step();

    }, [percentLeft]);
    return(
        <div className="flex  flex-col">
            <div className="flex items-center justify-center w-20 h-20 rounded-full " 
                    style={{background: 
                        `conic-gradient(oklch(62.3% 0.214 259.815) ${progress}%, 
                        oklch(88.5% 0.062 18.334) ${progress}%)`}}
            >
                <div className="flex text-gray-700 font-bold text-[12px] text-center px-4 justify-center items-center w-16 h-16 rounded-full bg-blue-50 
                ">
                    {Math.round(progress)}% income saved
                </div>
            </div>
        </div>
    );

}
export default BalanceCircle;