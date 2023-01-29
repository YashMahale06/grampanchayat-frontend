import React from "react";
import {Route,Routes } from "react-router-dom";
import Dashboard from "../../Dashboard/Dashboard";

const Default = () =>{
    return (
        <Routes>
        <Route index element={<Dashboard/>} />
        <Route path="/Dashboard" component={<Dashboard/>} />
        </Routes>
    )
}


export default Default;