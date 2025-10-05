import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Dashboard from "./Dashboard";
import TransactionPage from "./TransactionPage";
import Settings from "./Settings";
import AddTransaction from "./AddTransaction";
import FullTransaction from "./FullTransaction";
import ChartBox from './Component/ChartBox';


  function App() {
 const location = useLocation();
  const hideNavBar = location.pathname === "/add-transaction";

  return (
    <div className="bg-white dark:bg-[#0b1220]">
      {!hideNavBar && (
        <>
         <NavBar /> 
         <ChartBox />
        </>
      )}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/full-transaction" element={<FullTransaction/>} />
        
      </Routes>
    </div>
  ); 
}

export default App;
