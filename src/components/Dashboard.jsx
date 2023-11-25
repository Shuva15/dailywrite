import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Editor from './Editor'

const Dashboard = () => {
  return (
    <div><Header />
    <Routes>
      <Route exact path="/write" element={<Editor />} />
    </Routes>
    </div>
  )
}

export default Dashboard