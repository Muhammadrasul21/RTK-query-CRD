import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouterMain from "./pages/index";

const App = () => {
  return (
    <>
      <RouterMain />
      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
};

export default App;
