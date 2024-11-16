import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home  from "./pages/Home";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Editor from "./comppanents/Editor";

const App = () =>{
  return(
    <>
      <BrowserRouter>
      <Routes>
       
          <Route path='/' index element={<Home />} />
          <Route path='/signUp' index element={<SignUp />} />
          <Route path='/login' index element={<Login />} />
          <Route path='/editor/:projectID' index element={<Editor />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App