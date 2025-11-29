import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
const SignUpComponent = React.lazy(() => import("remoteApp/Signup"));
export const SignUpPage = () => {
  const navigate = useNavigate();
  const onSwitchToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpComponent 
          onSignUp={onSwitchToLogin}
          onSwitchToLogin={onSwitchToLogin} 
          goToHome={() => navigate("/")}
        />
      </Suspense>
    </div>
  )
}
