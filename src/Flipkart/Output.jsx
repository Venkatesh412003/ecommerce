import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterCom from "./RouterCom";

function Output(){
    return(
        <>
        <BrowserRouter>

        <RouterCom/>

        </BrowserRouter>
        </>
    )
}
export default Output