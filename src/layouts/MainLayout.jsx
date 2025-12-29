import React from 'react'
import Navbar from "../components/navbar/Navabr"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <main className="container mt-4">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
