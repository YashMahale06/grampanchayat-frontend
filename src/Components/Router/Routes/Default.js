import React from "react";
import {Route,Routes } from "react-router-dom";
import Dashboard from "../../Dashboard/Dashboard";
import Home from "../../../pages/Home/Home.jsx"

const Default = () =>{
    return (
        <Routes>
        <Route index element={<Home />} />
        <Route path="/Dashboard" component={<Dashboard/>} />
        </Routes>
    )
}


export default Default;