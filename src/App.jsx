import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Dashboard from "./Dashboard";
import TransactionPage from "./TransactionPage";
import Settings from "./Settings";
import AddTransaction from "./AddTransaction";
import FullTransaction from "./FullTransaction";

function App() {
  const location = useLocation();
  const hideNavBar = location.pathname === "/add-transaction";

  return (
    <>
      {!hideNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/full-transaction" element={<FullTransaction/>} />
        
      </Routes>
    </>
  );
}

export default App;
