import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Dashboard from "./Dashboard";
import TransactionPage from "./TransactionPage";
import Settings from "./Settings";
import AddTransaction from "./AddTransaction";
import FullTransaction from "./FullTransaction";
import ChartBox from "./Component/ChartBox";
import LoginPage from "./Oauth/LoginPage";
import SignUpPage from "./Oauth/SigninPage";

function App() {
  const location = useLocation();
  const hideNavBar = location.pathname === "/add-transaction" || location.pathname === "/login-page";

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
        {/* Redirect user to login if not logged in */}
        <Route
          path="/"
          element={
            isLoggedIn? <Dashboard /> : <Navigate to="/login-page" replace />
          }
        />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/transactions"
          element={
            isLoggedIn ? <TransactionPage /> : <Navigate to="/login-page" replace />
          }
        />
        <Route
          path="/settings"
          element={
            <Settings />
          }
        />
        <Route
          path="/add-transaction"
          element={
            isLoggedIn ? <AddTransaction /> : <Navigate to="/login-page" replace />
          }
        />
        <Route
          path="/full-transaction"
          element={
            isLoggedIn ? <FullTransaction /> : <Navigate to="/login-page" replace />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
