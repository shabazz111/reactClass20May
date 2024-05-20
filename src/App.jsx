import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";
import ForgotPassword from "./app/screens/ForgotPassword";
import Home from "./app/screens/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
