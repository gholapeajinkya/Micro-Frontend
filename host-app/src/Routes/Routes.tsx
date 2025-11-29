import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/landing/LandingPage'
import { LoginPage } from '../pages/login/LoginPage'
import { SignUpPage } from '../pages/signup/SignUpPage'

export const RoutesComponent = (props: any) => {
  const basename = process.env.NODE_ENV === 'production' 
    ? '/Micro-Frontend/host-app' 
    : '/';
  
  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          {/* <Route index element={<Navigate to="/products" />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/cart' element={<CartPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}