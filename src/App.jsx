import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Dashboard from "./Pages/Dashboard";
import TransactionPage from "./TransactionPage";
import Settings from "./Pages/Settings";
import AddTransaction from "./Pages/AddTransaction";
import FullTransaction from "./Pages/FullTransaction";
import ChartBox from "./Component/ChartBox";
import LoginPage from "./Oauth/LoginPage";
import SignUpPage from "./Oauth/SigninPage";
import Onboarding from "./OnboardingFlow/Onboarding";

function App() {
  const location = useLocation();
  const hideNavBar = location.pathname === "/add-transaction" || location.pathname === "/login-page" || location.pathname === "/onboarding";

  const isLoggedIn = localStorage.getItem("authToken"); // or however you track login

  return (
    <div className="bg-white dark:bg-[#0b1220]">
      {!hideNavBar && (
        <>
          <NavBar />
          <ChartBox />
         
        </>
      )}

      <Routes>
 
        <Route path="/" element= { <LoginPage /> } />
        <Route path="/onboarding" element={ <Onboarding/> }/>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/transactions" element={ <TransactionPage/>}/>
        <Route path="/settings" element={ <Settings /> }/>
        <Route path="/add-transaction" element={ <AddTransaction />}/>
        <Route path="/full-transaction" element={ <FullTransaction />}/>
      </Routes>
    </div>
  );
}

export default App;
