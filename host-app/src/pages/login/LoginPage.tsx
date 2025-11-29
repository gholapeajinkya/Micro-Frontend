import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
const LoginComponent = React.lazy(() => import("remoteApp/Login"));
export const LoginPage = () => {
  const navigate = useNavigate();
  const onSwitchToSignUp = () => {
    navigate("/signup");
  };

  const onLogin = async (username: string, password: string) => {

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        // Simulate storing an auth token
        localStorage.setItem('authToken', 'dummy-token');
        resolve();
        navigate("/app/products");
      }, 1000);
    });
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginComponent
          onLogin={onLogin}
          onSwitchToSignUp={onSwitchToSignUp}
          goToHome={() => navigate("/")}
        />
      </Suspense>
    </div>
  )
}
