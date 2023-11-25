import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Editor from './Editor'
import Feed from './Feed'

const Dashboard = () => {
  return (
    <div><Header />
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route exact path="/write" element={<Editor />} />
    </Routes>
    </div>
  )
}

export default Dashboard