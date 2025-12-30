import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Answers from './pages/Answers'
import Spaces from './pages/Spaces'
import Following from './pages/Following'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/answer" element={<Answers/>} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/following" element={<Following />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
