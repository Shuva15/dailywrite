import React from 'react'
import Header from './Header'
import Profile from './Profile'
import { Route, Routes } from 'react-router-dom'
import Editor from './Editor'
import Feed from './Feed'

const Dashboard = () => {
  return (
    <div><Header />
    <Routes>
      <Route exact path="/" element={<Feed />} />
      <Route exact path="/write" element={<Editor />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
    </div>
  )
}

export default Dashboard