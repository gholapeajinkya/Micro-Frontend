import React, { useState } from "react";
import "../../styles.css";

interface SignUpProps {
  onSignUp?: (username: string, email: string, password: string) => void;
  onSwitchToLogin?: () => void;
  goToHome?: () => void;
}

const SignUp = (props: SignUpProps) => {
  const [username, setUsername] = useState("johndoe");
  const [email, setEmail] = useState("johndoe@buynest.com");
  const [password, setPassword] = useState("12345678");
  const [confirmPassword, setConfirmPassword] = useState("12345678");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({ 
    username: "", 
    email: "", 
    password: "", 
    confirmPassword: "" 
  });
  const [signUpError, setSignUpError] = useState("");

  const validateForm = () => {
    const newErrors = { username: "", email: "", password: "", confirmPassword: "" };
    
    if (!username.trim()) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return !newErrors.username && !newErrors.email && !newErrors.password && !newErrors.confirmPassword;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setSignUpError("");
    
    try {
      // Call FakeStore API for user creation
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Date.now(),
          email: email,
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Sign up successful
        console.log("Sign up successful:", data);
        alert("Account created successfully! Please log in.");
        
        if (props.onSignUp) {
          props.onSignUp(username, email, password);
        }
      } else {
        setSignUpError("Failed to create account. Please try again.");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      setSignUpError("Network error. Please try again.");
    }
    
    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    switch (field) {
      case "username":
        setUsername(value);
        if (errors.username) {
          setErrors(prev => ({ ...prev, username: "" }));
        }
        break;
      case "email":
        setEmail(value);
        if (errors.email) {
          setErrors(prev => ({ ...prev, email: "" }));
        }
        break;
      case "password":
        setPassword(value);
        if (errors.password) {
          setErrors(prev => ({ ...prev, password: "" }));
        }
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        if (errors.confirmPassword) {
          setErrors(prev => ({ ...prev, confirmPassword: "" }));
        }
        break;
    }
  };

  return (
    <div className="login-container signup-container">
      <div className="login-background">
        <div className="login-shapes">
          <div className="shape shape-1 signup-shape-1"></div>
          <div className="shape shape-2 signup-shape-2"></div>
          <div className="shape shape-3 signup-shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="login-card signup-card">
        <div className="login-header">
          <div className="login-logo" onClick={props.goToHome} style={{ cursor: 'pointer' }}>
            <div className="logo-icon">🚀</div>
          </div>
          <h1 className="login-title">Create Account</h1>
          <p className="login-subtitle">Join us today and start your journey</p>
        </div>

        {signUpError && (
          <div className="error-banner">
            {signUpError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form signup-form">
          <div className="form-group">
            <div className="input-container">
              <div className="input-icon">👤</div>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className={`form-input ${errors.username ? "error" : ""}`}
                placeholder="Choose a username"
                disabled={isLoading}
              />
            </div>
            {errors.username && (
              <div className="error-message">{errors.username}</div>
            )}
          </div>

          <div className="form-group">
            <div className="input-container">
              <div className="input-icon">✉️</div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`form-input ${errors.email ? "error" : ""}`}
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <div className="error-message">{errors.email}</div>
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
                placeholder="Create a password"
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

          <div className="form-group">
            <div className="input-container">
              <div className="input-icon">🔐</div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                className={`form-input ${errors.confirmPassword ? "error" : ""}`}
                placeholder="Confirm your password"
                disabled={isLoading}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={isLoading}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>

          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" disabled={isLoading} required />
              <span className="checkbox-checkmark"></span>
              I agree to the Terms & Conditions
            </label>
          </div>

          <button
            type="submit"
            className={`login-button signup-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="button-spinner">
                <div className="spinner-ring"></div>
                <span>Creating account...</span>
              </div>
            ) : (
              <span>Create Account</span>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p className="signup-text">
            Already have an account?{" "}
            <button 
              type="button"
              className="signup-link"
              onClick={props.onSwitchToLogin}
              disabled={isLoading}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;