import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SuspenseContainer } from "../utils/index";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("./about/About"));
const Contact = lazy(() => import("./contact/Contact"));
const Layout = lazy(() => import("../pages/layout/Layout"));
const Shop = lazy(() => import("./admin/shop/Shop"));
const Videos = lazy(() => import("./admin/groups/videos/Videos"));
const Text = lazy(() => import("./admin/groups/text/Text"));
const Table = lazy(() => import("./admin/groups/table/Table"));
const Admin = lazy(() => import("./admin/Admin"));
const Users = lazy(() => import("./admin/users/User"));
const Groups = lazy(() => import("./admin/groups/Groups"));
const Car = lazy(() => import("../pages/admin/car/Car"));
const CreateCars = lazy(() => import("../pages/admin/car/CreateCar"));
const Analytic = lazy(() => import("./admin/analytic/Analytic"));
const Likes = lazy(() => import("../pages/admin/likes/Likes"));
const Reports = lazy(() => import("../pages/admin/reports/Reports"));
const Settings = lazy(() => import("./admin/settings/Settings"));
const Catalog = lazy(() => import("./admin/catalog/Catalog"));
const Auth = lazy(() => import("./auth/Auth"));
const Login = lazy(() => import("./login/Login"));

const RouterMain = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SuspenseContainer>
            <Layout />
          </SuspenseContainer>
        }
      >
        <Route
          path="/"
          element={
            <SuspenseContainer>
              <Home />
            </SuspenseContainer>
          }
        />
        <Route
          path="about"
          element={
            <SuspenseContainer>
              <About />
            </SuspenseContainer>
          }
        />
        <Route
          path="contact"
          element={
            <SuspenseContainer>
              <Contact />
            </SuspenseContainer>
          }
        />
      </Route>

      <Route
        path="login"
        element={
          <SuspenseContainer>
            <Login />
          </SuspenseContainer>
        }
      />

      <Route path="/" element={<Auth />}>
        <Route
          path="admin"
          element={
            <SuspenseContainer>
              <Admin />
            </SuspenseContainer>
          }
        >
          <Route
            path="car"
            element={
              <SuspenseContainer>
                <Car />
              </SuspenseContainer>
            }
          />
          <Route
            path="createcars"
            element={
              <SuspenseContainer>
                <CreateCars />
              </SuspenseContainer>
            }
          />
          <Route
            path="catalog"
            element={
              <SuspenseContainer>
                <Catalog />
              </SuspenseContainer>
            }
          />
          <Route
            path="groups"
            element={
              <SuspenseContainer>
                <Groups />
              </SuspenseContainer>
            }
          >
            <Route
              index
              element={
                <SuspenseContainer>
                  <Videos />
                </SuspenseContainer>
              }
            />
            <Route
              path="table"
              element={
                <SuspenseContainer>
                  <Table />
                </SuspenseContainer>
              }
            />
            <Route
              path="text"
              element={
                <SuspenseContainer>
                  <Text />
                </SuspenseContainer>
              }
            />
          </Route>
          <Route
            path="users"
            element={
              <SuspenseContainer>
                <Users />
              </SuspenseContainer>
            }
          />
          <Route
            path="shop"
            element={
              <SuspenseContainer>
                <Shop />
              </SuspenseContainer>
            }
          />
          <Route
            path="analytic"
            element={
              <SuspenseContainer>
                <Analytic />
              </SuspenseContainer>
            }
          />
          <Route
            path="likes"
            element={
              <SuspenseContainer>
                <Likes />
              </SuspenseContainer>
            }
          />
          <Route
            path="reports"
            element={
              <SuspenseContainer>
                <Reports />
              </SuspenseContainer>
            }
          />
          <Route
            path="settings"
            element={
              <SuspenseContainer>
                <Settings />
              </SuspenseContainer>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default RouterMain;
