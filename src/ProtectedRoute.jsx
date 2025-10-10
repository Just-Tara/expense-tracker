
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("authToken"); // or your actual login state

  return isLoggedIn ? children : <Navigate to="/login-page" replace />;
}

export default ProtectedRoute;
