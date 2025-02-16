import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import {SuspenseContainer} from "../utils/index"

const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Contact = lazy(() => import("../pages/Contact"))
const Layout = lazy(() => import("../pages/Layout"))
const Shop = lazy(() => import("../pages/admin/Shop"))
const Videos = lazy(() => import("../pages/admin/groups/Videos"))
const Text = lazy(() => import("../pages/admin/groups/Text"))
const Table = lazy(() => import("../pages/admin/groups/Table"))
const Admin = lazy(()=> import("../pages/admin/Admin"))
const Users = lazy(()=> import("../pages/admin/User"))
const Groups = lazy(()=> import("../pages/admin/Groups"))
const Car  = lazy(() => import("../pages/admin/Car"));
const CreateCars  = lazy(() => import("../pages/admin/CreateCar"));
const Analytic  = lazy(() => import("../pages/admin/Analytic"));
const Likes  = lazy(() => import("../pages/admin/Likes"));
const Reports  = lazy(() => import("../pages/admin/Reports"));
const Settings  = lazy(() => import("../pages/admin/Settings"));



const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<SuspenseContainer><Layout /></SuspenseContainer>}>
        <Route path='/'  element={<SuspenseContainer><Home /></SuspenseContainer>} />
        <Route path="about" element={<SuspenseContainer><About /></SuspenseContainer>} />
        <Route path="contact" element={<SuspenseContainer><Contact /></SuspenseContainer>} />
      </Route>

      <Route path="admin" element={<SuspenseContainer><Admin /></SuspenseContainer>}>
      <Route path="car" element={<SuspenseContainer><Car /></SuspenseContainer>} />
      <Route path="createcars" element={<SuspenseContainer><CreateCars /></SuspenseContainer>} />
      <Route path="groups" element={<SuspenseContainer><Groups /></SuspenseContainer>}>
          <Route index element={<SuspenseContainer><Videos /></SuspenseContainer>} />
          <Route path="table" element={<SuspenseContainer><Table /></SuspenseContainer>} />
          <Route path="text" element={<SuspenseContainer><Text /></SuspenseContainer>} />
        </Route>
        <Route path="users" element={<SuspenseContainer><Users /></SuspenseContainer>} />
        <Route path="shop" element={<SuspenseContainer><Shop /></SuspenseContainer>} />
        <Route path="analytic" element={<SuspenseContainer><Analytic /></SuspenseContainer>} />
        <Route path="likes" element={<SuspenseContainer><Likes /></SuspenseContainer>} />
        <Route path="reports" element={<SuspenseContainer><Reports /></SuspenseContainer>} />
        <Route path="settings" element={<SuspenseContainer><Settings /></SuspenseContainer>} />
      </Route>
    </Routes>
  )
}

export default RouterMain

