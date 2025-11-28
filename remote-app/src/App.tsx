import React, { useState } from "react";
import "./styles.css";
import MyProducts from "./MyProducts";
import AuthContainer from "./AuthContainer";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const handleLogin = (username: string, password: string) => {
    // Simple login simulation - in real app, you'd validate with backend
    if (username && password) {
      setIsLoggedIn(true);
      setCurrentUser(username);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
    // Clear stored auth token
    localStorage.removeItem('authToken');
  };

  if (!isLoggedIn) {
    return <AuthContainer onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <div className="app-header">
        <h1>Remote-App</h1>
        <div className="user-info">
          <span>Welcome, {currentUser}!</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
      <MyProducts />
    </div>
  );
}
