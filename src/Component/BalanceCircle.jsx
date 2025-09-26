import React,{useEffect, useState} from "react";

function BalanceCircle  ({income, expenses}) {
    const [progress, setProgress] = useState(0);
   const remaining = income - expenses;
    const percentLeft = Math.max((remaining / income) * 100, 0);

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
        <div className="flex flex-col">
            <div className="flex items-center justify-center w-25 h-25 rounded-full " 
                    style={{background: 
                        `conic-gradient(#22c55e ${progress}%, 
                        #e5e7eb ${progress}%)`}}
            >
                <div className="flex text-gray-700 text-[12px] text-center px-4 justify-center items-center w-16 h-16 rounded-full bg-blue-50 
                ">
                    {Math.round(progress)}% income saved
                </div>
            </div>
        </div>
    );

}
export default BalanceCircle;