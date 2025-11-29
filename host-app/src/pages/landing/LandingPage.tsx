import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
const LandingPageComponent = React.lazy(() => import("remoteApp/Landing"));

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPageComponent onLogin={() => navigate('/login')} />
      </Suspense>
    </div>
  )
}
