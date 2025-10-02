
import { useState } from "react";
function ThemeModal(params) {
   
    const [open, setOpen] = useState(false)
    comst [ThemeModal, setTheme] = useState ("light");

    const applyTheme = (value) => {setTheme(value);

    document.documentElement.classList.toggle("dark", value === "dark");
    setOpen(false);
};
return (
    <>
    <button onClick={() => setOpen(true)
    } className="">Theme Settings     
    </button>
    {open && (
        <div><h2>
            Choose a thee</h2>
    <label htmlFor="">
        <input type="radio"
                name="theme"
                value="light"
                checked={theme === light} 
                onChange={() => applyTheme("light")}/>
        </label>        
    </div>
    )} 
    </>
)
}
export default ThemeModal;