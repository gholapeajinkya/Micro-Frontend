import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
const LoginComponent = React.lazy(() => import("remoteApp/Login"));
export const LoginPage = () => {
  const navigate = useNavigate();
  const onSwitchToSignUp = () => {
    navigate("/signup");
  };
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginComponent onSwitchToSignUp={onSwitchToSignUp} />
      </Suspense>
    </div>
  )
}
