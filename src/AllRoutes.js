import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestions/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Chatboat from './components/Chatboat/Chatbot'

const AllRoutes = () => {
  return (
      <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Auth" element={<Auth/>}></Route>
            <Route path="/Questions" element={<Questions/>}></Route>
            <Route path="/AskQuestions" element={<AskQuestion/>}></Route>
            <Route path="/Questions/:id" element={<DisplayQuestion/>}></Route>
            <Route path="/Team" element={<Chatboat/>}></Route>
      </Routes>
      </>
  )
}

export default AllRoutes


