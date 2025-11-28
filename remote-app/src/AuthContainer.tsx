import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

interface AuthContainerProps {
  onLogin?: (username: string, password: string) => void;
}

const AuthContainer = ({ onLogin }: AuthContainerProps) => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleLogin = (username: string, password: string) => {
    console.log("User logged in:", { username, password });
    // Pass login success to parent App component
    if (onLogin) {
      onLogin(username, password);
    }
  };

  const handleSignUp = (username: string, email: string, password: string) => {
    console.log("User signed up:", { username, email, password });
    // Handle successful sign up - auto login, redirect, etc.
    setIsLoginMode(true); // Switch to login after successful signup
  };

  const switchToSignUp = () => {
    setIsLoginMode(false);
  };

  const switchToLogin = () => {
    setIsLoginMode(true);
  };

  return (
    <div className="auth-container">
      <div className={`form-transition ${isLoginMode ? 'login-active' : 'signup-active'}`}>
        {isLoginMode ? (
          <Login 
            onLogin={handleLogin}
            onSwitchToSignUp={switchToSignUp}
          />
        ) : (
          <SignUp 
            onSignUp={handleSignUp}
            onSwitchToLogin={switchToLogin}
          />
        )}
      </div>
    </div>
  );
};

export default AuthContainer;