import { useContext, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext.jsx";

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="p-5 h-screen bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-5">Settings</h1>
      <p className="uppercase pl-3 mb-3 text-xs text-gray-600 dark:text-gray-300"> Theme </p>      
      <div  className="cursor-pointer px-4 py-2 rounded-lg border mb-6 border-gray-200 bg-white dark:bg-gray-800">
        
        <button onClick={() => setOpen(true)} className="cursor-pointer">Change Theme</button>
      </div>

     
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-[80%] max-w-sm">
            <h2 className="text-lg font-bold mb-4 text-center">
              Theme Settings
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {["light", "dark"].map((mode) => (
                <label
                  key={mode}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="theme"
                    value={mode}
                    checked={theme === mode}
                    onChange={() => setTheme(mode)}
                  />
                  <span className="capitalize">{mode}</span>
                </label>
              ))}
            </div>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <p className="uppercase pl-3 mb-3 text-xs text-gray-600 dark:text-gray-300"> Currency</p>   
        <select name="" id="" className="cursor-pointer px-4 py-2 rounded-lg w-full border mb-6 border-gray-200 bg-white dark:bg-gray-800">
          <option value="">Currency</option>
        </select>
    </div>
  );
}
