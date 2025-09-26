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

}
export default BalanceCircle;