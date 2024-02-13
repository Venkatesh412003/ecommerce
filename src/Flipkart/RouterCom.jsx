import React from "react";
import { Route,Routes } from "react-router-dom";
import NavBar from "./Navbar";
import Skincare from "./Skincare";
import Mens from "./Mens";
import LoginPage from "./Login";


function RouterCom(){
    return(
        <>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Skincare/>}/>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="/Mens" element={<Mens/>}/>
        </Routes>
        </>
    )
}
export default RouterCom