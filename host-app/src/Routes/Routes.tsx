import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/landing/LandingPage'
import { LoginPage } from '../pages/login/LoginPage'
import { SignUpPage } from '../pages/signup/SignUpPage'
import { ProductsPage } from '../pages/products/ProductsPage'
import Navbar from '../components/Navbar'

export const RoutesComponent = () => {
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
          <Route path='/app' element={<Navbar />}>
            <Route path='products' element={<ProductsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}