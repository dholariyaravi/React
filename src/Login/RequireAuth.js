import { Navigate } from "react-router-dom";
export default function RequireAuth({ children }) {
    const  currentUser  = localStorage.getItem("user1");

  return currentUser   ? children : <Navigate to="/" replace />;
  // userInfo
   
  }