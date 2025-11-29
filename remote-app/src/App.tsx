import { useState } from "react";
import Landing from "./components/landing/Landing";
import MyProducts from "./components/products/MyProducts";
import "./styles.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [showLanding, setShowLanding] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
    setShowLanding(true);
    // Clear stored auth token
    localStorage.removeItem('authToken');
  };

  const handleGetStarted = () => {
    setShowLanding(false);
  };

  // Show landing page first
  if (showLanding && !isLoggedIn) {
    return <Landing onLogin={handleGetStarted} />;
  }

  // Show main app when logged in
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
