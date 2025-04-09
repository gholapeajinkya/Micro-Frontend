import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../HomePage/HomePage'
import { ProductsPage } from '../ProductsPage/ProductsPage'
import { CartPage } from '../CartPage/CartPage'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

export const RoutesComponent = (props: any) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index element={<Navigate to="/home" />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}