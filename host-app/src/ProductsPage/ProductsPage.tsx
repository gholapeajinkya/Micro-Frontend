import React, { Suspense } from "react";
const MyProducts = React.lazy(() => import("remoteApp/MyProducts"));
export const ProductsPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyProducts />
      </Suspense>
    </div>
  )
}
