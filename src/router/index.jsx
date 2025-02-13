import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SuspenseContainer } from '../utils'
const Home = lazy(()=> import("../pages/Home"))
const About = lazy(()=> import("../pages/About"))
const Contact = lazy(()=> import("../pages/Contact"))
const Layout = lazy(()=> import("../pages/Layout"))


const RouterMain = () => {
  return (
    <Routes>
        <Route path='/' element={<SuspenseContainer><Layout/></SuspenseContainer>}>
            <Route path='/' element={<SuspenseContainer><Home/></SuspenseContainer>}/>
            <Route path='/about' element={<SuspenseContainer><About/></SuspenseContainer>}/>
            <Route path='/contact' element={<SuspenseContainer><Contact/></SuspenseContainer>}/>
        </Route>
    </Routes>
  )
}

export default RouterMain