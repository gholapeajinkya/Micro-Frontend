import React, { useState } from "react";
import "../../styles.css";

interface LoginProps {
  onLogin?: (username: string, password: string) => void;
  onSwitchToSignUp?: () => void;
}

const Login = (props: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const validateForm = () => {
    const newErrors = { username: "", password: "" };
    
    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }
    
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return !newErrors.username && !newErrors.password;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setLoginError("");
    
    try {
      // Call FakeStore API for authentication
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        // Login successful
        console.log("Login successful:", data);
        
        if (props.onLogin) {
          props.onLogin(username, password);
        }
        
        // You can store the token for future API calls
        localStorage.setItem('authToken', data.token);
      } else {
        // Login failed
        setLoginError("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Network error. Please try again.");
    }
    
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "username") {
      setUsername(value);
      if (errors.username) {
        setErrors(prev => ({ ...prev, username: "" }));
      }
    } else {
      setPassword(value);
      if (errors.password) {
        setErrors(prev => ({ ...prev, password: "" }));
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <div className="logo-icon">🔐</div>
          </div>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Please sign in to your account</p>
        </div>

        {loginError && (
          <div className="error-banner">
            {loginError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <div className="input-container">
              <div className="input-icon">👤</div>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className={`form-input ${errors.username ? "error" : ""}`}
                placeholder="Enter username"
                disabled={isLoading}
              />
            </div>
            {errors.username && (
              <div className="error-message">{errors.username}</div>
            )}
          </div>

          <div className="form-group">
            <div className="input-container">
              <div className="input-icon">🔒</div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`form-input ${errors.password ? "error" : ""}`}
                placeholder="Enter password"
                disabled={isLoading}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" disabled={isLoading} />
              <span className="checkbox-checkmark"></span>
              Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className={`login-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="button-spinner">
                <div className="spinner-ring"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p className="signup-text">
            Don't have an account?{" "}
            <button 
              type="button"
              className="signup-link"
              onClick={props.onSwitchToSignUp}
              disabled={isLoading}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;